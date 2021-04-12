import * as Helper from "../helpers"
import Buttons from "../classes/Buttons"

export default class SettingsScene extends Phaser.Scene {
  constructor() {
    super("Settings")
  }

  create() {
    Helper.createBackground(this, "bg")
    Helper.createSceneTitle(this, "Настройки")
    this.createButtons()

    this.input.on("gameobjectdown", this.onButtonClicked, this)
  }

  onButtonClicked(pointer, object) {
    switch (object.buttonObject.type) {
      case "soundsOn":
        break;

      case "soundsOff":
        break;

      case "back":
        this.scene.start("Menu")
        break;
    }
  }

  createButtons() {
    const buttons = [
      {
        text: "Включить звук",
        type: "soundsOn",
      },
      {
        text: "Выключить звук",
        type: "soundsOff",
      },
      {
        text: "<= Вернуться назад",
        type: "back",
      },
    ]

    this.buttons = new Buttons(this, buttons)
  }
}
