import { Scene } from 'phaser';

export default class PlayScene extends Scene {
    constructor () {
        super({ key: 'PlayScene' })
    }

    create () {
        this.add.image(400,300, 'sky');

        const chevre = this.physics.add.image(400,200, 'chevre');
        chevre.setCollideWorldBounds(true);
        chevre.body.onWorldBoundds = true;
        chevre.setBounce(1);
        chevre.setVelocity(200, 20);

        this.sound.add('bamboo')
        this.physics.world.on('worldbounds', () => {
             this.sound.play('bamboo', { volume: 0.75 })
        })


    }
}