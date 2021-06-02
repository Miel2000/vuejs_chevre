

<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>
<div>
  <div  >

    <video 
    
      :class=" { 
       
        video_box : 'video_box'
      
      }  "
      :src="'/assets/videos/' + videoInfos.self.url"
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
  props: {
    videoInfos: {
      type: Object,
      required: true,
    },
  },


  mounted() {
    console.log('c la video : ' , this.videoInfos)

    
    this.alreadySent = [];
  },

  methods: {
    onTimeUpdate(event) {
      // Si y'a des ctas
      // compare les timecodes des ctas

      if (this.videoInfos.ctas) {
        this.videoInfos.ctas.forEach((ctaInfo) => {
          if (
            event.target.currentTime >= ctaInfo.to &&
            ctaInfo.id == "esquive_fleche" &&
            this.$store.state.piegeFleche == false
          ) {
            console.log(this.$store.state.piegeFleche, "piege fleche activé");
            const die = new Audio("./assets/mp3/hits/piege_fleche.mp3");
            this.$store.state.piegeFleche = false;
            this.$store.state.piegeChat = false;
            die.play();
            event.target.currentTime = 0;
          }
          if (
            event.target.currentTime >= ctaInfo.to &&
            ctaInfo.id == "esquive_chat" &&
            this.$store.state.piegeChat == false
          ) {
            console.log(this.$store.state.piegeFleche, "piege Chat activé");
            const die = new Audio("./assets/mp3/hits/piege_chat.mp3");
            die.play();
            this.$store.state.piegeFleche = false;
            this.$store.state.piegeChat = false;
            event.target.currentTime = 0;
          }

          if (this.alreadySent.indexOf(ctaInfo.id) === -1) {
            this.compareForCtas(event.target.currentTime, ctaInfo.at, ctaInfo);
          }
        });
      }

      // compare les timecodes des timedActions
      if (this.videoInfos.timedActions) {
        this.videoInfos.timedActions.forEach((actionInfos) => {
          this.compareForTimedActions(event.target.currentTime, actionInfos);
        });
      }

      // 
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


    compareForTimedActions(currentTimeVideo, oneTimedAction) {
      // console.log("ALL ACTIONS  : ", oneTimedAction);

      if (oneTimedAction.type) {
        if (
          currentTimeVideo >= oneTimedAction.at &&
          this.alreadySent.indexOf(oneTimedAction.id) === -1
        ) {
          console.log("weh on emit l'oneTimedAction");

          this.$emit("an-action-is-sent", oneTimedAction);

          this.alreadySent.push(oneTimedAction.id);
        }

        if (
          this.alreadySent.indexOf(oneTimedAction.id) !== -1 &&
          currentTimeVideo >= oneTimedAction.to
        ) {
          console.log("le deuxieme if est trigger ", oneTimedAction);

          // const actionUpdated = oneTimedAction;
          
          // actionUpdated.doThis = "remove-choice";

          // this.$emit("an-action-is-sent", actionUpdated);
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
