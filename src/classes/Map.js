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
    this.createLayers()
    this.createCollisions()
  }

  createLayers() {
    this.tilemap.createStaticLayer("sand", this.tileset)
    this.tilemap.createStaticLayer("road", this.tileset)
  }

  createCollisions() {
    this.tilemap.findObject("collisions", collision => {
      const sprite = this.scene.matter.add.sprite(collision.x + collision.width / 2, collision.y - collision.height / 2, "objects", collision.name)
      sprite.setStatic(true)
    })
  }
}