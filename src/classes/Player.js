const DIRECTIONS = { BACKWARD: -1, NONE: 0, FORWARD: 1 }
const TURNS = { LEFT: -1, NONE: 0, RIGHT: 1 }
const SPEED = 8
const ACCELERATION = .5

export default class Player {
  constructor(scene, map) {
    this.scene = scene
    this.map = map

    this.car = this.scene.matter.add.sprite(0, 0, "objects", "tank_green")
    this.car.setX(111)
    this.car.setY(111)
    this.car.setFixedRotation(true)
    // this.car.setOrigin(.5)
    // console.log('this.car.setOriginScale', this.car.setOriginScale)
    // this.car.setOriginScale(0)
    // let radius = 0
    // setInterval(() => {
    //   this.car.setAngle(radius)
    //   if (++radius > 360) {
    //     radius = 0
    //   }
    // }, 11)
    this.car.setAngle(90)
    // console.log('=======');
    // console.log(this.car.angle);
    // console.log('=======');
    this._velocity = 1

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

  get turn() {
    let turn = TURNS.NONE

    if (this.scene.cursors.left.isDown) {
      turn = TURNS.LEFT
    } else if (this.scene.cursors.right.isDown) {
      turn = TURNS.RIGHT
    }

    return turn
  }

  get angle() {
    return this.car.angle + this.turn * this.maxSpeed / 4
  }

  get velocity() {
    const speed = Math.abs(this._velocity)
    const max = this.maxSpeed

    if (!this.direction && speed > 0 || this.direction && speed > max) {
      this._velocity -= ACCELERATION * Math.sign(this._velocity)
    } else if (this.direction && speed < max) {
      this._velocity += ACCELERATION * Math.sign(this.direction)
    }

    return this._velocity
  }

  get maxSpeed() {
    return this.map.getTileFriction(this.car) * SPEED
  }

  getVelocityFromAngle() {
    const vec2 = new Phaser.Math.Vector2()
    return vec2.setToPolar(this.car.rotation + Math.PI/2, this.velocity)
  }

  update() {
    this.move()
  }

  fire() {
    console.log(111111111)
    this.scene.fires.create(this.car)
  }

  move() {
    const velocity = this.getVelocityFromAngle()
    this.car.setVelocity(velocity.x, velocity.y)
    this.car.setAngle(this.angle)
  }
}