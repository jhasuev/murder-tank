import Ammo from "./Ammo"

export default class Ammos {
  constructor(scene) {
    this.scene = scene
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
}
