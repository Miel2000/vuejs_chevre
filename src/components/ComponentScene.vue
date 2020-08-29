<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<template>

  <div class="scene-container">
     

        <div class="video_and_cta">

            <ComponentVideo />

            <ComponentCallToAction v-on:playAfterCta="playAfterCta" />

        </div>

        <ComponentAudioManager/>

        <ComponentChoiceManager />

  </div>

</template>


<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<script>

	import ComponentVideo from '@/components/ComponentVideo';
    import ComponentChoiceManager from '@/components/ComponentChoiceManager';
    import ComponentCallToAction from '@/components/ComponentCallToAction';
    import ComponentHud from '@/components/ComponentHud';
    import ComponentAudioManager from '@/components/ComponentAudioManager';

	export default {

		components: {
            ComponentVideo, 
            ComponentChoiceManager, 
            ComponentCallToAction, 
            ComponentHud, 
            ComponentAudioManager
        },

        props: {

        },
        
        data() {
            return {
                // 
            }
        },

        mounted() {

            console.log("- - - - - wesh c'est bien le code coté lio");

            // update this.route
            this.route = this.$route.params.videoId;

            // on se fait un handler du videoPlayer en local
            this.videoPlayer = this.$children.filter( child => child.$options._componentTag === "ComponentVideo")[0].$el;
            this.audioPlayer = this.$children.filter( child => child.$options._componentTag === "ComponentAudioManager")[0].$el;
    
        },

        methods: {

            playAfterCta( event ) {

                console.log("on a bien recu l event de play after cta ", event);
                this.videoPlayer.play();
                // ici on déléte 
            }
            
        }

    }
    
</script>

<style lang="scss">

    .scene-container {
        width: 70%;
        margin: 0 auto;
        display: block;
    }

    .video_and_cta {

        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>