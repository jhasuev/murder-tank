import Map from "../classes/Map"
import Player from "../classes/Player"
import Fires from "../classes/Fires"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game")
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys()
    this.cursors.space.on("down", this.onSpaceDown.bind(this))
  }

  create(map) {
    this.map = new Map(this)
    this.player = new Player(this, this.map)
    this.fires = new Fires(this)

    this.cameras.main.setBounds(0, 0, this.map.tilemap.widthInPixels, this.map.tilemap.heightInPixels)
    this.cameras.main.startFollow(this.player.car)
  }

  onSpaceDown() {
    this.player.fire()
  }

  update() {
    this.fires.update()
  }
}
