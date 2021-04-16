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
    this.load.image("map_preview_1", require("../assets/img/map_preview_1.png"))
    this.load.spritesheet("tilesetPng", require("../assets/img/maps/tileset.png"), { frameWidth: 128, frameHeight: 128 })
    this.load.tilemapTiledJSON("tilemap_1", require("../assets/img/maps/tilemap_1.json"))
    this.load.atlas("objects", require("../assets/img/objects.png"), require("../assets/img/objects.json"))
  }

  create() {
    this.scene.start("Game")
  }
}
