<template>
    <div>
      <div class="papillon-game">
          <papillon-game></papillon-game>
      </div>
    </div>
</template>

<script>
import PapillonGame from "../components/GameCenterComponents/PapillonGame.vue";
export default {
  components: { PapillonGame },
};
</script>

<style  scoped>
.papillon-game {
  margin: 0 auto;
}
</style>
