import { Scene } from 'phaser'

import bamboo from '@/components/GameCenterComponents/assets/mp3/hit_bambo.mp3'
import chevre from '@/components/GameCenterComponents/assets/img/chevre-sprited.png'
import butterfly from '@/components/GameCenterComponents/assets/img/butterz.png'
import groundGrass from '@/components/GameCenterComponents/assets/img/ground-grass.png'
import sky from '@/components/GameCenterComponents/assets/img/sky.png'




export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' });

  }

  preload () {
    this.load.image('sky', sky)
    this.load.spritesheet(
               "chevre",
                chevre,
                { frameWidth: 100, frameHeight: 87 }
              );
    // this.load.image('tree', tree)
    this.load.image('ground', groundGrass)
    this.load.image('butterfly', butterfly)
    this.load.audio('bamboo', bamboo)
  }

  create () {
  
    this.scene.start('PlayScene')
  }
  update(){

  }
}