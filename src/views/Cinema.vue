<template>
    <div class="container">

        <div class="video_and_cta scene-container">
          <div v-if=" Object.keys(videoInfos.self).length !== 0 "  class="video-container">

            <ComponentVideo 
                :video-infos="videoInfos" 
                @an-action-is-sent="actionHandler"
            />
          </div>
     <div v-for="enemy in videoInfos.enemy" :key="enemy.id" class="enemy-container ">

          <ComponentEnemy
            @an-enemy-is-sent="enemyHandler"
            @hitEnemy="hitEnemy($event)" 
            :enemy="enemy" />
    </div> 
          

        </div>


        <div v-if="computedChoices.length > 0" >
            <div
                v-for="choice in computedChoices" 
                :key="choice.id">

                <ComponentOneChoice 
                    :choice-infos="choice"
                    @a-choice-have-been-acted="choiceActedHandler"
                />

            </div>
        </div>

        <div v-if="computedAudios.length > 0" >
            <div v-for="audio in computedAudios"
                :key="audio.id">

                <ComponentAudio @an-action-is-sent="computedAudios"  :audio-infos="audio" /> 
            </div>
        </div>

    </div>
</template>


<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<script>
import ComponentVideo from "@/components/ComponentVideo";
import ComponentAudio from "@/components/ComponentAudio";
import ComponentCallToAction from "@/components/ComponentCallToAction";
import ComponentEnemy from "@/components/ComponentEnemy";
import ComponentOneChoice from "@/components/ComponentOneChoice";

import storyMap from "@/storyMap.js";

export default {
  components: {
    ComponentVideo,
    ComponentCallToAction,
    ComponentOneChoice,
    ComponentAudio,
    ComponentEnemy,
  },

  props: {
    videoId: {
      type: String,
      default: "fusil",
    },
  },

  data() {
    return {
      videoInfos: storyMap.videos[this.videoId],
      choices: [],
      audios: [],
      enemy: [],
    };
  },

  computed: {
    computedChoices() {
      return this.choices;
    },
    computedAudios() {
      return this.audios;
    },

    computedEnemy() {
      return this.enemy;
    },
    // computedRoutes() {
    //   console.log(this.routes, "this route yo");
    //   this.videoInfos.route = this.routes.route;
    //   return this.routes;
    // },
  },

  mounted() {
    // if (storyMap.videos[this.videoId].timedActions.route === "banane") {
    //   console.log("banane");
    // }
  },

  methods: {
    actionHandler(actionInfos) {
      // console.log("hey, je suis le parent, et jai recu un event choice avec : ", actionInfos);

      switch (actionInfos.type) {
        case "choice":
          if (actionInfos.route == "shooting") {
            this.videoInfos = storyMap.videos["shooting"];
            this.choices = [];
          }
          console.log("dans le switch CHOICE : ", actionInfos);
          this.choices.push(actionInfos);
          break;

        case "sound":
          console.log("dans le switch SOUND : ", actionInfos);
          this.audios.push(actionInfos);
          break;

        default:
          break;
      }
    },

    enemyHandler(enemyInfo) {
      switch (enemyInfo.type) {
        case "enemy":
          this.enemy.push(enemyInfo);
          break;

        default:
          break;
      }
    },

    choiceActedHandler(choice) {
      this.choices = [];
      this.audios = [];
      this.videoInfos = storyMap.videos[choice];
    },

    audioActedHandlerOnElement(audio) {
      this.audios = storyMap.videos[audio];
    },

    routeActionHandler(route) {
      console.log(route);
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 500px;
  margin: 0 auto;
}
.scene-container {
  width: 70%;

  display: block;
}

.video_and_cta {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
