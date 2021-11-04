import TakingElement from "./TakingElement"

export default class Aid extends TakingElement {
  constructor(scene, data) {
    super(scene, {...data, type: 'aid', frame: 'barricadeMetal'})
  }
}
