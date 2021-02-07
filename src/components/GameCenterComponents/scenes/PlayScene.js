import { Scene } from 'phaser';


export default class PlayScene extends Scene {
    constructor () {
 

        super({ key: 'PlayScene' })
    }

    create () {
        
// __Sky
        this.add.image(400,300, 'sky');

// __Physics items

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').refreshBody();
        this.platforms.create(400, 420, 'ground').setScale(0.5).refreshBody();
    
// __Player
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