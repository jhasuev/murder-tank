import Map from "../classes/Map"
import Player from "../classes/Player"

export default class MapsScene extends Phaser.Scene {
  constructor() {
    super("Game")
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  create(map) {
    this.map = new Map(this)
    this.player = new Player(this, this.map)

    this.cameras.main.setBounds(0, 0, this.map.tilemap.widthInPixels, this.map.tilemap.heightInPixels)
    this.cameras.main.startFollow(this.player.car)
  }
}
