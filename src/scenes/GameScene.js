import Map from "../classes/Map"
import Player from "../classes/Player"
import Fires from "../classes/Fires"
import Panel from "../classes/Panel"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game")
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys()
    this.cursors.space.on("down", this.onSpaceDown.bind(this))

    this.addCollision()
  }

  create(map) {
    this.map = new Map(this)
    this.player = new Player(this, this.map)
    this.fires = new Fires(this)
    this.panel = new Panel(this)

    this.cameras.main.setBounds(0, 0, this.map.tilemap.widthInPixels, this.map.tilemap.heightInPixels)
    this.cameras.main.startFollow(this.player.car)
  }

  onSpaceDown() {
    this.player.fire()
  }
  
  addCollision() {
    this.matter.world.on('collisionstart', this.onCollision.bind(this));
  }

  onCollision(event, bodyA, bodyB) {
    let fire = this.getCollidedObject(bodyA, bodyB, 'fire')
    let npc = this.getCollidedObject(bodyA, bodyB, 'npc')
    
    if (fire) {
      // есть пуля...
      fire.boom()
    }

    if (fire && npc) {
      // попали по врагу или враг по нам
    }
  }

  getCollidedObject(bodyA, bodyB, name) {
    if (bodyA.gameObject.name === name) {
      return bodyA.gameObject.classObject
    } else if (bodyB.gameObject.name === name) {
      return bodyB.gameObject.classObject
    }

    return null
  }

  update() {
    this.fires.update()
    this.panel.update()
  }
}
