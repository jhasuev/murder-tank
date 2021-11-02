const TEMPLATE_SIGN = '%'
const PANEL = {
  X: 10,
  Y: 10,
  FONT_SIZE: 20,
  WIDTH: 200,
  HEIGHT: 200,
  PADDING: 10,
}

export default class Panel {
  constructor(scene) {
    this.scene = scene

    this.info = [
      {
        type: "icon",
        icon: {
          texture: "objects",
          frame: "bulletRed1_outline",
          width: 15,
        },
        text: {
          template: `x ${TEMPLATE_SIGN}`,
          func: () => this.scene.fires.getCount(),
        }
      },
      {
        type: "icon",
        icon: {
          texture: "objects",
          frame: "tank_green",
        },
        text: {
          template: `x ${TEMPLATE_SIGN}`,
          func: () => this.scene.fires.getCount(),
        }
      },
    ]

    this.addInfoPanelBackground()
    this.addInfo()
  }

  
  addInfoPanelBackground() {
    this.infoPanel = this.scene.add.graphics()
    this.infoPanel.fillStyle(0x000000, .75).fillRect(PANEL.X, PANEL.Y, PANEL.WIDTH, PANEL.HEIGHT).setScrollFactor(0)
  }

  addInfo() {
    this.info.forEach((item, i) => {
      let countSprite = null
      
      if (item.type === 'icon') {
        countSprite = this.scene.add.sprite(0, 0, item.icon.texture, item.icon.frame).setOrigin(0).setScrollFactor(0)

        countSprite.width = countSprite.displayWidth = item.icon.width || 30
        countSprite.height = countSprite.displayHeight = item.icon.height || 30
        countSprite.setX(PANEL.X + PANEL.PADDING)
        countSprite.setY(PANEL.Y + PANEL.PADDING + (i * (PANEL.FONT_SIZE + countSprite.height)))
      }

      item.textObject = this.scene.add.text(
        countSprite.x + countSprite.width + PANEL.FONT_SIZE,
        countSprite.y + ((countSprite.height - PANEL.FONT_SIZE) / 2),
        this.getReplacedText(item.text),
        { fontSize: PANEL.FONT_SIZE }
      ).setScrollFactor(0)
    })
  }

  getReplacedText({ template, func }) {
    return template.split(TEMPLATE_SIGN).join(func())
  }

  
  update() {
    this.info.forEach(item => {
      item.textObject.setText(this.getReplacedText(item.text))
    })
  }
}