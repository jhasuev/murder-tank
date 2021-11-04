export default class TakingElement {
  constructor(scene, data) {
    this.scene = scene
    this.takingElement = this.create(TakingElement.generateData(data))
    this.takingElement.classObject = this
    this.takingElement.name = data.type

    this.takingElement.setVelocity(0, 0)

    this.addAnimation(this.takingElement)
  }

  static generateData(source) {
    return {
      ...source,
      texture: "objects"
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
    const data = TakingElement.generateData(source)
    this.takingElement.setX(data.x)
    this.takingElement.setY(data.y)
    this.takingElement.setTexture(data.texture)
    this.takingElement.setFrame(data.frame)

    this.setAlive(true)
  }
  
  setAlive(state) {
    this.takingElement.body.enable = state
    this.takingElement.setCollisionCategory(state)
    this.takingElement.setActive(state)
    this.takingElement.setVisible(state)
  }

  take() {
    this.setAlive(false)
  }
}
