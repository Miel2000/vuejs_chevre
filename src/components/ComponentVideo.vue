

<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

<div>
  
	<video 
		class="video-player"
		:class="{ 
			cohabitationCta: this.$store.state.actualCallToActions.length !== 0,
			isInteractive: this.$store.state.playerIsInteractive
		}"
		:src="'/assets/videos/' + videoInfos.self.url"
		controls 
		autoplay
		playsinline
		@timeupdate="onTimeUpdate"

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
    return {};
  },

  mounted() {
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
            const die = new Audio("./assets/mp3/hits/flechedie.wav");
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
            const die = new Audio("./assets/mp3/hits/flechedie.wav");
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
          if (this.alreadySent.indexOf(actionInfos.id) === -1) {
            this.compareTimeCodes(
              event.target.currentTime,
              actionInfos.at,
              actionInfos
            );
          }
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

    compareTimeCodes(currentTimeVideo, timeCodeAt, action) {
      console.log("ALL ACTIONS  : ", action);

      if (action.type) {
        if (currentTimeVideo >= timeCodeAt) {
          console.log("weh on emit l'action");

          this.$emit("an-action-is-sent", action);

          this.alreadySent.push(action.id);
        }
      }
    },
  },
};
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">
.video-player {
  width: 100%;

  // de base, le player n'est pas interactif
  pointer-events: none;
  // border: solid 15px red;

  transition: border 0.7s, width 0.7s;

  &.cohabitationCta {
    width: 80%;
    margin-right: 50px;
  }

  &.isInteractive {
    pointer-events: initial;
    // border: solid 15px green;
  }
}
</style>
