import { Scene } from 'phaser';


export default class PlayScene extends Scene {
    
    constructor () {
        
        
        super({ key: 'PlayScene' })
    }

    create () {
        
        this.platforms = this.physics.add.staticGroup();
    //__ init

    
    // __ Background
        this.add.image(400,300, 'sky');
        this.cameras.main.setBackgroundColor("#FFFFFF");
        this.add.image(1980, 420, "evangeliun");
        
    // __ Chemin d'images physique 

    this.platforms.create(650, 10, "blunty").refreshBody();
    this.platforms.create(650, 600, "tete").refreshBody();
    this.platforms.create(1020, 600, "crackhead").refreshBody();
    this.platforms.create(780, 600, "doubt").refreshBody();
    this.platforms.create(1480, 600, "uchiwa").refreshBody();
    this.platforms.create(1250, 600, "snes").refreshBody();
    this.platforms.create(1200, 200, "justice").refreshBody();
    this.platforms.create(1690, 620, "jul").refreshBody();
    this.platforms.create(1690, 900, "chat").refreshBody();


    // this.scene.add.video(1020,400, 'ramiel')

    // __ Score 
        this.score = 0;
  
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

    // __ Colliders
        this.physics.add.collider( this.player, this.platforms);
        this.physics.add.collider(this.butterfly, this.platforms);

    // __ Sound when physics
        this.sound.add('bamboo');
        // this.physics.world.on('worldbounds', () => {
        // })

    // Butterflys collect
        this.physics.add.overlap(this.player, this.butterfly, collectButterfly, null, this);
        function collectButterfly (player, butterfly)
        {
            this.sound.play('bamboo', { volume: 0.75 })
            butterfly.disableBody(true, true);
            this.score += 10;
            this.scoreText.setText('Score: ' + this.score);
        }

    // __ Camera 
    // console.log(this.player.position.x );

        this.scoreText = this.add.text(  this.player.body.position.x + 50,this.player.body.position.y + 10, 'score: 0', {fontSize: '32px', fill:'#000'});

        this.camera = this.cameras.main;
        this.camera.startFollow(this.player);
        this.camera.setFollowOffset(20, 0);
        // this.camera.setLerp(0,0);
    
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