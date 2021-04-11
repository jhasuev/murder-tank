export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot")
  }

  preload() {
    console.log("BootScene preload()");
  }
}