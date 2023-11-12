import { kaboom } from "./kaboom.js";
import { spawnTree } from "./utils.js";

// Game
kaboom({
    background: [0,0,0],
    scale: 2,
});
// Sprites
loadSprite("bean", "sprites/bean.png");
// CONSTANTS
const JUMP_FORCE = 1000;
// Properties
let score = 0;

// Game Scene
scene("game", () => {
    spawnTree();
    setGravity(1600);

    //#region Components

    const scoreLabel = add([
        text(score),
        pos(24, 24)
    ]);

    // add something to screen
    const bean = add([
        sprite("bean"),
        pos(100, 0),
        scale(2.5),
        area(),
        body(),
        health(3),
    ]);
    
    // add platfom
    add([
        rect(width(), 48),
        pos(0, height() - 48),
        outline(4), // border
        area(), // detect collision
        body({ isStatic: true }), // body can't move
        color(127, 200, 255),
    ]);

    //#endregion

    //#region Events

    onKeyPress("space", () => {
        if(!bean.isGrounded()) return;
        bean.jump(JUMP_FORCE);
    });
    
    bean.onCollide("tree", () => {
        addKaboom(bean.pos);
        shake();
        bean.hurt(1);
        if(bean.hp() <= 0) go("lose"); // go to "lose" scene here
    });

    onUpdate(() => {
        score++;
        scoreLabel.text = score;
    });

    //#endregion

});

// Lose Scene
scene("lose", () => {
    add([
        sprite("bean"),
        pos(width() / 2, height() / 2 - 80),
        scale(2),
        anchor("center"),
    ]);

    // display score
    add([
        text(score),
        pos(width() / 2, height() / 2 + 80),
        scale(2),
        anchor("center"),
    ]);

    // go back to game with space is pressed
    onKeyPress("space", () => go("game"));
    onClick(() => go("game"));
});

// We launch on game scene
go("game");