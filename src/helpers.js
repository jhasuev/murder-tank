export const setBgCover = (scene, image) => {
  let scaleX = scene.game.config.width / image.width
  let scaleY = scene.game.config.height / image.height

  return image.setScale(Math.max(scaleX, scaleY))
}