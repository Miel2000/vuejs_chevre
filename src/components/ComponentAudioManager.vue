<template>
    <div>
       <div v-for="audio in soundUrl" :key='audio.id'>
                    <ComponentAudio
                  
                    v-bind:audio="audio"

                    />
        </div>
    </div>

</template>
<script>
import { TimelineLite } from "gsap/TweenMax";
import ComponentAudio from '@/components/ComponentAudio';

export default {

    name: "ComponentAudioManager",
    
    components: { ComponentAudio },

	methods: {

    audioBox() {
        // console.log(this.sounds); 
    },

   

    onTimeUpdate( event ) {
    //    console.log(event);
    },

   

    },

    updated() {
        this.sounds = this.$store.state.actualSounds;
    },

	beforeUpdate() {

	},

	mounted() {
        this.sounds = this.$store.state.actualSounds;
        this.audioBox();
        this.soundUrl.forEach(sound => {
           console.log('dans le foreach, un sound = ', sound)

               this.$store.commit('setAudioToManager', sound);
                
            });
        console.log("mounted audio manager - sound obj : " ,this.soundUrl);
        //  this.$store.commit('setAudioToManager', this.soundUrl);

    },

        //  console.log("AUdio", this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].url);
        //  console.log("AUdio", this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].audioStartTimeCode);
        
	

	data() {
		return {
			soundUrl: this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds,
		}
    }
}
    
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">


</style>
