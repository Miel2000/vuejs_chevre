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

    actualVideo: storyMap.videos['weed'],
    actualChoices: {},
    actualBackground: [],
    actualAudio: {},
    actualEnemy: [],
    actualCallToActions: [],
    actualWeapon:"fusil",

    myLife: 100,
    ninjasLife: 200,
    bossLife: 300,
    piegeFleche:false,
    piegeChat:false,
    playerIsInteractive: true,
    routeHandler:[],
    scoreGame: 0
  },  

  getters : {
    computedWeapon(state) {
      return state.actualWeapon;
    },
    computedVideo(state){
      return state.actualVideo;
    },
    computedAudio(state){
      return state.actualAudio;
    },
    computedEnemy(state){
      return state.actualEnemy;
    },
    computedStoryMap(state) {
      return state.storyMap;
    },
    computedChoices(state){
      return state.actualChoices;
    }

  },

  mutations: {

    // 
    setActualVideo: (state,x) => {
      state.actualVideo = x;
    },

    setActualChoices: (state,x) => {
      state.actualChoices = x;
    },

    setActualBackground: (state,x) => {
      state.actualBackground = x;
    },

    setActualAudio:(state,x) => {
      state.actualAudio = x;
    },

    setActualEnemy:(state,x) => {
      state.actualEnemy = x;
    },
    
    setActualCallToActions:(state,x) => {
      state.actualCallToActions = x;
    },

    setActualWeapon: (state, x) => {
      state.actualWeapon = x;
    
    },



    addMana: (state, x) => {
      state.mana += x;
    },

    removeMana: (state, x) => {
      state.mana -= x;
    },

    switchFleche: (state,x) => {
      state.piegeFleche = x
    },

    switchChat: (state,x) => {
      state.piegeChat = x
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
