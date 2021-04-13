import * as Helper from "../helpers"
import Buttons from "../classes/Buttons"

export default class PlayerCountScene extends Phaser.Scene {
  constructor() {
    super("PlayerCount")
  }

  create() {
    Helper.createBackground(this, "bg")
    Helper.createSceneTitle(this, "Тип игры")
    this.createButtons()

    this.input.on("gameobjectdown", this.onButtonClicked, this)
  }

  onButtonClicked(pointer, object) {
    switch (object.buttonObject.type) {
      case "one":
      case "two":
        this.scene.start("Maps")
        break;
      case "back":
        this.scene.start("Menu")
        break;
    }
  }

  createButtons() {
    const buttons = [
      {
        text: "Играть одному",
        type: "one",
      },
      {
        text: "Играть вдвоём",
        type: "two",
      },
      {
        text: "<= Вернуться назад",
        type: "back",
      },
    ]

    this.buttons = new Buttons(this, buttons)
  }
}
