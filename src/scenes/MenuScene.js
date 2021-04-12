import { createBackground } from "../helpers"

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("Menu")
  }

  create() {
    this.createBackground()
  }

  createBackground() {
    createBackground(this, "bg")

    this.add.graphics()
      .fillStyle(0x000, .5)
      .fillRect(0, 0, this.game.config.width, this.game.config.height)
  }
}
