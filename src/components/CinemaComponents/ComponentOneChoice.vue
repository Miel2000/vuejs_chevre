<template>
<div>
  
	<div style="text-align:center">

    <!-- <img v-if="choiceInfos.img"  @click="choiceClickHandler"

         style="height:100px" 
         :src="'./assets/images/' + choiceInfos.img" 
         :alt="choiceInfos.route"> -->

    <a v-if="choiceInfos"
      class="oneChoice"
      :isContinuePlaying="choiceInfos.isContinue"
      @click="choiceClickHandler(choiceInfos.route)"
    >

    {{ choiceInfos.text }}

      </a>
    </div>
</div>

</template>


<script>

export default {
  props: {
    choiceInfos: {
      type: Object,
      required: true,
    },
  },

  created() {
    //
  },

  mounted() {
  },

  data() {
     return {};
  },
  computed: {

   computedStoryMap(){
     return this.$store.getters.getStoryMap;
   }

  },

 

  methods: {
      choiceClickHandler() {
        this.$store.commit("setActualVideo", this.computedStoryMap.videos[this.choiceInfos.route]);
        this.$store.commit("setActualChoices", {});
        // console.log( this.computedStoryMap.videos["intro2"]);
        // this.exceptionsManager();
    
      },

      selectWeapon(arme) {
          this.$store.commit("setActualWeapon", arme);
      },

      exceptionsManager() {

      //quand je clique sur le choix d'une nouvelle arme, en direction de la scene shooting_remake
      // if(this.choiceInfos.id === "shooting_remake"){
  
      //    this.$store.commit('setActualVideo', storyMap.videos['shooting_remake'])
      // }

   

      if (
        this.choiceInfos.route === "banane" ||
        (this.choiceInfos.route == "shooting" &&
          this.choiceInfos.id == "banane")
      ) {
        // this.$store.commit("setActualWeapon", "banane");
        this.selectWeapon('banane');
        console.log("l'arme choisi est  banane ", this.$store.state.actualWeapon );

      }
      if (
        this.choiceInfos.route === "couteau" ||
        (this.choiceInfos.route == "shooting_remake" &&
          this.choiceInfos.id == "couteau")
      ) {

        this.$store.commit("setActualWeapon", "couteau");
        // this.$store.state.actualWeapon = "couteau";
        console.log("l'arme choisi est  couteau " , this.$store.state.actualWeapon);

      }
      if (
        this.choiceInfos.route === "fusil" ||
        (this.choiceInfos.route == "shooting_remake" &&
          this.choiceInfos.id == "fusil")
      ) {

        this.$store.commit("setActualWeapon", "fusil");
        // this.$store.state.actualWeapon = "fusil";
        console.log("l'arme choisi est  fusil ", this.$store.state.actualWeapon );

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
