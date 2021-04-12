import * as Helper from "../helpers"
import Buttons from "../classes/Buttons"

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("Menu")
  }

  create() {
    Helper.createBackground(this, "bg")
    Helper.createSceneTitle(this, "Меню")
    this.createButtons()
    
    this.input.on("gameobjectdown", this.onButtonClicked, this)
  }

  onButtonClicked(pointer, object) {
    switch (object.buttonObject.type) {
      case "play":
        // go to GameScene
        break;
        
        case "settings":
        // go to SettingsScene
        break;

        // go to AboutScene
        case "about":
        break;
    }
  }

  createButtons() {
    const buttons = [
      {
        text: "Играть",
        type: "play",
      },
      {
        text: "Настройки",
        type: "settings",
      },
      {
        text: "Об игре",
        type: "about",
      },
    ]

    this.buttons = new Buttons(this, buttons)
  }
}
