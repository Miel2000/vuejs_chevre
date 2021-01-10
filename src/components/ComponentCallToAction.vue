<!-- Principe : -->
<!-- Quand le store.state.actualCalToActions[] contient qqch -->
<!-- ce qqch génère automatiquement l'apparition du template ci-dessous -->
<!-- ce qqch étant un array, on itère (v-for) sur celui-ci pour afficher tous les éléments qui le composent -->


<!-- ° ° ° ° ° ° ° ° ° :class="{ active: this.$store.state.actualCallToActions.length !== 0 }" ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>
<div>
	<div class="ctas-container">

		<div>
        <button @click="ctaClick(ctasInfos, $event)">	{{ctasInfos.text}}</button>
		</div>

	</div>
	</div>
</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>
export default {
  name: "ComponentCallToAction",

  props: {
    ctasInfos: {
      type: Object,
      required: true,
    },
  },

  methods: {
    // methodes des actions reçu (mana, arme, etc...)
    ctaClick(cta, event) {
      let target = event.currentTarget;

      switch (cta.type) {
        case "clickOnMana":
          this.bounceOnClick(target);

          this.playManaSound(cta.path);

          this.$store.commit("addMana", 12);

          this.checkManaAmount();

          break;
        case "dodge": {
          if (cta.id == "esquive_fleche") {
            console.log(cta.id);
            this.$store.commit("switchFleche", true);
          }
          if (cta.id == "esquive_chat") {
            console.log(cta.id);
            this.$store.commit("switchChat", true);
          }
        }
      }
    },

    bounceOnClick(target) {
      if (target) {
        target.classList.add("clickActive");

        setTimeout(() => {
          target.classList.remove("clickActive");
        }, 100);
      }
    },

    playManaSound(sound) {
      if (sound) {
        let audio = new Audio(sound);

        audio.play();
      }
    },

    checkManaAmount() {
      // quand le mana est suffisant
      if (this.$store.state.mana > 150) {
        // on rerend le player interactif :
        this.$store.commit("setPlayerInteractive", true);

        // on refait play de la vidéo qui avait été .pause() dans le ComponentVideo ( lors du remplissage de $store.state.actualCallToActions[] )
        // grâce à un event qui est écouté par un v-on sur l'instanciation du ComponentCallToAction dans la Scene.vue
        // (et dont le handler déclenchera un .play() sur la vidéo)
        this.$emit("playAfterCta", "weshhh");

        // et ici, pour l'instant, on vide totalement le $store.state.actualCallToActions
        // mais cette logique est amenée à se complexifier puisque potentiellement plusieurs cta pourraient apparaitre
        // et les règles de play/pause et de click sur les cta pourraient être différentes
        this.$store.commit("resetCallToActions");
      }
    },
  },

  beforeUpdate() {},

  mounted() {
    console.log("dans le cta mounted :", this.ctasInfos);
  },
};
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">
.ctas-container {
  --animDurationSlow: 1s;
  --animDurationQuick: 0.3s;

  height: 100%;
  width: 0%;

  transition: width 2s;

  > * {
    position: relative;
    bottom: 0;
    opacity: 1;
    transform: scale(1);

    transition: opacity var(--animDurationQuick),
      bottom var(--animDurationQuick), transform var(--animDurationQuick);

    &.clickActive {
      transform: scale(1.9);
      bottom: 45px;
      opacity: 0.5;
    }
  }

  img,
  .potion_mana {
    width: 0%;
    transition: width --animDurationSlow;
  }

  &.active {
    width: 250px;

    img {
      width: 100%;
    }

    .potion_mana {
      width: 100%;
    }
  }
}
</style>
