import Phaser from 'phaser';
import BootScene from "./scenes/BootScene"
import PreloadScene from "./scenes/PreloadScene"
import MenuScene from "./scenes/MenuScene"

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
    ],
};

const game = new Phaser.Game(config);
