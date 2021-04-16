import Phaser from 'phaser';
import BootScene from "./scenes/BootScene"
import PreloadScene from "./scenes/PreloadScene"
import MenuScene from "./scenes/MenuScene"
import SettingsScene from "./scenes/SettingsScene"
import AboutScene from "./scenes/AboutScene"
import PlayerCountScene from "./scenes/PlayerCountScene"
import MapsScene from "./scenes/MapsScene"
import GameScene from "./scenes/GameScene"

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        BootScene,
        PreloadScene,
        MenuScene,
        SettingsScene,
        AboutScene,
        PlayerCountScene,
        MapsScene,
        GameScene,
    ],
    physics: {
        default: "matter",
        matter: {
            debug: true,
            gravity: { x: 0, y: 0 },
        },
    },
};

const game = new Phaser.Game(config);
