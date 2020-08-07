<template>
<div class="audio-container">
    <audio 
    controls="controls"
    @timeupdate="onTimeUpdate" 
    id="audioPleya"
    >

    <source :src="audioUrl" type="audio/wav" />
   
    </audio>
</div>
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

        const audioPlayer = document.getElementById('audioPleya');

    

        	this.audios.forEach( sound => {
				
                if(sound.id){
                    if(sound.autoPlay) {
                       
                        audioPlayer.setAttribute('autoplay', 'true');
                        console.log('auto play set a true :',  sound.autoPlay);
                        console.log(sound.id);
                       
                    } else {
                         
                        audioPlayer.setAttribute('autoplay', 'false');
                        console .log('auto play set a false :',  sound.autoPlay);
                    }
                    
                }
		
			});
     
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