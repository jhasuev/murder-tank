export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot")
  }

  preload() {
    this.load.image("bg", require("../assets/img/bg.png"))
  }

  create() {
    this.scene.start("Preload")
  }
}
