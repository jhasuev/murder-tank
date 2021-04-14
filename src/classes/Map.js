export default class Map {
  constructor(scene) {
    this.scene = scene
    this.init()
    this.create()
  }

  init() {
    this.tilemap = this.scene.make.tilemap({ key: "tilemap_1" })
    this.tileset = this.tilemap.addTilesetImage("tileset", "tilesetPng", 128, 128, 0, 0)
  }

  create() {
    this.tilemap.createStaticLayer("sand", this.tileset)
    this.tilemap.createStaticLayer("road", this.tileset)
  }
}