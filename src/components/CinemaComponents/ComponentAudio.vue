<template>
<div>
  
    <div v-if="computedAudios.url" class="audio-container">
       <p>coucou audio</p>
         
            <audio   
                autoplay
                controls 
              
                >
                <source :src="'/assets/mp3/' + computedAudios.url"/>
            
            </audio>
    </div>

</div>
</template>
<script>
export default {
  name: "ComponentAudio",

  components: {},

  props: {

  },

  computed: {
    computedAudios(){
      return this.$store.getters.getAudio;
    }
  },
  data() {
    return {};
  },


  mounted() {
    console.log('audio qui monte yep')
  },

  methods: {

    playSound () {

      if(this.computedAudios) {

        var audio = new Audio(this.computedAudios);
        audio.play();

      }
    }
  },

};
</script>
