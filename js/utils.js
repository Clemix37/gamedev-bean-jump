function spawnTree() {
    // add tree
    add([
        rect(48, rand(24, 80)),
        area(),
        outline(4),
        pos(width(), height() - 48),
        anchor("botleft"),
        color(255, 180, 255),
        move(LEFT, 240),
        "tree", // add a tag here
    ]);
    wait(rand(1.5, 2.5), () => {
        spawnTree();
    });
}

export {spawnTree};