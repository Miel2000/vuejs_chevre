<template>

    <ComponentAudio />

</template>
<script>
import { TimelineLite } from "gsap/TweenMax";
import ComponentAudio from '@/components/ComponentAudio';

export default {

    name: "ComponentAudioManager",
    
    components: { ComponentAudio },

	methods: {


    playSound() {
            console.log('playsouunnd');
    },

    onTimeUpdate( event ) {
       
    },

  
    },



	beforeUpdate() {

	},

	mounted() {

    
    },

        //  console.log("AUdio", this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].url);
        //  console.log("AUdio", this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].audioStartTimeCode);
        
	

	data() {
		return {
        

		}
    }
}
    
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">


</style>
