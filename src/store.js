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

    actualVideo: storyMap.videos['couteau'],
    actualChoices: [],
    actualBackground: {},
    actualAudio: {},
    actualEnemy: {},
    actualCallToActions: [],
    actualWeapon:"couteau",

    myLife: 100,
    ninjaLife: 200,
    bossLife: 300,
    piegeFleche:false,
    piegeChat:false,
    routeHandler:[],
    scoreGame: 0
  },  

  getters : {

    getCurrentTimeVideo(state) {
      return state.currentTimeVideo;
    },
    getStoryMap(state) {
      return state.storyMap;
    },
    getVideo(state){
      return state.actualVideo;
    },
    getChoices(state){
      return state.actualChoices;
    },
    getAudio(state){
      return state.actualAudio;
    },
    // Quand on get les enemy, on veut forcement ceux qui apparetiennent à la videoActuelle
    getEnemy(state){
      return state.actualEnemy;

    },
    getCtas(state){
      return state.actualCallToActions;
    },
    getBackground(state){
      return state.actualBackground;
    },
    getWeapon(state) {
      return state.actualWeapon;
    },

    getNinjaLife(state){
      return state.ninjaLife;
    }
    
  },

  mutations: {

    // 

    setCurrentTimeVideo: (state, x) => {
      state.currentTimeVideo = x;
    },

    setActualVideo: (state,x) => {
      state.actualVideo = x;
    },

    setActualChoices: (state,x) => {
      state.actualChoices = x;
    },

    addActualChoices: (state, x) => {
      state.actualChoices.push(x)
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

    minusNinjaLife: (state, x) => {
      state.ninjaLife -= x;
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
