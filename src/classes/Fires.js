import Phaser from "phaser"
import Fire from "./Fire"

export default class Fires {
  constructor(scene) {
    this.scene = scene
    this.init()
  }
  
  init() {
    this.fires = []
  }

  create(source) {
    let fire = this.getFirstDead()
    if (!fire) {
      let fire = new Fire(this.scene, source)
      this.add(fire)
    } else {
      fire.restart(source)
    }
  }

  add(fire) {
    this.fires.push(fire)
  }

  getFirstDead() {
    return this.fires.find((fire) => !fire.fire.active)
  }

  move() {
    this.fires.forEach((fire) => {
      if (fire.fire.active) {
        fire.move()
      }
    })
  }

  update() {
    this.move()
  }
}
