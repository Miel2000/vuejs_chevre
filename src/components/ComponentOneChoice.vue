<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>
<div class="choice-container">
	<div v-if="choiceInfos.text">

      <button 
        class="oneChoice"
        :isContinuePlaying="choiceInfos.isContinue"
        @click="choiceClickHandler"
      >
        {{choiceInfos.text}}
      </button>
    </div>
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
      if (this.choiceInfos.route === "banane") {
        this.$store.state.weapon = "banane";
      }
      if (this.choiceInfos.route === "couteau") {
        this.$store.state.weapon = "coteau";
      }
      if (this.choiceInfos.route === "fusil") {
        this.$store.state.weapon = "fusil";
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
  display: inline-block;
  border: solid 5px red;
  padding: 10px 20px;

  cursor: pointer;
}
</style>
