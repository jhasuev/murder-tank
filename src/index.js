import Phaser from 'phaser';
import BootScene from "./scenes/BootScene"

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
    ],
};

const game = new Phaser.Game(config);
