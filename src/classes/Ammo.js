import TakingElement from "./TakingElement"

export default class Ammo extends TakingElement {
  constructor(scene, data) {
    super(scene, {...data, type: 'ammo', frame: 'bulletRed1_outline'})
  }
}
