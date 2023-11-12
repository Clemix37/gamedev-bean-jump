import { kaboom } from "./kaboom.js";
import { loadScenes } from "./scenes/scenes.js";

// Game
kaboom({
    background: [0,0,0],
    scale: 2,
});
// Sprites
loadBean();

loadScenes(); // We load every scene

// We launch on game scene
go("game");