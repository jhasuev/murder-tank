import { createBackground } from "../helpers"
import LoadingBar from "../classes/LoadingBar"

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload")
  }

  preload() {
    this.createBackground()
    this.LoadingBar = new LoadingBar(this)

    // тут будем загружать ассеты
  }

  create() {
    this.scene.start("Menu")
  }

  createBackground() {
    createBackground(this, "bg")

    this.add.graphics()
      .fillStyle(0x000, .8)
      .fillRect(0, 0, this.game.config.width, this.game.config.height)
  }
}
