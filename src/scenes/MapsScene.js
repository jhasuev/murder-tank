import * as Helper from "../helpers"
import Buttons from "../classes/Buttons"

export default class MapsScene extends Phaser.Scene {
  constructor() {
    super("Maps")
  }

  create() {
    Helper.createBackground(this, "bg")
    Helper.createSceneTitle(this, "Выбрать карту")
    this.createMaps()
    this.createButtons()

    this.input.on("gameobjectdown", this.onButtonClicked, this)
  }

  onButtonClicked(pointer, object) {
    if (object.buttonObject) {
      switch (object.buttonObject.type) {
        case "back":
          this.scene.start("PlayerCount")
          break;
      }
    } else if (object.mapObject) {
      this.scene.start("Game", object.mapObject)
    }
  }

  createMaps() {
    this.maps = [
      {
        id: 1,
        texture: "map_preview_1",
      },
      {
        id: 2,
        texture: "map_preview_1",
      },
      {
        id: 3,
        texture: "map_preview_1",
      },
      {
        id: 4,
        texture: "map_preview_1",
      },
      {
        id: 5,
        texture: "map_preview_1",
      },
      {
        id: 6,
        texture: "map_preview_1",
      },
    ]
    
    const width = 200
    const height = 200
    const offset = 30
    const cols = Math.min(3, this.maps.length)
    const topOffset = 300
    const mapsContainerWidth = (width + offset) * cols - offset
    const leftOffset = (this.game.config.width - mapsContainerWidth) / 2
    let col = 0
    let row = 0

    this.maps.forEach(mapItem => {
      let x = (width + offset) * col + leftOffset
      let y = (height + offset) * row + topOffset

      mapItem.map = this.add.image(x, y, mapItem.texture).setOrigin(0).setInteractive()
      mapItem.map.mapObject = mapItem

      if (++col >= cols) {
        col = 0
        row += 1
      }
    })
  }

  createButtons() {
    const buttons = [
      {
        text: "<= Вернуться назад",
        type: "back",
      },
    ]

    this.buttons = new Buttons(this, buttons, {
      buttonsStartY: 300 + 500
    })
  }
}
