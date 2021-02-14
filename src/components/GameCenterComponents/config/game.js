import Phaser from 'phaser'
import BootScene from '@/components/GameCenterComponents/scenes/BootScene'
import PlayScene from '@/components/GameCenterComponents/scenes/PlayScene'
import Level2 from '@/components/GameCenterComponents/scenes/Level2'


function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 2500,
    height: 1000,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 400 },
        debug: false
      }
    },
    scene: [BootScene, PlayScene, Level2]
  })
}

export default launch
export { launch }
