import Phaser from 'phaser';
import BootScene from "./scenes/BootScene"

const config = {
    type: Phaser.AUTO,
    width: innerWidth,
    height: innerHeight,
    scene: [
        BootScene,
    ]
};

const game = new Phaser.Game(config);

// изменения ширины, высоты канваса при изменения размеров экрана
window.addEventListener("resize", () => {
    game.scale.resize(innerWidth, innerHeight)
})
