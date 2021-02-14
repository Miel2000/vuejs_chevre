import { Scene } from 'phaser';
import  Phaser from 'phaser';

import door from '@/components/GameCenterComponents/assets/img/level1/door.png'

function checkOverlap(spriteA, spriteB) {
    // console.log("sprite A : " + spriteA.getBounds(), "sprite B :" + spriteB.getBounds())
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    var result = Phaser.Geom.Rectangle.Intersection( boundsA , boundsB);
    return (result.width !=0 || result.height!=0 )
}


export default class PlayScene extends Scene {
    
    constructor () {
        super({ key: 'PlayScene' })
    }

    preload(){
      this.doorLvl2 =  this.load.image('door', door)
    }
    
    
    
    create () {
 
  
    this.platforms = this.physics.add.staticGroup();
    //__ init

 
    
    // __ Background
    this.add.image(400,600, 'sky');
    this.cameras.main.setBackgroundColor("#FFFFFF");
    this.add.image(1980, 420, "evangeliun");
    this.doorLvl2 = this.add.sprite(500, 925, "door").setScale(0.4);
    console.log(this.doorLvl2);

    
    // __ Chemin d'images physique 

    this.platforms.create(650, 300, "blunty").refreshBody();
    this.platforms.create(500, 800, "tete").refreshBody();
    this.platforms.create(1020, 950, "crackhead").refreshBody();
    this.platforms.create(1480, 950, "uchiwa").refreshBody();
    this.platforms.create(1250, 950, "snes").refreshBody();
    this.platforms.create(1150, 660, "justice").refreshBody();
    // this.platforms.create(1720, 900, "jul").refreshBody();
    this.platforms.create(1710, 950, "chat").refreshBody();
    this.platforms.create(2100, 1050, "soulmates").refreshBody();

    //__ Shotgun
    
    this.shotgun = this.physics.add.group({
        key: 'shotgun',
        repeat: 1,
        scale:0.2,
        setXY: { x: 1150, y: 0}
    })
    
    // this.shotgun.setDataEnabled();


    this.shotgun.children.iterate(function (child) {
        child.setScale(0.3);
        child.setDataEnabled();
        child.setBounceY(0.2);
        child.data.set('name', 'FUZIL 9MM');
        child.data.set('degats', 100);     
    });
    // __ Score 
    this.score = 0;
    this.degats = 0;
  
    // __ Butterflys


    this.butterfly = this.physics.add.group({
        key: 'butterfly',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });
    
    this.butterfly.children.iterate(function (child) {
        child.setDataEnabled();
        child.setBounceY(0.45);
        child.data.set('name', 'Papillon de lumiere');
        child.data.set('points', 15);     
    });

 // display info of one butterfly
    // this.butterText = this.add.text(350,250, '', {font : '16px Courier', fill: '#00ff00'});
    // this.butterText.setText([
    //     'Name : ' + this.butter.data.get('name'),
    //     'Points : ' + this.butter.data.get('points'),
    // ])



    // __ Physics items

    this.platforms.create(100, 935, 'ground').setScale(0.6).refreshBody();
    this.platforms.create(75, 830, 'ground').setScale(0.5).refreshBody();
    this.platforms.create(400, 990, 'ground').setScale(0.2).refreshBody();
    this.platforms.create(300, 990, 'ground').setScale(0.2).refreshBody();
    this.platforms.create(500, 990, 'ground').setScale(0.2).refreshBody();
    this.platforms.create(600, 990, 'ground').setScale(0.2).refreshBody();
    this.platforms.create(780, 950, "doubt").refreshBody();

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
    this.physics.add.collider( this.shotgun, this.platforms);
    this.physics.add.collider(this.butterfly, this.platforms);

    // __ OverLap
    this.physics.add.overlap(this.player, this.shotgun, collectWeapon, null, this);

    function collectWeapon(player, shotgun){
        shotgun.disableBody(true, true);
        this.degats += shotgun.data.get('degats');
        this.weaponText.setText('Arme: ' + shotgun.data.get('name'));
        this.sound.play('reload_shotgun', { volume: 0.5 })

    }

    this.weaponText = this.add.text(  220, 360, 'Arme: -', {fontSize: '32px', fill:'#000'});
   
 
    this.physics.add.overlap(this.player, this.butterfly, collectButterfly, null, this);

    function collectButterfly (player, butterfly)
    {
        this.sound.play('bamboo', { volume: 0.4})
        butterfly.disableBody(true, true);
        this.score += butterfly.data.get('points');
        this.data.set('pp', this.score );

        
        if(this.score >= 180) {
            this.sound.play('fire_sound', { volume: 0.4})
            
        }
    
        this.scoreText.setText('Score: ' + this.score + ' pp') ;
    }


    // __ Camera 
    // console.log(this.player.position.x );

    this.scoreText = this.add.text( 220, 330, 'Score: 0 pp', {fontSize: '32px', fill:'#000'});
 

    this.camera = this.cameras.main;
    this.camera.startFollow(this.player);
    this.camera.setFollowOffset(20, 0);
    // this.camera.setLerp(0,0);
    
    this.playerData =  this.add.text(200,300, { font: '64px Courier', fill: '#00ff00' });
    // this.data.set('weapon', this.weapon );


    this.playerData.setText([
    'pp: ' + this.data.get('pp'),
    'weapon: ' + this.data.get('weapon')

]);
    
    }


update() {
        // const self = this;
    const cursors = this.input.keyboard.createCursorKeys();

// Mouvements
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
        if(this.score >= 100){
            
            this.player.setVelocityY(-500);
        }else {

            this.player.setVelocityY(-330); // 330
        }
    }

    // Sprite superposition
        if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
            if (checkOverlap(this.player, this.doorLvl2 )) {
            // console.log(this.player, this.door, 'okok')
              this.scene.start("Level2");
            } 
  
        }
}}