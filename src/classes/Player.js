const DIRECTIONS = { BACKWARD: -1, NONE: 0, FORWARD: 1 }
const SPEED = 10

export default class Player {
  constructor(scene, map) {
    this.scene = scene
    this.map = map

    this.car = this.scene.matter.add.sprite(100, 100, "objects", "tank_green")

    this.scene.events.on("update", this.update, this)
  }

  get direction() {
    let direction = DIRECTIONS.NONE

    if (this.scene.cursors.up.isDown) {
      direction = DIRECTIONS.FORWARD
    } else if (this.scene.cursors.down.isDown) {
      direction = DIRECTIONS.BACKWARD
    }

    return direction
  }

  get velocity() {
    return this.direction * SPEED
  }

  getVelocityFromAngle() {
    const vec2 = new Phaser.Math.Vector2()
    return vec2.setToPolar(this.car.rotation + Math.PI/2, this.velocity)
  }

  update() {
    this.move()
  }

  move() {
    const velocity = this.getVelocityFromAngle()
    this.car.setVelocity(velocity.x, velocity.y)
  }
}