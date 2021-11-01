import Map from "../classes/Map"
import Player from "../classes/Player"
import Fires from "../classes/Fires"
const PANEL = {
  X: 10,
  Y: 10,
  FONT_SIZE: 20,
  WIDTH: 200,
  HEIGHT: 200,
  PADDING: 10,
}

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
    this.addFires()

    this.cameras.main.setBounds(0, 0, this.map.tilemap.widthInPixels, this.map.tilemap.heightInPixels)
    this.cameras.main.startFollow(this.player.car)
    
    this.addInfoPanel()
  }

  addFires() {
    this.fires = new Fires(this)
  }

  addInfoPanel() {
    this.infoPanel = this.add.graphics()
    this.infoPanel.fillStyle(0x000000, .75).fillRect(PANEL.X, PANEL.Y, PANEL.WIDTH, PANEL.HEIGHT).setScrollFactor(0)

    this.addFiresCountsToPanel()
  }

  addFiresCountsToPanel() {
    const countSprite = this.add.sprite(PANEL.X + PANEL.PADDING, PANEL.Y + PANEL.PADDING, 'objects', 'bulletRed1_outline').setOrigin(0)
    this.firesCountsText = this.add.text(
      countSprite.x + countSprite.width + PANEL.FONT_SIZE,
      countSprite.y + ((countSprite.height - PANEL.FONT_SIZE) / 2),
      "",
      { fontSize: PANEL.FONT_SIZE }
    )
    this.updateFiresCountsText()
  }

  updateFiresCountsText() {
    this.firesCountsText.setText('x ' + this.fires.count)
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
    this.updateFiresCountsText()
  }
}
