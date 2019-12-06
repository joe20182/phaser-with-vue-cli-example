<template>
  <div id="game-page">
    {{ msg }}
    <button type="button" @click="addCircle">Add circle #{{ circles.length + 1 }}</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { createGame } from "@/utils/circlesCreater";

export default {
  name: "Game",
  data() {
    return {
      game: null,
      msg: "test"
    };
  },
  computed: {
    ...mapState("circles", ["circles"])
  },
  mounted() {
    this.game = createGame(this.$el, this.$store);
  },
  methods: {
    ...mapActions("circles", ["addCircle"])
  },
  beforeDestroy() {
    this.game.destroy();
  }
};
</script>

<style lang="scss" scoped>
#game-page {
  background-color: #eee;
}
</style>
