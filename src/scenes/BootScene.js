import * as Helper from "../helpers"
import Phaser from "phaser"

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot")
  }

  preload() {
    this.load.image("bg", require("../assets/img/bg.png"))

  }

  create() {
    this.bg = this.add.image(this.game.config.width / 2, this.game.config.height / 2, "bg")
    Helper.setBgCover(this, this.bg)
  }
}