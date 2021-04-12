import { createBackground } from "../helpers"

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("Menu")
  }

  create() {
    this.createBackground()
    this.createSceneTitle()
    this.createButtons()
    
    this.input.on("gameobjectdown", this.onObjectClicked, this)
  }

  onObjectClicked(pointer, object) {
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

  createBackground() {
    createBackground(this, "bg")

    this.add.graphics()
      .fillStyle(0x000, .5)
      .fillRect(0, 0, this.game.config.width, this.game.config.height)
  }

  createSceneTitle() {
    this.add.text(this.game.config.width / 2, 100, "Menu", {
      fontFamily: "Arial",
      fontSize: "120px",
    }).setOrigin(.5, 0)
  }

  createButtons() {
    this.buttons = [
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

    const buttonsStartY = 300
    const buttonWidth = 500
    const buttonHeight = 70
    const offset = 30

    this.buttons.forEach((button, index) => {
      const x = (this.game.config.width - buttonWidth) / 2
      const y = buttonsStartY + ((buttonHeight + offset) * index)

      button.rectangle = this.add.rectangle(x, y, buttonWidth, buttonHeight, 0xFFFFFF)
      button.rectangle.setInteractive()
      button.rectangle.setOrigin(0)
      button.rectangle.buttonObject = button

      button.textObject = this.add.text(this.game.config.width / 2, y + buttonHeight / 2, button.text, {
        fontFamily: "Arial",
        fontSize: 32,
        fill: "#000",
      }).setOrigin(.5)
    })
  }
}
