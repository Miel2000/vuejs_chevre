<template>
<div>
  
    <div v-if="audioInfos.url" class="audio-container">
       <p>coucou audio</p>
         
            <audio   
                autoplay
                controls 
                >
                <source :src="'/assets/mp3/' + audioInfos.url"/>
            
            </audio>
    </div>

</div>
</template>
<script>
export default {
  name: "ComponentAudio",

  components: {},

  props: {
    audioInfos: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },


  mounted() {
    console.log('audio qui monte yep')
  },

  methods: {},
};
</script>
