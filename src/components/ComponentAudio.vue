<template>

    <div v-if="audioInfos" class="audio-container">
         
            <audio 
                controls="controls"
                @timeupdate="onTimeUpdate"
            >
                <source :src="'/assets/mp3/' + audioInfos.url"/>
            
            </audio>
    </div>
  

</template>
<script>

export default {

    name: "ComponentAudio",
    
    components: { 
        
    },

    props: {
        audioInfos: {
            type: Object,
            required: true
        },
     
    },

    data() {
		return {
   
		}
    },

	beforeUpdate() {

	},

	mounted() {
    
      console.log(this.audio);
        
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


            // this.compareTimeCodes();
            // this.checkSounds();

        },


       	compareTimeCodes(currentTimeVideo, timeCodeToTrigger, audio) {
	
			if ( currentTimeVideo >= timeCodeToTrigger ) {

				console.log("weh on emit LAUDIO");
			
				this.$emit("an-audio-is-sent", audio);
				// console.log('dans la compare tiemcode',audio);

				this.alreadySent.push(audio.id);
				


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