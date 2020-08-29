<template>
    <div>

        <div class="video_and_cta">

                <ComponentVideo 
                    :video-infos="videoInfos" 
                    @an-action-is-sent="actionHandler"
                />

                <ComponentCallToAction/>
                <!-- v-on:playAfterCta="playAfterCta"  -->

        </div>

        <div
            v-if="computedChoices.length > 0" 
            v-for="choice in computedChoices" 
            :key="choice.id">

            <ComponentOneChoice 
                :choice-infos="choice"
            />

        </div>

        <!-- <ComponentAudioManager/> -->

    </div>
</template>


<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<script>
 
    import ComponentVideo from '@/components/ComponentVideo';
    import ComponentCallToAction from '@/components/ComponentCallToAction';
    import ComponentOneChoice from '@/components/ComponentOneChoice';
    import ComponentAudioManager from '@/components/ComponentAudioManager';

	export default {

		components: {
            ComponentVideo,
            ComponentCallToAction,
            ComponentOneChoice,
            ComponentAudioManager
        },
        
        data() {
            return {
                videoInfos: this.$store.state.videoMap.videos[this.$route.params.videoId],
                choices: [],
            }
        },

        computed: {

            computedChoices(){
                return this.choices;
            }

        },

        mounted() {
            // this.choices = [];
        },

        methods: {

            actionHandler(actionInfos){

                // console.log("hey, je suis le parent, et jai recu un event choice avec : ", actionInfos);
                if(actionInfos.type == "choice"){
                    this.choices.push(actionInfos);
                }

                switch (actionInfos.type) {
                    case "choice":
                        
                        break;

                    case "cta":
                    
                    break;
                
                    default:
                        break;
                }

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