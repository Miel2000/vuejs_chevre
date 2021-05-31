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


    <div class="enemy-container" v-if='computedVideoInfos.enemy'>
          <div v-if="computedVideoInfos.enemy.length > 0">
              <div v-for="e in computedVideoInfos.enemy" :key="e.id" class="enemy " >
                  <ComponentEnemy
                      @minus-life="MinusEnemyLife"
                      :enemy="e" 
                    
                    />
              </div> 
          </div>
    </div>
       
  

  <div v-if="computedCtas.length > 0" >
   <div v-for="cta in computedCtas" :key="cta.id">

      <ComponentCallToAction :ctas-infos="cta"  @a-cta-is-sent="ctasHandler"  />
   </div>
  </div>
  
 <div class="background-scene">
    <div v-if="computedBackgroundAudios" >
        <div v-if="computedBackgroundAudios.length > 0" >
            <div v-for="backgroundAudio in computedBackgroundAudios" :key="backgroundAudio.id">

                <ComponentBackground :actual-background-infos="backgroundAudio" />
            </div>
      </div>
  </div>
    
  </div>

      <!-- <ComponentBackground :actual-background-infos="videoInfos"  /> -->

  <div class="audio-container">
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

  // props: {
  //   videoId: {
  //     type: String,
  //     default: "intro2",
  //   },
  // },

  data() {
    return {
      videoInfos:        this.$store.state.actualVideo,
      choices:           this.$store.state.actualChoices,
      audios:            this.$store.state.actualAudio,
      ctas:              this.$store.state.actualCallToActions,
      audiosBackgrounds: this.$store.state.actualBackgroundAudio,
      enemys:            this.$store.state.actualEnemy,
    };
  },

  computed: {
    computedChoices() {
      return this.choices;
    },

    computedAudios() {
      return this.audios;
    },

    computedEnemys() {
      return this.enemys;
    },

    computedCtas() {
      return this.ctas;
    },
    computedBackgroundAudios() {
      return this.audiosBackgrounds;
    },

    computedVideoInfos() {
      return this.videoInfos;
    }
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
          this.audios = [];
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
          this.audios =[];
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
