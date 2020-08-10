<template>
    <div>
      
            <div v-for="sound in soundUrl" :key="sound.id">
                    <ComponentAudio
                    @audiobox="audioBox"
                    :soundInfos="sound"
                    @updated="updatedSounds(sounds)"
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
        console.log(this.sounds); 
    },

   

    onTimeUpdate( event ) {
       console.log(event);
    },

    playSound(sound) {
        
            if ( sound ) {
               
                let audio = new Audio(sound);

                audio.play();

            }
            
        },

    },

    updated() {
        this.sounds = this.$store.state.actualSounds;
    },

	beforeUpdate() {

	},

	mounted() {
        this.sounds = this.$store.state.actualSounds;
        // this.audioBox();
        this.$store.commit('setAudioToManager', this.sounds);
        console.log("mounted audio manager - sound obj : " ,this.soundUrl);
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
