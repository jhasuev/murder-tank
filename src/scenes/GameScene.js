export default class MapsScene extends Phaser.Scene {
  constructor() {
    super("Game")
  }

  create(map) {
    console.log("Map you selected:", map);
  }
}
