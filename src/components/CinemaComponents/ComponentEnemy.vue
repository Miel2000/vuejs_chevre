<template>
    <div :class="enemy.id"  :ref="enemy.id">
      
      <h1 class="text-center eighties" style="color:black"> {{ this.enemy.vie }} %</h1>
          <div class="healthbar">
              <div  class="healthbar text-center" :style="{backgroundColor: this.enemy.vie <= 50 ? 'red' : 'green', margin: 0, color: 'white', width: this.enemy.vie + '%' }">
              </div>
          </div>
          <br>
      <img  v-on:click="hitEnemy(enemy)"
          :src="'/assets/images/'+ enemy.url" 
          alt=""
          :class="enemy.id"
         
      />
    
    </div>
  
</template>

<script>
import { TimelineLite } from "gsap";

export default {
  props: {
    enemy: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      weaponInStore: "",
      rootWhenFinish: "",
    };
  },

  mounted() {
    this.enemy.vie = 100;
    this.$store.state.ninjasLife = 200;
    this.weaponInStore = this.$store.state.weapon;
    this.$emit("an-enemy-is-sent", this.enemy);

    if (this.enemy.id == "castex") {
      this.timelineCastex = new TimelineLite();
      console.log("anim triggered", this.$refs.castex);
      this.timelineCastex.to(this.$refs.castex, 1.5, {
        y: 200,
        ease: "Linear.easeNone",
        yoyo: true,
        repeat: -1,
      });
    }
    if (this.enemy.id == "castaner") {
      this.timelineCastaner = new TimelineLite();
      this.timelineCastaner.to(this.$refs.castaner, 1, {
        x: -400,
        ease: "Linear.easeNone",
        repeat: -1,
        yoyo: true,
      });
    }
  },

  methods: {
    hitEnemy(enemy) {
      const monImage = document.querySelector("." + enemy.id);
      console.log(this.enemy.vie, this.enemy.url);

      // Quand un coup est émit via le click, selon $store.state.weapon
      switch (this.weaponInStore) {
        case "banane": {
          this.enemy.vie -= 10;
          const hits_bananes = [
            "./assets/mp3/hits/hit_banane1.mp3",
            "./assets/mp3/hits/hit_banane2.mp3",
            "./assets/mp3/hits/hit_banane2.mp3",
            "./assets/mp3/hits/hit_banane2.mp3",
            "./assets/mp3/hits/hit_banane2.mp3",
            "./assets/mp3/hits/hit_banane2.mp3",
            "./assets/mp3/hits/hit_banane3.mp3",
          ];
          const random_banane =
            hits_bananes[Math.floor(Math.random() * hits_bananes.length)];
          const hit_banane = new Audio(random_banane);

          hit_banane.play();

          this.$store.commit("minusNinjasLife", 10);
          this.$emit("minus-life");

          if (this.enemy.vie <= 0) {
            this.enemy.vie = 0;
            console.log("DEAD", this.enemy.id);
            monImage.classList.add("hide");
          }

          console.log(
            "banane utilisée sur",
            this.enemy.url + " | Vie : " + this.enemy.vie
          );
          break;
        }
        case "couteau": {
          this.enemy.vie -= 50;

          const hits_couteau = [
            "./assets/mp3/hits/hit_couteau1.mp3",
            "./assets/mp3/hits/hit_couteau2.mp3",
          ];
          const random_couteau =
            hits_couteau[Math.floor(Math.random() * hits_couteau.length)];
          const hit_couteau = new Audio(random_couteau);

          hit_couteau.play();
          this.$store.commit("minusNinjasLife", 50);
          this.$emit("minus-life");

          if (this.enemy.vie <= 0) {
            this.enemy.vie = 0;
            console.log("DEAD", this.enemy.id);
            monImage.classList.add("hide");
          }
          console.log(
            "couteau utilisée sur",
            this.enemy.url + " | Vie : " + this.enemy.vie
          );
          break;
        }
        case "fusil": {
          this.enemy.vie -= 100;
          const hits_fusil = [
            "./assets/mp3/hits/hit_fusil1.mp3",
            "./assets/mp3/hits/hit_fusil2.mp3",
          ];
          const random_fusil =
            hits_fusil[Math.floor(Math.random() * hits_fusil.length)];
          const hit_fusil = new Audio(random_fusil);

          hit_fusil.play();
          this.$store.commit("minusNinjasLife", 100);
          this.$emit("minus-life");

          console.log('on émite route when finish à "valorant"');
          if (this.enemy.vie <= 0) {
            // this.$emit("root-end", storyMap.videos["valorant"]);
            this.enemy.vie = 0;
            console.log("DEAD", this.enemy.id);
            monImage.classList.add("hide");
          }
          console.log(
            "fusil utilisée sur",
            this.enemy.url + " | Vie : " + this.enemy.vie
          );
          break;
        }

        default:
          break;
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
