<template>
    <div>
       <div v-for="audioInfos in audiosCollection" :key='audioInfos.id'>
            <ComponentAudio
                :audio-infos-object="audioInfos"
            />
        </div>
    </div>

</template>
<script>

import ComponentAudio from '@/components/ComponentAudio';

export default {

    name: "ComponentAudioManager",
    
    components: { ComponentAudio },

    
	data() {
		return {
			audiosCollection: this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds,
		}
    },

	methods: {

    audioBox() {
        // console.log(this.sounds); 
    },

   

    // onTimeUpdate( event ) {
    // //    console.log(event);
    // },

   

    },

    updated() {
        this.sounds = this.$store.state.actualSounds;
    },

	beforeUpdate() {

	},

	mounted() {
        this.sounds = this.$store.state.actualSounds;
     
        this.sounds.forEach(sound => {
            console.log('dans le foreach, un sound = ', sound)

            this.$store.commit('setAudioToManager', sound);
                
            });
        console.log("mounted audio manager - sound obj : " ,this.soundUrl);
        //  this.$store.commit('setAudioToManager', this.soundUrl);

    },

        //  console.log("AUdio", this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].url);
        //  console.log("AUdio", this.$store.state.storyMap.videos[this.$route.params.videoId].components.sounds[0].audioStartTimeCode);
        
	

}
    
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">


</style>
