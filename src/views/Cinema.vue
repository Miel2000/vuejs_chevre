<template>
    <div class="container">
      <p>{{ videoInfos  }}</p>

    <div class="video_and_cta scene-container">
        <div  v-if=" Object.keys(videoInfos.self).length !== 0 " class="video_container">

          
            <ComponentVideo 
                :video-infos="videoInfos" 
                @an-action-is-sent="actionHandler"
                @a-ctas-is-sent="ctasHandler"
                
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
          <div v-for="boss in videoInfos.boss" :key="boss.id" class="boss-container">

                <ComponentBoss
                  @minus-boss-life="MinusBossLife"
                  @hitBoss="hitBoss(boss)" 
                  :boss="boss" 
                  
                  />
          </div> 
            <div v-for="enemy in videoInfos.enemy" :key="enemy.id" class="enemy-container">

                <ComponentEnemy
                  @minus-life="MinusEnemyLife"
                  :enemy="enemy" 
                  
                  />
          </div> 
  

  <div v-if="computedCtas.length > 0" >
   <div v-for="cta in computedCtas" :key="cta.id">

      <ComponentCallToAction :ctas-infos="cta"  @a-cta-is-sent="ctasHandler"  />
   </div>
  </div>
  
  <div class="background-scene">

      <ComponentBackground :actual-background-infos="videoInfos"  />
    
  </div>

  <div class="cta-container">
    <div v-if="computedAudios.length > 0" >
        <div v-for="audio in computedAudios"
            :key="audio.id">

            <ComponentAudio :audio-infos="audio" /> 

        </div>
    </div>

  </div>


</div>
</template>


<script>
import ComponentVideo from "@/components/CinemaComponents/ComponentVideo";
import ComponentAudio from "@/components/CinemaComponents/ComponentAudio";
import ComponentBackground from "@/components/CinemaComponents/ComponentBackground";
import ComponentCallToAction from "@/components/CinemaComponents/ComponentCallToAction";
import ComponentEnemy from "@/components/CinemaComponents/ComponentEnemy";
import ComponentOneChoice from "@/components/CinemaComponents/ComponentOneChoice";
import ComponentBoss from "@/components/CinemaComponents/ComponentBoss";

import storyMap from "@/storyMap.js";

export default {
  components: {
    ComponentVideo,
    ComponentCallToAction,
    ComponentOneChoice,
    ComponentAudio,
    ComponentEnemy,
    ComponentBackground,
    ComponentBoss,
  },

  props: {
    videoId: {
      type: String,
      default: "fantome_noyade",
    },
  },

  data() {
    return {
      videoInfos: storyMap.videos[this.videoId],
      choices: [],
      audios: [],
      ctas: [],
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

    computedCtas() {
      return this.ctas;
    },
  },

  mounted() {},
  destroyed() {
    // Récupéré la route au moment du die
    this.$store.state.routeHandler = this.videoInfos;
    console.log("cinema vien de die", this.videoInfos);
    console.log("LE HANDLER", this.$store.state.routeHandler);
  },

  methods: {
    ctasHandler(cta) {
      console.log(cta);
      switch (cta.type) {
        case "dodge":
          {
            console.log("ON EST DANS LE REDIRECT HANDLER", cta);
            this.ctas.push(cta);
            // this.videoInfos = storyMap.videos["intro1"];
          }
          break;

        default:
          break;
      }
    },

    actionHandler(actionInfos) {
      // this.$store.commit("setActualChoices", actionInfos);

      switch (actionInfos.type) {
        case "choice":
          // condition route['shooting'], permet d'envoyer le choix de la route timé si la route est bien sur shooting (donc ça refresh la route grace au infos du storyMap et ça remet les choix vides)
          this.exceptionChoiceManager(actionInfos);

          console.log("dans le switch CHOICE : ", actionInfos);
          //  this.choices.push(actionInfos);
          break;

        case "remove-choice":
          this.choices = [];
          break;

        case "sound":
          console.log("dans le switch SOUND : ", actionInfos);
          this.audios.push(actionInfos);
          break;

        default:
          break;
      }
    },

    exceptionChoiceManager(actionInfos) {
      
      if (actionInfos.route == "shooting") {
        this.videoInfos = storyMap.videos["shooting"];
        this.choices = [];
      }

      // quand il propose les routes des armes, la musique s'arrete.
      if ( actionInfos.route == "banane" || actionInfos.route == "couteau" || actionInfos.route == "fusil" ) {
        this.audios = [];
      }

      if ( actionInfos.route == "shooting_remake" || actionInfos.route == "shooting" ) {
        this.enemy = [];
      }

      // Quand la  valeur de doThis est remove-choice, on supprime le choix.
      if ( actionInfos.doThis && actionInfos.doThis === "remove-choice" ) {
        this.choices = [];
      } else {
        this.choices.push(actionInfos);
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
    MinusBossLife() {
      if (this.$store.state.bossLife <= 0) {
        console.log("redirect dajns condition");
        this.rootEnd(storyMap.videos["generique"]);
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
.choice-container {
  display: flex;
  justify-content: space-evenly;
  bottom: 20px;
}

.video_and_cta {
  margin: 0 auto;
}

.video_container {
  z-index: -1;
}

.enemy-container {
  width: 200px;
  margin: 0 auto;
}

.background-scene {
  z-index: -1;
  position: absolute;

  bottom: 0%;
  left: 0;
}
</style>
