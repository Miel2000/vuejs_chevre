<template>

    <div v-if="audioInfosObject" class="audio-container">
         
            <audio 
                controls="controls"
                @timeupdate="onTimeUpdate"
            >
                <source :src="'/' + audioRoute + audioInfosObject.url"/>
            
            </audio>
    </div>
  

</template>
<script>
import ComponentAudioManager from '@/components/ComponentAudioManager';

export default {

    name: "ComponentAudio",
    
    components: { 
        ComponentAudioManager 
    },

    props: {
        audioInfosObject: {
            type: Object,
            required: true
        }
    },

    data() {
		return {
            audioRoute:  `assets/mp3/`,
            minTimeCode: 999
		}
    },

	beforeUpdate() {

	},

	mounted() {
    
        console.log('MOUNTED AUDIO SOUND : ' , this.audioInfosObject.audioStartTimeCode);
        
        // this.audio permet d'attraper les infos envoyées du AudioManager,
        // il va falloir coder la logique du componentAudio avec ces informations là.
        // this.audioInfosObject.id
        // this.audioInfosObject.audioStartTimeCode
        // this.audioInfosObject.autoPlay
        // this.audioInfosObject.fadeInStart
        // this.audioInfosObject.fadeInStop
        // this.audioInfosObject.url

    },
  

	methods: {

        playSound() {
                // console.log('playsouunnd');
        },

        onTimeUpdate( event ) {
            // console.log(event.currentTarget.currentTime);

            this.currentTime = event.target.currentTime;

            this.$store.state.currentTimeAudio = event.target.currentTime;

            this.compareTimeCodes();
            // this.checkSounds();



        },

        compareTimeCodes(currentTimeAudio) {

        // console.log('currentTimeAudio',event.currentTarget.currentTime);
    
            
        // console.log('audioStartTimecode', this.audio.audioStartTimeCode)

        if ( event.currentTarget.currentTime >= this.audioInfosObject.audioStartTimeCode ) {
            
            // console.log('comparing : ', this.audio.audioStartTimeCode, ' and ', event.currentTarget.currentTime);
            // attraper le lecteur et lui dire .play(sound);
    
            }
            
        }

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


    

    




}
    
</script>