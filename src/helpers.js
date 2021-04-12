const setBgCover = (scene, image) => {
  let scaleX = scene.game.config.width / image.width
  let scaleY = scene.game.config.height / image.height

  return image.setScale(Math.max(scaleX, scaleY))
}

export const createBackground = (scene, texture, fade = .5) => {
  const sceneWidth = scene.game.config.width
  const sceneHeight = scene.game.config.height

  const bg = scene.add.image(sceneWidth / 2, sceneHeight / 2, texture)
  scene.add.graphics().fillStyle(0x000, fade).fillRect(0, 0, sceneWidth, sceneHeight)

  return setBgCover(scene, bg)
}

export const createSceneTitle = (scene, text) => {
  return scene.add.text(scene.game.config.width / 2, 100, text, {
    fontFamily: "Arial",
    fontSize: "120px",
  }).setOrigin(.5, 0)
}
