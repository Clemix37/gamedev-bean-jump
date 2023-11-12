import { loadGameScene } from "./game.js";
import { loadLoseScene } from "./lose.js";

function loadScenes(){
    loadGameScene();
    loadLoseScene();
}

export {loadScenes};