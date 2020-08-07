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

        if(this.actualAudioTimeCode > currentTimeAudio){
            // this.playSound(); 
            console.log(this.actualAudioTimeCode + ' > ' + currentTimeAudio );
             this.playSound()
  
        }

    },

    },

	beforeUpdate() {

	},

	mounted() {

       

       this.actualAudioTimeCode = this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].audioStartTimeCode
       console.log('.....',this.actualAudioTimeCode);
 

        //  console.log("AUdio", this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].url);
        //  console.log("AUdio", this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].audioStartTimeCode);
        
	
		
	},

	data() {
		return {
			audioUrl:  `/assets/mp3/${this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].url}` ,
			audioStartTimeCode: `/assets/mp3/${this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].audioStartTimeCode}`,
			isPaused: this.isPaused

		}
    }
}
    
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">


</style>
