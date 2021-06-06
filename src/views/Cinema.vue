<template>
  <div class="container">
    <p> Computed Videos Infos : {{ computedCurrentTimeVideo  }} </p>
    <p> Computed Videos Infos : {{ computedVideoInfos  }} </p>
    <p> Computed Weapon : {{        computedWeapon  }} </p>
    <p> Computed Backgrounds : {{   computedBackgrounds  }} </p>
    <p> Computed Enemys : {{        computedEnemys  }} </p>
    <p> Computed Audios : {{        computedAudios  }} </p>
    <p> Computed Choices : {{       computedChoices  }} </p>
    <p> Computed Ctas : {{          computedCtas  }}  </p>
    <p> Computed Ninja Life : {{    computedNinjaLife  }} </p>
    

    <img style="width:100px;"  v-if="computedWeapon === 'banane'"   src="/assets/images/banane.png"  alt="Banane yo" />
    <img style="width:100px;"  v-if="computedWeapon === 'fusil'"    src="/assets/images/fusil.png"   alt="fusil wésh" />
    <img style="width:100px;"  v-if="computedWeapon === 'couteau'"  src="/assets/images/couteau.png" alt="couteau uuuuu" />

                            <!-- VIDEO 
                               Component -->
    <div class="video-container">
        <div  v-if="computedVideoInfos.self" >
            <p>coucou video</p>
              <div>

                <ComponentVideo />

              </div>
        </div>
    </div>

                             <!-- CHOICE 
                                 Component -->
    <div class="choice-container"  >
      <div v-if="computedChoices">
          <div>

            <ComponentOneChoice />

          </div>
      </div>
    </div> 

                              <!-- ENEMY 
                                 Component -->
      <div class="enemy-container">
          <div v-if="computedEnemys">
    
            <ComponentEnemy />

          </div>
      </div>
        
                              <!-- CALL TO ACTIONS 
                                     Component  -->
    <div v-if="computedCtas.length > 0" >
      <div v-for="cta in computedCtas" :key="cta.id">

          <ComponentCallToAction :ctas-infos="cta"  @a-cta-is-sent="ctasHandler"  />

      </div>
    </div>

                                        
                                    <!-- BACKGROUND
                                         Component -->
  <div class="background-scene">
        <div v-if="computedVideoInfos" >
            <div v-if="computedVideoInfos.isBackground" >

              <ComponentBackground />

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
    },

    computedTimerShootingRemake() {
      return this.$store.getters.getTimerShootingRemake;
    }
  },

  mounted() {
    console.log('enemysss Component', this.computedEnemys)
  },

  destroyed() {
    // stock la route au moment du die du cinema
    this.$store.state.routeHandler = this.computedVideoInfos;
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

.video-container {
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
