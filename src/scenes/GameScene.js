import Map from "../classes/Map"

export default class MapsScene extends Phaser.Scene {
  constructor() {
    super("Game")
  }

  create(map) {
    console.log("Map you selected:", map);
    this.map = new Map(this)
  }
}
