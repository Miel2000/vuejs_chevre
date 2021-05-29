

<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

<div>
  
	<video 
	
		:class=" { 
			cohabitationCta: this.$store.state.actualCallToActions.length !== 0,
			isInteractive: this.$store.state.playerIsInteractive,
      video_box : 'video_box'
     
		}  "
		:src="'/assets/videos/' + videoInfos.self.url"
		controls 
		autoplay
		playsinline
		@timeupdate="onTimeUpdate"
    :style="{
      width:  this.largeur ? this.largeur : '',
      
      }"
	>
	</video>

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

  data() {
    return {
      largeur: "",
    };
  },

  mounted() {
    this.largeur = this.videoInfos.self.css
      ? this.videoInfos.self.css.width
      : "";

    console.log("width : ", this.largeur);
    this.isPaused = false;
    this.$store.commit("setActualVideo", this.videoInfos);
    this.alreadySent = [];
  },

  methods: {
    onTimeUpdate(event) {
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
          this.compareTimeCodes(event.target.currentTime, actionInfos);
        });
      }
    },
    // faire une methode qui compareTimeCodeAndRedirect

    compareForCtas(currentTimeVideo, timeCodeAt, action) {
      // console.log("ALL ACTIONS AT -> TO  : ", action);
      if (action.type == "dodge") {
        if (currentTimeVideo >= timeCodeAt) {
          this.$emit("a-ctas-is-sent", action);
          this.alreadySent.push(action.id);

          console.log("weh on emit l'action at", action);
        }
      }
    },

    compareTimeCodes(currentTimeVideo, action) {
      console.log("ALL ACTIONS  : ", action);

      if (action.type) {
        if (
          currentTimeVideo >= action.at &&
          this.alreadySent.indexOf(action.id) === -1
        ) {
          console.log("weh on emit l'action");

          this.$emit("an-action-is-sent", action);

          this.alreadySent.push(action.id);
        }

        if (
          this.alreadySent.indexOf(action.id) !== -1 &&
          currentTimeVideo >= action.to
        ) {
          console.log("le deuxieme if est trigger ", action);
          // on envoi le remove
          // check si le .to est dépassé par le currentTimeVideo && qu'il est dans le tableau
          // si c'est le cas, alors, il faut $emit un an-action-is-sent avec comme "action" une string qui dit "remove choice"

          const actionUpdated = action;
          action.doThis = "remove-choice";

          this.$emit("an-action-is-sent", action);
        }
      }
    },

    compareTimeCodesToDeleteChoice(currentTimeVideo, timeCodeTo, action) {
      console.log("ALL ACTIONS  : ", action);
      // const result = action.filter((a) => a.id ==     );

      if (action.type) {
        if (currentTimeVideo <= timeCodeTo) {
          console.log("SHOULD DELETE MOFOS");

          this.alreadySent.pop(action.id);
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
