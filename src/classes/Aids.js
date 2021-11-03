import Aid from "./Aid"

export default class Fires {
  constructor(scene) {
    this.scene = scene
    this.aids = []
  }
  
  create(source) {
    let aid = this.getFirstDead()
    if (!aid) {
      let aid = new Aid(this.scene, source)
      this.add(aid)
    } else {
      aid.restart(source)
    }
  }

  add(aid) {
    this.aids.push(aid)
  }

  getFirstDead() {
    return this.aids.find((aid) => !aid.aid.active)
  }
}
