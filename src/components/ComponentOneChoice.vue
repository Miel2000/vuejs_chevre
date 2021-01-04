<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

	<div v-if="choiceInfos.text" style="text-align:center">
    <img v-if="choiceInfos.img"  @click="choiceClickHandler" style="height:100px" :src="'./assets/images/' + choiceInfos.img" :alt="choiceInfos.route">

      <button v-if="!choiceInfos.img"
        class="oneChoice"
        :isContinuePlaying="choiceInfos.isContinue"
        @click="choiceClickHandler"
      >
        {{choiceInfos.text}}
      </button>
    </div>

</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>
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
      // big condition qui permet de changer d'arme pour rejouer la scéne de shoot ma boi
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

      this.$emit("a-choice-have-been-acted", this.choiceInfos.route);
    },
  },
};
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">
.oneChoice {
  display: inline-flex;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
