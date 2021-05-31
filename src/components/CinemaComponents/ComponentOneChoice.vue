<template>

	<div v-if="choiceInfos.text" style="text-align:center">
    <img v-if="choiceInfos.img"  @click="choiceClickHandler" style="height:100px" :src="'./assets/images/' + choiceInfos.img" :alt="choiceInfos.route">

      <button v-if="!choiceInfos.img && !choiceInfos.dodge"
        class="oneChoice"
        :isContinuePlaying="choiceInfos.isContinue"
        @click="choiceClickHandler"
      >
        {{choiceInfos.text}}
      </button>

    </div>

</template>


<script>
import storyMap from "@/storyMap.js";
export default {
  props: {
    choiceInfos: {
      type: Object,
      required: true,
      default: null,
    },
  },

  created() {
    //
  },

  mounted() {},

  data() {
    return {};
  },

  methods: {
    choiceClickHandler() {
      this.exceptionsManager();

      this.$emit("a-choice-have-been-acted", this.choiceInfos.route);
  
    },

    exceptionsManager() {

      //quand je clique sur le choix d'une nouvelle arme, en direction de la scene shooting_remake
      // if(this.choiceInfos.id === "shooting_remake"){
  
      //    this.$store.commit('setActualVideo', storyMap.videos['shooting_remake'])
      // }

      if (
        this.choiceInfos.route === "banane" ||
        (this.choiceInfos.route == "shooting_remake" &&
          this.choiceInfos.id == "banane")
      ) {
        this.$store.commit("addWeapon", "banane");
      }
      if (
        this.choiceInfos.route === "couteau" ||
        (this.choiceInfos.route == "shooting_remake" &&
          this.choiceInfos.id == "couteau")
      ) {
        this.$store.commit("addWeapon", "couteau");
      }
      if (
        this.choiceInfos.route === "fusil" ||
        (this.choiceInfos.route == "shooting_remake" &&
          this.choiceInfos.id == "fusil")
      ) {
        this.$store.commit("addWeapon", "fusil");
      }
  
    },
  },
  // big condition qui permet de changer d'arme pour rejouer la scéne de shoot ma boi
};
</script>




<style scoped lang="scss">
.oneChoice {
  display: inline-flex;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
