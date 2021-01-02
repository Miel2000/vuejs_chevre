import Vue from 'vue'
import Vuex from 'vuex'

import storyMap from "@/storyMap.js";

Vue.use(Vuex)

// pour y avoir acces partout ailleur, il faut faire $this.$store.state.mana

export default new Vuex.Store({
  state: {
    storyMap,
    currentTimeVideo: 0,
    currentTimeAudio: 0,
    actualVideoObj: {},
    actualChoices: [],
    actualSounds: [],
    actualEnemy: [],
    weapon:"banane",
    actualCallToActions: [],
    mana: 100,
    vie: 100,
    playerIsInteractive: true,
  },

  mutations: {
    addMana: (state, x) => {
      state.mana += x;
    },

    removeMana: (state, x) => {
      state.mana -= x;
    },


  },
});
