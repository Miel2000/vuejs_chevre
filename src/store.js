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
    myLife: 100,
    ninjasLife: 200,
    bossLife: 300,
    piegeFleche:false,
    piegeChat:false,
    playerIsInteractive: true,
    routeHandler:[],
    scoreGame: 0
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

    minusBossLife: (state, x) => {
      state.bossLife -= x;
    },

    minusMyLife: (state, x) => {
      state.myLife -= x;
    },

    // setActualChoices: (state,x) => {
    //   state.actualChoices.push(x);
    // }
    
  }
});
