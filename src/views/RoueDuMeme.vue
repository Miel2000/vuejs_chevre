<template>
  <div class="hello">
    <!-- ROUE DU MEME AU CLICK -->

    <div class="rdm-click">
      <img  ref="poring" class="poring" src="assets/rdm/img/poring.png" :randomHandler="alreadyStoredNumber" @click="getRandomMeme" />
    
    </div>

    <!-- ROUE DU MEME SELECT OPTION -->
    <!-- <div v-if="memes">
            <select v-model="randomMeme"  id="meme_select">
                <label for="meme_select"></label>
                <option  value="">Choisissez un meme</option>
                <option  v-for="meme in memes" :value="meme"  :key="meme.id" placeholder="yeet"></option>
            </select>
        </div> -->

    <br />
    <div v-if="randomMeme">
      <div class="image-container">
        <img :src="randomMeme.image" alt="" />
      </div>
      <div class="audio-container">
        <audio
          id="monAudio"
          :src="randomMeme.audio"
          volume="0.2"
          autoplay
          controls
        ></audio>
      </div>
    </div>
    <div v-else>
      <div class="random-container">
        <p>Randomization</p>
        <img :src="randomMeme.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite } from "gsap";

import { memes } from "@/rdmData.js";
export default {
  name: "RoueDuMeme",
  mounted: () => {
    console.log("rgergerg");
  },

  data() {
    return {
      memes: memes,
      actualNumber: 0,
      alreadyStoredNumber: [],
      monAudio: "",
    };
  },

  computed: {
    randomMeme: {
      get: function() {
        return this.getRandomMeme() || {};
      },
      set: function() {
        return {
          id: "100",
          image: "static/img/memes/relance.jpg",
          audio: "static/audio/memes/turrset.wav",
          isDejaPasse: false,
        };
      },
    },
  },

  methods: {
    getRandomMeme() {
      this.gsap = new TimelineLite();
      this.poring = document.getElementsByClassName("poring");
      console.log(this.$refs.poring);
      this.gsap.to(this.$refs.poring, {
        duration: 2.5,
        ease: "bounce.out",
        y: -500,
      });
      let randomNumber = Math.floor(Math.random() * memes.length);
      this.actualNumber = randomNumber;

      this.alreadyStoredNumber.push(randomNumber);
      return memes[randomNumber];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin: 0 auto;
  width: 200px;
}
</style>
