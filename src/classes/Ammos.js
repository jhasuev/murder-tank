import Ammo from "./Ammo"

export default class Ammos {
  constructor(scene) {
    this.scene = scene
    this.init()
  }
  
  init() {
    this.ammos = []
  }

  create(source) {
    let ammo = this.getFirstDead()
    if (!ammo) {
      let ammo = new Ammo(this.scene, source)
      this.add(ammo)
    } else {
      ammo.restart(source)
    }
  }

  add(ammo) {
    this.ammos.push(ammo)
  }

  getFirstDead() {
    return this.ammos.find((ammo) => !ammo.ammo.active)
  }

  move() {
    this.ammos.forEach((ammo) => {
      if (ammo.ammo.active) {
        ammo.move()
      }
    })
  }

  update() {
    this.move()
  }
}
