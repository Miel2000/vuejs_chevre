<template>
    <div v-if="actualBackgroundInfos.audio_container">
        <div v-for="backgroundAudio in actualBackgroundInfos.audio_container" :key="backgroundAudio.id">

       
                <audio 
                    :volume="0.2"
                    autoplay
                    controls
                    ref="audioBox"
                >
                    <source :src="'/assets/mp3/' + backgroundAudio.url"/>
                
                </audio>
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
      this.audioBox();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
