<template>
    <div class="container">
      <p> Computed Videos Infos : {{ computedVideoInfos  }}</p>
      <p> Computed Weapon :{{ computedWeapon  }}</p>
      <p> Computed Enemys :{{ computedEnemys  }}</p>
      <p> Computed Audios :{{ computedAudios  }}</p>
      <p> Computed Choices :{{ computedChoices  }}</p>
      <p> Computed Ctas :{{ computedCtas  }}</p>
      


                                <!-- VIDEO
                                    Component switch  -->
    <div class="video-container">
      
        <div  v-if="computedVideoInfos" class="video_container">
          <p>coucou</p>
            <div>

            <ComponentVideo 
                :video-infos="computedVideoInfos" 
                @an-action-is-sent="actionHandler"
                @a-ctas-is-sent="ctasHandler"
              
                
            />
            </div>
      </div>
  </div>

                            <!-- CHOICE
                                Component switch types : 
                                {'choice','remove-choice', 'sound'<-??? à check
                                                                          ...   -->
  <div class="choice-container"  >
    <div v-if="computedChoices">

        <div>

            <ComponentOneChoice 
               
                @a-choice-have-been-acted="choiceActedHandler"
            />

        </div>
    </div>
  </div> 

                              <!-- ENEMY 
                                  Componenent switch types : {'enemy', ...   -->
    <!-- <div class="enemy-container">
          <div v-if=" computedEnemys">
            

                  <ComponentEnemy
                      @minus-life="MinusEnemyLife"
                      :enemy="computedEnemys" 
                    
                    />

            
          </div>
    </div> -->
       
                                <!-- CALL TO ACTIONS
                                    Component switch types : {'dodge', ...   -->
  <div v-if="computedCtas.length > 0" >
    <div v-for="cta in computedCtas" :key="cta.id">

        <ComponentCallToAction :ctas-infos="cta"  @a-cta-is-sent="ctasHandler"  />

    </div>
  </div>

                                      
                                  <!-- BACKGROUND
                                      Componenent -->
 <div class="background-scene">
      <div v-if="computedVideoInfos" >

          <div v-if="computedVideoInfos.isBackground" >
              <div v-for="backGroundInfos in  computedVideoInfos.background_container" :key="backGroundInfos.id">

                  <ComponentBackground :actual-background-infos="backGroundInfos" />

              </div>
        </div>
    </div>
  </div>

                                    <!--  AUDIO
                                        Componenent  -->
  <div class="audio-container">
    <div v-if="computedAudios" >
       
        <div>

              <ComponentAudio :audio-infos="computedAudios" /> 

        </div>

        
    </div>
  </div>
                                    <!--  WAITING ZONE  -->

      <!-- <div v-for="boss in videoInfos.boss" :key="boss.id" class="boss-container">

          <ComponentBoss
            @minus-boss-life="MinusBossLife"
            @hitBoss="hitBoss(boss)" 
            :boss="boss" 
            
            />
    </div>  -->


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

  data() {
    return {
     
    
    };
  },

  computed: {
    computedStoryMap() {
      return this.$store.getters.getStoryMap;
    },

    computedVideoInfos() {
      return this.$store.getters.getVideo;
    },

    computedChoices() {
      return this.$store.getters.getChoices;
    },

    computedAudios() {
      return  this.$store.getters.getAudio;
    },

    computedEnemys() {
       return this.$store.getters.getEnemy;
    },

    computedCtas() {
      return this.$store.getters.getCtas;
    },
    computedBackground() {
      return this.$store.getters.getBackground;
    },

    computedWeapon(){
      return this.$store.getters.getWeapon;
    },

    // computedWeaponSelect() {
    //   return this.$store.getters.computedWeaponSelect
    // }
  },

  mounted() {

  },

  destroyed() {
    // Récupéré la route au moment du die, permet la navigation entre chaques scénes.
    this.$store.state.routeHandler = this.computedVideoInfos;
    console.log("cinema vien de die", this.computedVideoInfos);
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
          // this.exceptionChoiceManager(actionInfos);

          //  this.choices.push(actionInfos);
          this.$store.commit('setActualChoices', actionInfos)
          break;

        case "sound":
          console.log("dans le switch SOUND : ", actionInfos);

          this.$store.commit('setActualAudio', actionInfos);
     
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
         this.$store.commit('setActualAudio', []); 
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
        switch (this.$store.state.actualWeapon) {
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
