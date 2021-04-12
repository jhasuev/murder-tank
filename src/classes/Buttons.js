export default class Buttons {
  constructor(scene, buttons, params = {}) {
    this.scene = scene
    this.buttons = buttons
    this.params = params
    this.init()
    this.create()
  }

  init() {
    this.params = {
      buttonsStartY: 300,
      buttonWidth: 500,
      buttonHeight: 70,
      offset: 30,
      ...this.params,
    }
  }

  create() {
    this.buttons.forEach((button, index) => {
      const x = (this.scene.game.config.width - this.params.buttonWidth) / 2
      const y = this.params.buttonsStartY + ((this.params.buttonHeight + this.params.offset) * index)

      this.createBackground(button, x, y, this.params.buttonWidth, this.params.buttonHeight)
      this.createText(button, y, this.params.buttonHeight)
    })

    return this.buttons
  }

  createBackground(button, x, y, buttonWidth, buttonHeight) {
    button.rectangle = this.scene.add.rectangle(x, y, buttonWidth, buttonHeight, 0xFFFFFF)
    button.rectangle.setInteractive()
    button.rectangle.setOrigin(0)
    button.rectangle.buttonObject = button
  }

  createText(button, y, buttonHeight) {
    button.textObject = this.scene.add.text(this.scene.game.config.width / 2, y + buttonHeight / 2, button.text, {
      fontFamily: "Arial",
      fontSize: 32,
      fill: "#000",
    }).setOrigin(.5)
  }
}
