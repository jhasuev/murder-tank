import * as Helper from "../helpers"
import Buttons from "../classes/Buttons"

export default class AboutScene extends Phaser.Scene {
  constructor() {
    super("About")
  }

  create() {
    Helper.createBackground(this, "bg")
    Helper.createSceneTitle(this, "Об игре")
    this.createText()
    this.createButtons()

    this.input.on("gameobjectdown", this.onButtonClicked, this)
  }

  onButtonClicked(pointer, object) {
    switch (object.buttonObject.type) {
      case "back":
        this.scene.start("Menu")
        break;
    }
  }

  createText() {
    let text = `
      Murder Tanks - игра с танками, где можно играть как против ботов, так и против соперника. С возможностью выбора карты.

      Ассеты: https://www.kenney.nl/assets/topdown-tanks-redux
      ? поискать также звуки

      1) BootScene
        сцена загрузчика, который нужен для загрузки фоновой картинки, для прелоадера
    `
    text = text.trim().split("\n").map(line => line.trim()).join("\n")

    this.add.text(this.game.config.width / 2, 300, text, {
      font: "22px Arial"
    }).setOrigin(.5, 0)
  }

  createButtons() {
    const buttons = [
      {
        text: "<= Вернуться назад",
        type: "back",
      },
    ]

    this.buttons = new Buttons(this, buttons, { buttonsStartY: 300 + 300 })
  }
}
