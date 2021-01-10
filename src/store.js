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
    actualVideo:[],
    actualCallToActions: [],
    weapon:"couteau",
    ninjasLife: 200,
    piegeFleche:false,
    piegeChat:false,
    playerIsInteractive: true,
    routeHandler:[]
  },

  mutations: {
    addMana: (state, x) => {
      state.mana += x;
    },

    removeMana: (state, x) => {
      state.mana -= x;
    },

    addWeapon: (state, x) => {
      state.weapon = x
    },

    switchFleche: (state,x) => {
      state.piegeFleche = x
    },

    switchChat: (state,x) => {
      state.piegeChat = x
    },

    setActualVideo: (state,x) => {
      state.actualVideo = x
    },

    minusNinjasLife: (state, x) => {
      state.ninjasLife -= x;
    },

    // setActualChoices: (state,x) => {
    //   state.actualChoices.push(x);
    // }
    
  }
});
