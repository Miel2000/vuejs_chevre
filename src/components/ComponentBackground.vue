<template>
<div>
    <div v-if="actualBackgroundInfos.audio_container">
        <div v-for="backgroundAudio in actualBackgroundInfos.audio_container" :key="backgroundAudio.id">
          <div v-if="backgroundAudio.isLooping" >
                <audio 
                   
                    volume="0.05"
                    autoplay
                    controls
                    loop
                    ref="audioBox"
                >
                    <source id="audioBackgroundBalise" :src="'/assets/mp3/background/' + backgroundAudio.url"/>
                
                </audio>
          </div>
          <div v-else>
               <audio 
      
                    volume="0.05"
                    autoplay
                    controls
                    ref="audioBox"
                >
                    <source   id="audioBackgroundBalise" :src="'/assets/mp3/background/' + backgroundAudio.url"/>
                
                </audio>
          </div>

         </div>
    </div>

    <div v-if="actualBackgroundInfos.video_container">
        <div  class="background-video-container" v-for="backgroundVideo in actualBackgroundInfos.video_container" :key="backgroundVideo.id">
          <div class="background-video-loop">
            <div v-if="backgroundVideo.isLooping">
                <video loop autoplay :src="'/assets/videos/background/'  + backgroundVideo.url "></video>
            </div>
            <div v-else>
                <video  autoplay :src="'/assets/videos/background/'  + backgroundVideo.url "></video>
            </div>
          </div>

         </div>
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

    mounted() {
      console.log("he ho");
    },

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
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
