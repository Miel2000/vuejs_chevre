<template>
    <div>
        <h1>LE JEU DU PAPYON</h1>
        <div class='hello'>
        <div  @click="initializeGame"  class="flex" >
            <a  href="#1"  class="btn">Initialize</a>
        </div>
        <ion-phaser
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
      game: {
        width: "100%",
        height: "100%",
        type: Phaser.AUTO,
        scene: {
          init() {
            this.cameras.main.setBackgroundColor("#24252A");
          },
          create() {
            this.helloWorld = this.add.text(
              this.cameras.main.centerX,
              this.cameras.main.centerY,
              "Hello World",
              { font: "40px Arial", fill: "#ffffff" }
            );
            this.helloWorld.setOrigin(0.5);
          },
          update() {
            this.helloWorld.angle += 1;
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
