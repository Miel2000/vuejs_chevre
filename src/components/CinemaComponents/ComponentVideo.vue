

<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>
<div>
  <div  >

    <video 
    
      :class=" { 
       
        video_box : 'video_box'
      
      }  "
      :src="'/assets/videos/' + computedVideo.self.url"
      controls 
      autoplay
      playsinline
      @timeupdate="onTimeUpdate"
     
    >
    </video>

  </div>
</div>
</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>
export default {

  data(){
    return {

      alreadySent: []
      
    }
  },
  

  computed: {

    computedCurrentTimeVideo(){
      return this.$store.getters.getCurrentTimeVideo;
    },

    computedVideo(){
      return this.$store.getters.getVideo;
    },

    computedChoices() {
      return this.$store.getters.getChoices;
    },

    computedStoryMap() {
      return this.$store.getters.getStoryMap;
    }
  },


  mounted() {
   
    this.alreadySent = [];
  },

  methods: {
    onTimeUpdate(event) {
      this.$store.commit('setCurrentTimeVideo', event.target.currentTime);
      // console.log(this.computedCurrentTimeVideo);
      // Si y'a des ctas
      // compare les timecodes des ctas

      // if (this.computedVideo.ctas) {
      //   this.videoInfos.ctas.forEach((ctaInfo) => {
      //     if (
      //       event.target.currentTime >= ctaInfo.to &&
      //       ctaInfo.id == "esquive_fleche" &&
      //       this.$store.state.piegeFleche == false
      //     ) {
      //       console.log(this.$store.state.piegeFleche, "piege fleche activé");
      //       const die = new Audio("./assets/mp3/hits/piege_fleche.mp3");
      //       this.$store.state.piegeFleche = false;
      //       this.$store.state.piegeChat = false;
      //       die.play();
      //       event.target.currentTime = 0;
      //     }
      //     if (
      //       event.target.currentTime >= ctaInfo.to &&
      //       ctaInfo.id == "esquive_chat" &&
      //       this.$store.state.piegeChat == false
      //     ) {
      //       console.log(this.$store.state.piegeFleche, "piege Chat activé");
      //       const die = new Audio("./assets/mp3/hits/piege_chat.mp3");
      //       die.play();
      //       this.$store.state.piegeFleche = false;
      //       this.$store.state.piegeChat = false;
      //       event.target.currentTime = 0;
      //     }

      //     if (this.alreadySent.indexOf(ctaInfo.id) === -1) {
      //       this.compareForCtas(event.target.currentTime, ctaInfo.at, ctaInfo);
      //     }
      //   });
      // }

      // compare les timecodes des timedActions
      if (this.computedVideo.timedChoices) {
        this.computedVideo.timedChoices.forEach((timedChoice) => {
          this.compareForTimedChoices(this.computedCurrentTimeVideo, timedChoice);
        });
      }

      if(this.computedVideo.timedAudios) {
        this.computedVideo.timedAudios.forEach((timedAudio) => {
          this.compareForAudios(this.computedCurrentTimeVideo, timedAudio)
        })
      }

      if(this.computedVideo.timedImposedRoots) {
        this.computedVideo.timedImposedRoots.forEach((timedImposedRoot) => {
            this.compareForImposedRoot(this.computedCurrentTimeVideo, timedImposedRoot)
        })
      }

    },
    
    compareForTimedChoices(actualVideoTimeCode ,oneTimedChoice) {

      if (oneTimedChoice) {
        
              if (
                  actualVideoTimeCode >=  oneTimedChoice.at && 
                  this.alreadySent.indexOf(oneTimedChoice.id) === -1 
               ) {


                 this.alreadySent.push(oneTimedChoice.id);

                 console.log(this.alreadySent);

                 this.$store.commit('addActualChoices', oneTimedChoice);

                //  console.log(' TIME CODE A DEPASSER && actualChoices ADD avec', oneTimedChoice.id)
            
              }
      }
    },
    
    compareForImposedRoot(actualVideoTimeCode, oneImposedRoot){
      if(oneImposedRoot.type) {
           if (
          actualVideoTimeCode >= oneImposedRoot.at &&
          this.alreadySent.indexOf(oneImposedRoot.id) === -1
          ) {
          // console.log("weh on emit l'audio");
            console.log('imposed route : ' ,this.computedStoryMap.videos[oneImposedRoot.route]) 
            // on impose le changement de la videoActuel
            this.$store.commit("setActualVideo", this.computedStoryMap.videos[oneImposedRoot.route]);
                // Selon la route, on affect le store
              if(oneImposedRoot.route == "shooting"){
                this.$store.commit('setActualEnemy', this.computedStoryMap.videos[oneImposedRoot.route].enemy );
                this.$store.commit('setActualBackground', this.computedStoryMap.videos[oneImposedRoot.route].backgrounds );
              }
          } 

      }
    },

    compareForAudios(actualVideoTimeCode, oneAudio){
      if(oneAudio.type) {
           if (
          actualVideoTimeCode >= oneAudio.at &&
          this.alreadySent.indexOf(oneAudio.id) === -1
          ) {
          // console.log("weh on emit l'audio");

          this.$store.commit("setActualAudio", oneAudio);
          } 

      }
    },

    compareForCtas(currentTimeVideo, timeCodeAt, cta) {
      // console.log("ALL ctaS AT -> TO  : ", cta);
      if (cta.type == "dodge") {
        if (currentTimeVideo >= timeCodeAt) {
          this.$emit("a-ctas-is-sent", cta);
          this.alreadySent.push(cta.id);

          console.log("emit des ctas", cta);
        }
      }
    },


  },
};
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">
.video_box {
  width: 700px;
}
.video-player {
  // de base, le player n'est pas interactif
  pointer-events: none;
  // border: solid 15px red;

  // transition: border 0.7s, width 0.7s;

  // &.cohabitationCta {
  //   width: 80%;
  //   margin-right: 50px;
  // }

  // &.isInteractive {
  //   pointer-events: initial;
  //   // border: solid 15px green;
  // }
}
</style>
