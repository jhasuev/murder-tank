export default class Fire {
  constructor(scene, data) {
    this.scene = scene
    this.create(Fire.generateData(data))
  }

  static generateData(source) {
    const angle = Math.PI - (source.rotation - Math.PI)

    const r = source.height / 1.25
    const x = (r * Math.sin( angle )) + source.x
    const y = (r * Math.cos( angle )) + source.y

    return {
      x,
      y,
      angle: source.angle - 180,
      texture: "objects",
      frame: "bulletRed1_outline",
    }
  }

  create(data) {
    if (!this.fire) {
      this.fire = this.scene.matter.add.sprite(data.x, data.y, data.texture, data.frame)
      this.fire.setAngle(data.angle)
    }
  }

  getVelocity(velocity) {
    let vec2 = new Phaser.Math.Vector2()
    return vec2.setToPolar(this.fire.rotation - Math.PI / 2, velocity)
  }

  move(coords = null) {
    if (!coords) {
      coords = this.getVelocity(11)
    }

    this.fire.setX(this.fire.x + coords.x)
    this.fire.setY(this.fire.y + coords.y)
  }

  setAlive(state) {
    this.fire.body.enable = state
    this.fire.setCollisionCategory(state)
    this.fire.setActive(state)
    this.fire.setVisible(state)
    this.fire.setIgnoreGravity(state)

    if (!state) {
      this.fire.setAngularVelocity(0)
      this.fire.setVelocity(0, 0)
    }
  }
}
