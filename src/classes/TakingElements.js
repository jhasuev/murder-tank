import Ammo from "./Ammo"
import Aid from "./Aid"

export default class Ammos {
  constructor(scene) {
    this.scene = scene
    this.takingElements = []
    this.elementType = undefined
  }

  create(source) {
    let takingElement = this.getFirstDead()
    if (!takingElement) {
      let takingElement = this.createNewElementInstance(source)
      this.add(takingElement)
    } else {
      takingElement.restart(source)
    }
  }

  createNewElementInstance(source) {
    const classes = {
      "ammo": Ammo,
      "aid": Aid,
    }
    const currentClass = classes[this.elementType]

    if (currentClass) {
      return new currentClass(this.scene, source)
    }
    
    console.error("No such class for create instance")
  }

  add(takingElement) {
    this.takingElements.push(takingElement)
  }

  getFirstDead() {
    return this.takingElements.find((takingElement) => !takingElement.takingElement.active)
  }
}
