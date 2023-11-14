import { loadGameScene } from "./game.js";
import { loadLoseScene } from "./lose.js";
import { loadMenuScene } from "./menu.js";

function loadScenes(){
    loadMenuScene();
    loadGameScene();
    loadLoseScene();
}

export {loadScenes};