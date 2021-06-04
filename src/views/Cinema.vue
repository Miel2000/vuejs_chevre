<template>
    <div class="container">
      <p> Computed Videos Infos : {{ computedCurrentTimeVideo  }}</p>
      <p> Computed Videos Infos : {{ computedVideoInfos  }}</p>
      <p> Computed Weapon :{{ computedWeapon  }}</p>
      <p> Computed Backgrounds :{{ computedBackgrounds  }}</p>
      <p> Computed Enemys :{{ computedEnemys  }}</p>
      <p> Computed Audios :{{ computedAudios  }}</p>
      <p> Computed Choices :{{ computedChoices  }}</p>
      <p> Computed Ctas :{{ computedCtas  }}</p>
      <p> Computed Ninja Life :{{ computedNinjaLife  }}</p>
      


                                <!-- VIDEO
                                    Component switch  -->
    <div class="video-container">
      
        <div  v-if="computedVideoInfos.self" class="video_container">
          <p>coucou</p>
            <div>

            <ComponentVideo 
               
              
               
              
                
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

        <div >

            <ComponentOneChoice 
               
            
            />

        </div>
    </div>
  </div> 

                              <!-- ENEMY 
                                  Componenent switch types : {'enemy', ...   -->
    <div class="enemy-container">
          <div v-if="computedEnemys">
            

                  <ComponentEnemy   />

            
          </div>
    </div>
       
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

                  <ComponentBackground  />

           
        </div>
    </div>
  </div>

                                    <!--  AUDIO
                                        Componenent  -->
  <div class="audio-container">
    <div v-if="computedAudios" >
       
        <div>

              <ComponentAudio  /> 

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

// import storyMap from "@/storyMap.js";

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

    computedCurrentTimeVideo(){
      return this.$store.getters.getCurrentTimeVideo;
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

    computedBackgrounds() {
      return this.$store.getters.getBackground;
    },

    computedWeapon() {
      return this.$store.getters.getWeapon;
    },

    computedNinjaLife() {
      return this.$store.getters.getNinjaLife;
    }

    // computedWeaponSelect() {
    //   return this.$store.getters.computedWeaponSelect
    // }
  },

  mounted() {
    console.log('enemysss', this.computedEnemys)
  },

  destroyed() {
    // Récupéré la route au moment du die, permet la navigation entre chaques scénes.
    this.$store.state.routeHandler = this.computedVideoInfos;
    console.log("cinema vien de die", this.computedVideoInfos);
    console.log("LE HANDLER", this.$store.state.routeHandler);
  },

  methods: {},
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
