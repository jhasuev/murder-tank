export const setBgCover = (scene, image) => {
  let scaleX = scene.game.config.width / image.width
  let scaleY = scene.game.config.height / image.height

  return image.setScale(Math.max(scaleX, scaleY))
}

export const createBackground = (scene, texture, frame) => {
  const sceneWidth = scene.game.config.width
  const sceneHeight = scene.game.config.height

  const bg = scene.add.image(sceneWidth / 2, sceneHeight / 2, texture, frame)

  return setBgCover(scene, bg)
}
