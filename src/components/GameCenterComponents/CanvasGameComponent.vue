<template>
    <div>
        <div :id="containerId" v-if="downloaded" />
        <div class="placeholder" v-else>
            Downloaaaad... !
        </div>
    </div>
</template>

<script>
export default {
  name: "CanvasGameComponent",
  data() {
    return {
      downloaded: false,
      gameInstance: null,
      containerId: "game-container",
    };
  },

  async mounted() {
    const game = await import("@/components/GameCenterComponents/config/game");
    this.downloaded = true;
    this.$nextTick(() => {
      this.gameInstance = game.launch(this.containerId);
    });
  },

  destroyed() {
    this.gameInstance.destroy(false);
  },
};
</script>

<style lang="scss" scoped>
</style>
