import Phaser from "phaser"
import Fire from "./Fire"
const INITIAL_BULLET_COUNT = 5

export default class Fires {
  constructor(scene) {
    this.scene = scene
    this.init()
    this.count = INITIAL_BULLET_COUNT
  }
  
  init() {
    this.fires = []
  }

  create(source) {
    if (this.count <= 0) {
      return
    }

    let fire = this.getFirstDead()
    if (!fire) {
      let fire = new Fire(this.scene, source)
      this.add(fire)
    } else {
      fire.restart(source)
    }
    
    --this.count
  }

  add(fire) {
    this.fires.push(fire)
  }

  getCount() {
    return this.count
  }

  addFires(count) {
    this.count += count
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
