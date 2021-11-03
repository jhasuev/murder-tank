const DIRECTIONS = { BACKWARD: -1, NONE: 0, FORWARD: 1 }
const TURNS = { LEFT: -1, NONE: 0, RIGHT: 1 }
const SPEED = 8
const ACCELERATION = .5
const XP_COLORS = {
  FULL: 0x00FFFF,
  WARN: 0xFF9900,
  DANGER: 0xFF0000,
}

export default class Player {
  constructor(scene, map) {
    this.scene = scene
    this.map = map
    this._velocity = 1

    this.addCar()
    this.addXpIndicator()

    this.scene.events.on("update", this.update, this)
  }
  
  addCar() {
    this.car = this.scene.matter.add.sprite(0, 0, "objects", "tank_green")
    this.car.name = 'npc'
    this.car.classObject = this
    this.car.setFixedRotation(true)

    this.car.setX(111)
    this.car.setY(111)
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
      turn = this.scene.cursors.down.isDown ? TURNS.RIGHT : TURNS.LEFT
    } else if (this.scene.cursors.right.isDown) {
      turn = this.scene.cursors.down.isDown ? TURNS.LEFT : TURNS.RIGHT
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
  
  get currentXpWidth() {
    return this.xp / 100 * this.car.width
  }

  get xpX() {
    return this.car.x + this.car.width / 2
  }

  get xpY() {
    return this.car.y - (this.car.height / 2) - this.xpGraphicsBack.height
  }

  get xpColor() {
    if (this.xp > 80) {
      return XP_COLORS.FULL
    }

    if (this.xp > 40) {
      return XP_COLORS.WARN
    }

    return XP_COLORS.DANGER
  }

  getVelocityFromAngle() {
    const vec2 = new Phaser.Math.Vector2()
    return vec2.setToPolar(this.car.rotation + Math.PI/2, this.velocity)
  }

  update() {
    this.move()
    this.updateXp()
    this.removeXp(.1)
  }

  addXpIndicator() {
    this.xp = 27

    this.xpGraphicsBack = this.scene.add.rectangle(0, 0, this.car.width, 8, 0x000000, .5).setOrigin(1)
    this.xpGraphicsFront = this.scene.add.rectangle(0, 0, this.car.width, 8, 0x000000, 1).setOrigin(1)
  }

  updateXp() {
    this.xpGraphicsBack.setX(this.xpX)
    this.xpGraphicsBack.setY(this.xpY)

    this.xpGraphicsFront.setX(this.xpX)
    this.xpGraphicsFront.setY(this.xpY)
    this.xpGraphicsFront.width = this.currentXpWidth
    this.xpGraphicsFront.setFillStyle(this.xpColor)
  }

  addXp(xp) {
    this.xp = Math.min(100, this.xp + xp)
  }

  removeXp(xp) {
    this.xp = Math.max(0, this.xp - xp)
  }

  fire() {
    this.scene.fires.create(this.car)
  }

  move() {
    const velocity = this.getVelocityFromAngle()
    this.car.setVelocity(velocity.x, velocity.y)
    this.car.setAngle(this.angle)
  }
}