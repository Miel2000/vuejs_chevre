<template>
  <div class="hello">
    <!-- ROUE DU MEME AU CLICK -->

    <div class="rdm-click">
      <img  ref="poring" class="poring" src="assets/rdm/img/poring.png" :randomHandler="alreadyStoredNumber" @click="getRandomMeme"/>
    </div>

    <!-- ROUE DU MEME SELECT OPTION -->
    <!-- <div v-if="memes">
            <select v-model="randomMeme"  id="meme_select">
                <label for="meme_select"></label>
                <option  value="">Choisissez un meme</option>
                <option  v-for="meme in memes" :value="meme"  :key="meme.id" placeholder="yeet"></option>
            </select>
        </div> -->

    <br>
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

    data() {
      return {
        memes: memes,
        actualNumber: 0,
        alreadyStoredNumber: [],
        monAudio: ""
      };
    },

    computed: {
      
      randomMeme(){
        return this.getRandomMeme;
      }

    },

    mounted(){
      console.log("bien mounted");

      this.timeline = new TimelineLite();

      console.log("ma tl : ", this.timeline);
    },

    methods: {

      getRandomMeme(){

        // console.log(this.$refs.poring);

        let randomNumber = Math.floor(Math.random() * memes.length);

        this.actualNumber = randomNumber;

        this.alreadyStoredNumber.push(randomNumber);

        this.animateAsset();

        return memes[randomNumber];

      },

      animateAsset(){

        console.log("anim triggered");

        this.timeline.to(this.$refs.poring, 2.5, 
          {
            ease: "bounce.out",
            y: -50,
          }
        );

      }

    }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  img {
    margin: 0 auto;
    width: 200px;
  }
</style>
