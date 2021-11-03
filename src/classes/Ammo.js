export default class Fire {
  constructor(scene, data) {
    this.scene = scene
    this.ammo = this.create(Fire.generateData(data))
    this.ammo.classObject = this
    this.ammo.name = "ammo"

    this.ammo.setVelocity(0, 0)

    this.addAnimation(this.ammo)
  }

  static generateData(source) {
    return {
      ...source,
      texture: "objects",
      frame: "bulletRed1_outline",
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
    const data = Fire.generateData(source)
    this.ammo.setX(data.x)
    this.ammo.setY(data.y)
    this.ammo.setTexture(data.texture)
    this.ammo.setFrame(data.frame)

    this.setAlive(true)
  }
  
  setAlive(state) {
    this.ammo.body.enable = state
    this.ammo.setCollisionCategory(state)
    this.ammo.setActive(state)
    this.ammo.setVisible(state)
  }

  take() {
    this.setAlive(false)
  }
}
