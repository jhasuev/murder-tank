import * as Helper from "../helpers"
import LoadingBar from "../classes/LoadingBar"

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload")
  }

  preload() {
    Helper.createBackground(this, "bg", .8)
    this.LoadingBar = new LoadingBar(this)

    // тут будем загружать ассеты
  }

  create() {
    this.scene.start("Menu")
  }
}
