export default class LoadingBar {
  constructor(scene) {
    this.scene = scene
    this.init()
  }

  init() {
    this.createLoader()
    this.renderLoader()
    this.createEvents()
  }

  createLoader() {
    this.back = this.scene.add.graphics()
    this.front = this.scene.add.graphics()
  }

  renderLoader(progress) {
    const width = 750
    const height = 30
    const x = this.scene.game.config.width / 2 - width / 2
    const y = this.scene.game.config.height - 200
    const padding = 5

    this.back.fillStyle(0x333333).fillRect(x, y, width, height)
    this.front.fillStyle(0xFFFFFF).fillRect(x + padding, y + padding, (width - padding * 2) * progress, height - padding * 2)
  }

  createEvents() {
    this.scene.load.on("progress", progress => {
      this.renderLoader(progress)
    })

    this.scene.load.on("complete", () => {
      this.back.destroy()
      this.front.destroy()
    })
  }
}