<template>
    <div>
        <div>
            <img  v-on:click="hitEnemy(enemy,$event)"
                :src="'/assets/images/'+ enemy.url" 
                alt=""
                :class="enemy.id"
            
            
            />
        </div>
    </div>
</template>

<script>
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
      enemies: this.$store.state.actualEnemy,
    };
  },

  mounted() {
    console.log(this.$store.state.actualEnemy);
    this.weaponInStore = this.$store.state.weapon;
    this.$emit("an-enemy-is-sent", this.enemy);
    console.log("weh on emit l'enemy", this.enemy);
  },

  methods: {
    hitEnemy(enemy) {
      const monImage = document.querySelector("." + enemy.id);
      console.log(this.enemy.vie, this.enemy.url);

      //   console.log("cta : " + enemy.url, "event :" + event.target);
      //   let target = event.currentTarget;

      switch (this.weaponInStore) {
        case "banane":
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
        case "couteau":
          this.enemy.vie -= 50;

          const hits_couteau = [
            "./assets/mp3/hits/hit_couteau1.mp3",
            "./assets/mp3/hits/hit_couteau2.mp3",
          ];
          const random_couteau =
            hits_couteau[Math.floor(Math.random() * hits_couteau.length)];
          const hit_couteau = new Audio(random_couteau);

          hit_couteau.play();

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
        case "fusil":
          this.enemy.vie -= 100;
          const hits_fusil = [
            "./assets/mp3/hits/hit_fusil1.mp3",
            "./assets/mp3/hits/hit_fusil2.mp3",
          ];
          const random_fusil =
            hits_fusil[Math.floor(Math.random() * hits_fusil.length)];
          const hit_fusil = new Audio(random_fusil);

          hit_fusil.play();
          if (this.enemy.vie <= 0) {
            this.enemy.vie = 0;
            console.log("DEAD", this.enemy.id);
            monImage.classList.add("hide");
          }
          console.log(
            "fusil utilisée sur",
            this.enemy.url + " | Vie : " + this.enemy.vie
          );
          break;

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

.hide {
  visibility: hidden;
}
</style>
