<template>
<div>
  <p>coucou</p>
    <div v-if="actualBackgroundInfos.type === 'sound'">
        <div >
        
                <audio 
                   
                    volume="0.05"
                    autoplay
                    controls
                   
                    ref="audioBox"
                >
                    <source id="audioBackgroundBalise" :src="'/assets/mp3/background/' + actualBackgroundInfos.url"/>
                
                </audio>
          </div>     
    </div>


    <div  v-if="actualBackgroundInfos.type === 'video'">
        <video controls loop autoplay :src="'/assets/videos/background/'  + actualBackgroundInfos.url "></video>
    </div>


  </div>

</template>

<script>
export default {

  name: "ComponentBackground",
  props: {
    actualBackgroundInfos: {
      type: Object,
      required: true,
    },

    mounted() {},

    computed: {
      setVolume() {
        const audioBackgroundBalise = document.getElementById(
          "audioBackgroundBalise"
        );
        audioBackgroundBalise.volume = 1;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.background-video-container {
  position: fixed;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
</style>
