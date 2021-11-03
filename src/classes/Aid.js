export default class Aid {
  constructor(scene, data) {
    this.scene = scene
    this.aid = this.create(Aid.generateData(data))
    this.aid.classObject = this
    this.aid.name = "aid"

    this.aid.setVelocity(0, 0)

    this.addAnimation(this.aid)
  }

  static generateData(source) {
    return {
      ...source,
      texture: "objects",
      frame: "barricadeMetal",
    }
  }

  create(data) {
    return this.scene.matter.add.sprite(data.x, data.y, data.texture, data.frame)
  }

  addAnimation(object) {
    this.scene.tweens.add({
        targets: [object],
        duration: 1250,
        scale: 2,
        repeat: -1,
        yoyo: true,
    })
  }

  restart(source) {
    const data = Aid.generateData(source)
    this.aid.setX(data.x)
    this.aid.setY(data.y)
    this.aid.setTexture(data.texture)
    this.aid.setFrame(data.frame)

    this.setAlive(true)
  }
  
  setAlive(state) {
    this.aid.body.enable = state
    this.aid.setCollisionCategory(state)
    this.aid.setActive(state)
    this.aid.setVisible(state)
  }

  take() {
    this.setAlive(false)
  }
}
