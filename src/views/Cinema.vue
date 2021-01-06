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
            @minus-life="MinusEnemyLife"
            @an-enemy-is-sent="enemyHandler"
            @hitEnemy="hitEnemy(enemy)" 
            :enemy="enemy" 
            
            />
    </div> 
  </div>

  <div class="choice-container" v-if="computedChoices.length > 0" >
      <div
          v-for="choice in computedChoices" 
          :key="choice.id">

          <ComponentOneChoice 
              :choice-infos="choice"
              @a-choice-have-been-acted="choiceActedHandler"
          />

      </div>
  </div>
  <!-- <ComponentCallToAction /> -->
     

  <div v-if="computedAudios.length > 0" >
      <div v-for="audio in computedAudios"
          :key="audio.id">

          <ComponentAudio @an-action-is-sent="computedAudios"  :audio-infos="audio" /> 
      </div>
  </div>

  <div class="background-scene">

      <ComponentBackground :actual-background-infos="videoInfos"  />
    
  </div>

    </div>
</template>


<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<script>
import ComponentVideo from "@/components/ComponentVideo";
import ComponentAudio from "@/components/ComponentAudio";
import ComponentBackground from "@/components/ComponentBackground";
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
    ComponentBackground,
  },

  props: {
    videoId: {
      type: String,
      default: "scribe_1",
    },
  },

  data() {
    return {
      videoInfos: storyMap.videos[this.videoId],
      choices: [],
      audios: [],
      audiosBackground: [],
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
  },

  mounted() {},

  methods: {
    actionHandler(actionInfos) {
      switch (actionInfos.type) {
        case "choice":
          // condition route['shooting'], permet d'envoyer le choix de la route timé si la route est bien sur shooting (donc ça refresh la route grace au infos du storyMap et ça remet les choix vides)
          if (actionInfos.route == "shooting") {
            this.videoInfos = storyMap.videos["shooting"];
            this.choices = [];
          }
          // quand il propose les routes des armes, la musique s'arrete car on refresh le tableau audios.
          if (
            actionInfos.route == "banane" ||
            actionInfos.route == "couteau" ||
            actionInfos.route == "fusil"
          ) {
            this.audios = [];
          }
          if (
            actionInfos.route == "shooting_remake" ||
            actionInfos.route == "shooting"
          ) {
            this.enemy = [];
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
    choiceActedHandler(choice) {
      this.choices = [];

      this.videoInfos = storyMap.videos[choice];
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

    MinusEnemyLife() {
      if (this.$store.state.ninjasLife <= 0) {
        switch (this.$store.state.weapon) {
          case "banane":
            this.rootEnd(storyMap.videos["valorant_banane"]);

            break;
          case "couteau":
            this.rootEnd(storyMap.videos["valorant_couteau"]);

            break;
          case "fusil":
            this.rootEnd(storyMap.videos["valorant_fusil"]);

            break;

          default:
            break;
        }
      }
    },
    rootEnd(endpoint) {
      console.log("route end");
      this.audios = [];
      this.videoInfos = endpoint;
    },

    audioActedHandlerOnElement(audio) {
      this.audios = storyMap.videos[audio];
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

.choice-container {
  display: flex;
  justify-content: space-evenly;
}

.video_and_cta {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
