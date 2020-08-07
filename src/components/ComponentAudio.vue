<template>
<div class="scene-container">
    <audio 
    controls="controls"
    @timeupdate="onTimeUpdate" 
    >

    <source :src=audioUrl type="audio/wav" />
   
    </audio>
</div>

</template>
<script>
import { TimelineLite } from "gsap/TweenMax";

export default {

	name: "ComponentAudio",

	methods: {


    playSound() {
            console.log('playsouunnd');
    },

    onTimeUpdate( event ) {
        // console.log(event.currentTarget.currentTime);
        const currentTimeAudio = event.currentTarget.currentTime;

        this.compareTimeCodes(currentTimeAudio);



    },

    compareTimeCodes(currentTimeAudio) {

        console.log(currentTimeAudio);
    
			this.audios.forEach( sound => {
				
	
				if ( currentTimeAudio >= sound.audioStartTimeCode ) {
                    
                    console.log('comparing : ', sound.audioStartTimeCode, ' and ', currentTimeAudio);
                    //playSound();
			
			
				}
			});
		}

    },

	beforeUpdate() {

	},

	mounted() {
     
       this.minTimeCode = 999;
       this.actualAudioTimeCode = this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].audioStartTimeCode

    },

        //  console.log("AUdio", this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].url);
        //  console.log("AUdio", this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].audioStartTimeCode);
        
	

	data() {
		return {
            audios : this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds,
			audioUrl:  `/assets/mp3/${this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].url}`,
			audioStartTimeCode: `/assets/mp3/${this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].audioStartTimeCode}`,
		

		}
    }
}
    
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">


</style>
