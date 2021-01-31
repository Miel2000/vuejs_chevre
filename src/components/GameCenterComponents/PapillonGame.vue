<template>
    <div class='papillon-game'>
        <h1>LE JEU DU PAPYON</h1>
        <div class='game'>
        <div  @click="initializeGame"  class="flex" >
            <a  href="#1"  class="btn">Initialize</a>
        </div>
        <ion-phaser
            class="ion-phaser"
            v-bind:game.prop='game'
            v-bind:initialize.prop='initialize'
        />
        </div>
    </div>
</template>

<script>
import Phaser from "phaser";

export default {
  methods: {
    initializeGame() {
      this.initialize = true;
    },
  },
  data() {
    return {
      initialize: false,
      platform: "",
      game: {
        width: 800,
        height: 600,
        physics: {
          default: "arcade",
          arcarde: {
            gravity: { y: 300 },
            debug: false,
          },
        },
        type: Phaser.AUTO,
        scene: {
          preload() {
            this.cameras.main.setBackgroundColor("#24252A");
            this.load.image("chevre", "assets/gamecenter/img/chevre.png");
            this.load.image("ground", "assets/gamecenter/img/ground-grass.png");
            this.load.image("tree", "assets/gamecenter/img/tree.png");
            this.load.image("sky", "assets/gamecenter/img/sky.png");
            this.load.image("poring", "assets/gamecenter/img/poring.png");
          },
          create() {
            // ce qui utilisera la physique
            this.platforms = this.physics.add.staticGroup();

            this.add.image(400, 300, "sky");
            this.platforms
              .create(400, 568, "ground")
              .setScale(1)
              .refreshBody();

            this.platforms.create(10, 250, "ground").setScale(0.3);
            this.add.image(400, 300, "chevre");
          },
          update() {},
        },
      },
    };
  },
};
</script>

<style scoped>
</style>
