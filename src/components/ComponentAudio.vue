<template>

<div class="audio-container">
    <div v-for="audio in audios" :key='audio.id'>
        <audio 
            controls="controls"
            @timeupdate="onTimeUpdate"
        >
            <source :src=" audioRoute + audio.url "  type="audio/mp3" />
        
        </audio>
    </div>
</div>

</template>
<script>
import { TimelineLite } from "gsap/TweenMax";
import ComponentAudioManager from '@/components/ComponentAudioManager';

export default {

    name: "ComponentAudio",
    
    components: { ComponentAudioManager },
  

	methods: {


    playSound() {
            // console.log('playsouunnd');
    },

    onTimeUpdate( event ) {
        // console.log(event.currentTarget.currentTime);
        this.currentTime = event.target.currentTime;


        this.$store.state.currentTimeAudio = event.target.currentTime;

        this.compareTimeCodes(currentTimeAudio);
        this.checkSounds();



    },


    checkSounds() {
    
			// si cette scene a des callToAction
			if (this.sounds) {

				// on itère
				this.sounds.forEach( oneSound => {
	
					// dès qu'un calltoaction doit être déclenché
					if( this.currentTime >= sounds.audioStartTimeCode ) {

	
							// on play la video
							this.$el.play();

	
							// on met le sound dans le store.actualSounds[]
							this.$store.commit('setAudioToManager', oneSound);
	
	
                        }
							
                        
					}
				);

			}
		
		},


    compareTimeCodes(currentTimeAudio) {

        console.log(currentTimeAudio);
    
			this.audios.forEach( sound => {
				
	
				if ( currentTimeAudio >= sound.audioStartTimeCode ) {
                    
                    // console.log('comparing : ', sound.audioStartTimeCode, ' and ', currentTimeAudio);
                   
                   //playSound();
            
			
				}
			});
		}

    },



	beforeUpdate() {

	},

	mounted() {
    

    this.sounds = this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds;
    console.log('MOUNTED AUDIO MANAGER SOUNDS : ' , this.sounds)
        
       this.minTimeCode = 999;
   
    },



	data() {
		return {
            audios:  this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds,
            audioRoute:  `assets/mp3/`
          

		}
    }
}
    
</script>