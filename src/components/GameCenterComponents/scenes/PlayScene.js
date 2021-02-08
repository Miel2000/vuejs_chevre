import { Scene } from 'phaser';
import { Phaser } from 'phaser';


export default class PlayScene extends Scene {
  
    constructor () {

        
        super({ key: 'PlayScene' })
    }

    create () {

 
// __ Background
        this.add.image(400,300, 'sky');

// __ Butterflys
   

 this.butterfly = this.physics.add.group({
    key: 'butterfly',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
});

 this.butterfly.children.iterate(function (child) {

    child.setBounceY(0.45);

});
// __ Physics items

this.platforms = this.physics.add.staticGroup();
this.platforms.create(400, 568, 'ground').refreshBody();
this.platforms.create(400, 420, 'ground').setScale(0.5).refreshBody();


// __ Player
        this.player =  this.physics.add.sprite(400,200, 'chevre');
        this.player.setBounce(0.4);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
                key: "left",
                frames: this.anims.generateFrameNumbers("chevre", {
                    start: 0,
                    end: 1,
                }),
                frameRate: 10,
                repeat: -1,
            });
        this.anims.create({
                key: "turn",
                frames: this.anims.generateFrameNumbers("chevre", {
                    start: 2,
                    end: 4,
                }),
                frameRate: 20,
            });
        this.anims.create({
                key: "right",
                frames: this.anims.generateFrameNumbers("chevre", {
                    start: 5,
                    end: 6,
                }),
                frameRate: 10,
                repeat: -1,
            });
        // chevre.body.onWorldBoundds = true;
        // chevre.setVelocity(200, 20);

// __ Colliders
        this.physics.add.collider( this.player, this.platforms);


// __ Sound when physics
        this.sound.add('bamboo')
        this.physics.world.on('worldbounds', () => {
             this.sound.play('bamboo', { volume: 0.75 })
        })

// Butterflys collect
        this.physics.add.collider(this.butterfly, this.platforms);
        this.physics.add.overlap(this.player, this.butterfly, collectButterfly, null, this);
        function collectButterfly (player, star)
        {
            star.disableBody(true, true);
        }

    }


    update() {
        // const self = this;
        const cursors = this.input.keyboard.createCursorKeys();


        if (cursors.left.isDown)
        {
            console.log('left');
            this.player.setVelocityX(-160);

           this.player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            console.log('right');
            
            this.player.setVelocityX(160);
            
            this.player.anims.play('right', true);
        }
        else
        {
            console.log('turn');
            this.player.setVelocityX(0);
            
            this.player.anims.play('turn');
        }

        if (cursors.up.isDown && this.player.body.touching.down)
        {

          
            this.player.setVelocityY(-330);
        }
    }
}