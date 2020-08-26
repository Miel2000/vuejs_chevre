<template>

    <div class="audio-container">
       
            <audio 
                controls="controls"
                @timeupdate="onTimeUpdate"
                autoplay
            >
                <source :src="'/' + audioRoute + audio.url"  type="audio/wav" />
            
            </audio>
    </div>
  

</template>
<script>
import { TimelineLite } from "gsap/TweenMax";
import ComponentAudioManager from '@/components/ComponentAudioManager';

export default {

    name: "ComponentAudio",
    
    components: { ComponentAudioManager },

    props: ['audio'],
  

	methods: {


    playSound() {
            // console.log('playsouunnd');
    },

    onTimeUpdate( event ) {
       console.log(event.currentTarget.currentTime);
        this.currentTime = event.target.currentTime;


        this.$store.state.currentTimeAudio = event.target.currentTime;

        this.compareTimeCodes();
        this.checkSounds();



    },


    checkSounds() {
    
			// si cette scene a des callToAction
			if (this.sounds) {

				// on itère
				this.sounds.forEach( oneSound => {
	
					// dès qu'un calltoaction doit être déclenché
					if( this.currentTime >= this.sounds.audioStartTimeCode ) {

	
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

        console.log('currentTimeAudio',event.currentTarget.currentTime);
    
			this.audios.forEach( sound => {
                console.log('audioStartTimecode',sound.audioStartTimeCode)
	
				if ( event.currentTarget.currentTime >= sound.audioStartTimeCode ) {
                    
                    console.log('comparing : ', sound.audioStartTimeCode, ' and ', event.currentTarget.currentTime);
                   
                   //playSound();
            
			
				}
			});
		}

    },

    data() {
		return {
            audios:  this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds,
            audioRoute:  `assets/mp3/`
          

		}
    },



	beforeUpdate() {

	},

	mounted() {
    

    this.sounds = this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds;
    console.log('MOUNTED AUDIO MANAGER SOUNDS : ' , this.sounds)
        
    this.minTimeCode = 999;
   
    },




}
    
</script>