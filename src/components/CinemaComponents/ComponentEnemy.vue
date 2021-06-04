<template>

<div>

 <p>coucou enemy</p>
  
      <div v-for="computedEnemy in this.computedEnemys" :key="computedEnemy.id" style="text-align:center">
    <div :class="computedEnemy.id">
      
        <h1 class="text-center eighties"  style="color:black"> {{ computedEnemy.vie }} %</h1>

            <div class="healthbar " >

                <div  class="healthbar text-center" :style="{backgroundColor: computedEnemy.vie <= 50 ? 'red' : 'green', margin: 0, color: 'white', width: computedEnemy.vie + '%' }">
                </div>

            </div>

            <br>
            
                <img  v-on:click="hitcomputedEnemy(computedEnemy)"
                    :src="'/assets/images/'+ computedEnemy.url" 
                    alt=""
                 
                  
                />
       </div>
    </div>
 
    

</div>

 

  
</template>

<script>
// import { TimelineLite } from "gsap";
 
export default {

  data() {
    return {
      weaponInStore: "",
      rootWhenFinish: "",
    };
  },

  computed:{

    computedStoryMap() {
      return this.$store.getters.getStoryMap;
    },
    computedEnemys() {
      return this.$store.getters.getEnemy;
    },
    computedVideo() {
      return this.$store.getters.getVideo;
    },
    computedNinjaLife(){
      return this.$store.getters.getNinjaLife;
    },
    computedWeapon() {
      return this.$store.getters.getWeapon;
    }
  },

  mounted() {
  
    console.log('enemy mounted', this.computedEnemys);
    console.log('video mounted', this.computedVideo);



    // if ( this.computedEnemys == "castex") {
    //   this.timelineCastex = new TimelineLite();
    //   console.log("image triggered", this.$refs.castex);
    //   this.timelineCastex.to(this.$refs.castex, 1.5, {
    //     y: 200,
    //     ease: "Linear.easeNone",
    //     yoyo: true,
    //     repeat: -1,
    //   });
    // }
    // if ( this.computedEnemys == "castaner") {
    //   this.timelineCastaner = new TimelineLite();
    //   this.timelineCastaner.to(this.$refs.castaner, 1, {
    //     x: -400,
    //     ease: "Linear.easeNone",
    //     repeat: -1,
    //     yoyo: true,
    //   });
    // }

  },

  methods: {
    hitcomputedEnemy(enemy) {
      const monImage = document.querySelector("." + enemy.id);
      console.log(enemy.vie, enemy.url);


      // Quand un coup est émit via le click, selon $store.state.weapon
      switch (this.computedWeapon) {
        case "banane": {
        
          const hits_bananes = [
            "./assets/mp3/hits/hit_banane1.mp3",
            "./assets/mp3/hits/hit_banane2.mp3",
            "./assets/mp3/hits/hit_banane2.mp3",
            "./assets/mp3/hits/hit_banane2.mp3",
            "./assets/mp3/hits/hit_banane2.mp3",
            "./assets/mp3/hits/hit_banane2.mp3",
            "./assets/mp3/hits/hit_banane3.mp3",
          ];

          const random_banane = hits_bananes[Math.floor(Math.random() * hits_bananes.length)];
          
          const hit_banane = new Audio(random_banane);
          hit_banane.play();

          this.$store.commit("minusNinjaLife", 10);
          enemy.vie -= 10;

          if (enemy.vie <= 0) {
            enemy.vie = 0;
            console.log("DEAD", enemy.id);
            monImage.classList.add("hide");
          }

          console.log("banane utilisée sur", enemy.url + " | Vie : " + enemy.vie );
          break;
        }
        case "couteau": {
          
          const hits_couteau = [
            "./assets/mp3/hits/hit_couteau1.mp3",
            "./assets/mp3/hits/hit_couteau2.mp3",
          ];
          const random_couteau = hits_couteau[Math.floor(Math.random() * hits_couteau.length)];

          const hit_couteau = new Audio(random_couteau);
          hit_couteau.play();

          this.$store.commit("minusNinjaLife", 50);
          enemy.vie -= 50;
       
          if (enemy.vie <= 0) {
            enemy.vie = 0;
            console.log("DEAD", enemy.id);
            monImage.classList.add("hide");
          }
          console.log("couteau utilisé sur ", enemy.url + " | Vie : " + enemy.vie);
          break;
        }
        case "fusil": {
          const hits_fusil = [
            "./assets/mp3/hits/hit_fusil1.mp3",
            "./assets/mp3/hits/hit_fusil2.mp3",
          ];
          const random_fusil = hits_fusil[Math.floor(Math.random() * hits_fusil.length)];

          const hit_fusil = new Audio(random_fusil);
          hit_fusil.play();

          this.$store.commit("minusNinjaLife", 100);
          enemy.vie -= 100;

          if (enemy.vie <= 0) {
            enemy.vie = 0;
            console.log("DEAD", enemy.id);
            monImage.classList.add("hide");
          }
          console.log("fusil utilisé sur", enemy.url + " | Vie : " + enemy.vie);
         
          break;
        }

        default:
          break;
      }

      // Coupe le son après ninja dead et changement video valorant_arme

          // FUSIL
      if( this.$store.getters.getNinjaLife <= 0 &&
          this.computedWeapon === "fusil"

      ) {
        this.$store.commit('setActualAudio', {})
        this.$store.commit('setActualVideo', this.computedStoryMap.videos['valorant_fusil'])
      }
         // COUTEAU
      if( this.$store.getters.getNinjaLife <= 0 &&
      this.computedWeapon === "couteau"

      ) {
        this.$store.commit('setActualAudio', {})
        this.$store.commit('setActualVideo', this.computedStoryMap.videos['valorant_couteau'])
      }

         // BANANE
      if( this.$store.getters.getNinjaLife <= 0 &&
      this.computedWeapon === "banane"

      ) {
        this.$store.commit('setActualAudio', {})
        this.$store.commit('setActualVideo', this.computedStoryMap.videos['valorant_banane'])
      }
      

    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 150px;
}

.eighties {
  color: #c81914;
  font-size: 20pt;
  font-family: "Eighties Horror";
  line-height: 1em;
  letter-spacing: 3px;
}
.healthbar {
  width: 80%;
  height: 10px;
  border-radius: 5% / 50%;
  border: 1px solid white;
  margin: auto;
  transition: width 500ms;
}
.text-center {
  text-align: center;
  color: #c81914;
}

.hide {
  visibility: hidden;
}
</style>
