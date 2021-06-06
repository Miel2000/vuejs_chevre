<template>
    <div :class="boss.id">
      
      <h1 class="text-center eighties" style="color:white"> {{ this.$store.state.bossLife }} %</h1>
          <div class="healthbar">
              <div  class="healthbar text-center" :style="{backgroundColor: this.$store.state.bossLife <= 500 ? 'red' : 'green', margin: 0, color: 'white', width: this.$store.state.bossLife / 10 + '%' }">
              </div>
          </div>
      
   

          <br>
      <img  v-on:click="hitBoss(boss)"
          :src="'/assets/images/'+ boss.url" 
          alt=""
         
      />

    </div>

  
</template>

<script>
export default {
  props: {
    boss: {
      type: Object,
      required: true,
    },

    data() {
      return {
        weaponInStore: "",
        myInterval: "",
      };
    },
  },

  mounted() {
    console.log(this.boss);
    this.weaponInStore = this.$store.state.weapon;
    this.bossLife = this.$store.state.bossLife;
    // this.startInterval();
  },
  computed: {},
  methods: {
    hitBoss() {
      console.log("boss hitted mofo", this.$store.state.bossLife);
      const monImage = document.querySelector("." + this.boss.id);
      console.log(this.$store.state.bossLife, this.boss.url);

      // Quand un coup est émit via le click, selon $store.state.weapon
      switch (this.weaponInStore) {
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

          this.$store.commit("minusBossLife", 25);

          if (this.$store.state.bossLife <= 0) {
            this.$emit("minus-boss-life");
            this.$store.state.bossLife = 0;
            console.log("DEAD", this.boss.id);
            monImage.classList.add("hide");
          }

          console.log(
            "banane utilisée sur",
            this.boss.url + " | Vie : " + this.$store.state.bossLife
          );
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
          this.$store.commit("minusBossLife", 50);

          if (this.$store.state.bossLife <= 0) {
            this.$emit("minus-boss-life");
            this.$store.state.bossLife = 0;
            console.log("DEAD", this.boss.id);
            monImage.classList.add("hide");
          }
          console.log(
            "couteau utilisée sur",
            this.boss.url + " | Vie : " + this.$store.state.bossLife
          );
          break;
        }
        case "fusil": {
          const hits_fusil = [
            "./assets/mp3/hits/hit_fusil1.mp3",
            "./assets/mp3/hits/hit_fusil2.mp3",
          ];
          const random_fusil =
            hits_fusil[Math.floor(Math.random() * hits_fusil.length)];
          const hit_fusil = new Audio(random_fusil);
          monImage.style.transform = "rotate(7deg)";
          monImage.style.transform =
            "translateX(" +
            Math.random() * (window.innerWidth / window.innerHeight) +
            "%)";

          hit_fusil.play();

          this.$store.commit("minusBossLife", 100);

          if (this.$store.state.bossLife <= 0) {
            this.$emit("minus-boss-life");
            // this.$emit("root-end", storyMap.videos["valorant"]);
            this.stopInterval();
            this.bossLife = 0;
            console.log("DEAD", this.boss.id);
            monImage.classList.add("hide");
          }
          console.log(
            "fusil utilisée sur",
            this.boss.url + " | Vie : " + this.$store.state.bossLife
          );
          break;
        }
      }
    },

    startInterval: function() {
      if (this.$store.state.bossLife >= 0) {
        this.myInterval = setInterval(() => {
          const hits_bamboos = ["./assets/mp3/hits/hit_bambo.mp3"];
          const random_bamboo =
            hits_bamboos[Math.floor(Math.random() * hits_bamboos.length)];
          const hit_bamboo = new Audio(random_bamboo);

          hit_bamboo.play();

          console.log("yeet");
          this.$store.commit("minusMyLife", this.boss.degatBoss);
        }, 3000);
      }
    },

    stopInterval: function() {
      console.log("interval stopped");
      clearInterval(this.myInterval);
    },
  },
};
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}

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
</style>
