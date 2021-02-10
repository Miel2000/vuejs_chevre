import { Scene } from 'phaser'

import bamboo from '@/components/GameCenterComponents/assets/mp3/hit_bambo.mp3'
import chevre from '@/components/GameCenterComponents/assets/img/chevre-sprited.png'
import butterfly from '@/components/GameCenterComponents/assets/img/butterz.png'
import groundGrass from '@/components/GameCenterComponents/assets/img/ground-grass.png'
import sky from '@/components/GameCenterComponents/assets/img/sky.png'

import blunty from '@/components/GameCenterComponents/assets/img/way/blunty.png'
import doubt from '@/components/GameCenterComponents/assets/img/way/doubt.png'
import tete from '@/components/GameCenterComponents/assets/img/way/tete.png'
import crackhead from '@/components/GameCenterComponents/assets/img/way/crackhead.png'
import snes from '@/components/GameCenterComponents/assets/img/way/snes.png'
import uchiwa from '@/components/GameCenterComponents/assets/img/way/uchiwa.png'
import justice from '@/components/GameCenterComponents/assets/img/way/justice.png'
import jul from '@/components/GameCenterComponents/assets/img/way/jul_le_s.png'
import evangeliun from '@/components/GameCenterComponents/assets/img/way/evangeliun.png'
import chat from '@/components/GameCenterComponents/assets/img/way/chat.png'

import ramiel from '@/components/GameCenterComponents/assets/img/way/ramiel.mp4'




export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' });

  }

  preload () {
    // Way 
    this.load.image('blunty', blunty)
    this.load.image('tete', tete)
    this.load.image('doubt', doubt)
    this.load.image('crackhead', crackhead)
    this.load.image('snes', snes)
    this.load.image('uchiwa', uchiwa)
    this.load.image('justice', justice)
    this.load.image('jul', jul)
    this.load.image('evangeliun', evangeliun)
    this.load.image('chat', chat)




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