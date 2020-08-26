<template>

    <div v-if="audio" class="audio-container">
         
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
        // this.checkSounds();



    },


    // checkSounds() {
    
	// 		// si cette scene a des sounds
	// 		if (this.sounds) {

	// 			// on itère
	// 			this.sounds.forEach( oneSound => {
	
	// 				// dès qu'un calltoaction doit être déclenché
	// 				if( this.currentTime >= this.sounds.audioStartTimeCode ) {

	
	// 						// on play la video
	// 						this.$el.play();

	
	// 						// on met le sound dans le store.actualSounds[]
	// 						this.$store.commit('setAudioToManager', oneSound);
	
	
    //                     }
							
                        
	// 				}
	// 			);

	// 		}
		
	// 	},


    compareTimeCodes(currentTimeAudio) {

        console.log('currentTimeAudio',event.currentTarget.currentTime);
    
			
                console.log('audioStartTimecode',   this.audio.audioStartTimeCode)
	
				if ( event.currentTarget.currentTime >=    this.audio.audioStartTimeCode ) {
                    
                    console.log('comparing : ',    this.audio.audioStartTimeCode, ' and ', event.currentTarget.currentTime);
                   // attraper le lecteur et lui dire .play(sound);
			
				}
			
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

  
    console.log('MOUNTED AUDIO SOUND : ' , this.audio.audioStartTimeCode);
    
    // this.audio permet d'attraper les infos envoyées du AudioManager,
    // il va falloir coder la logique du componentAudio avec ces informations là.
     this.audio.id
     this.audio.audioStartTimeCode
     this.audio.autoPlay
     this.audio.fadeInStart
     this.audio.fadeInStop
     this.audio.url

    

    this.minTimeCode = 999;
   
    },




}
    
</script>