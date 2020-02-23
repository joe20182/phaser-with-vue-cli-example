<template>
  <div id="phaser-in-store">
    <label>
      Color:
      <input type="color" value="#0000ff" @input="setColor($event.target)" />
    </label>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "PhaserInStroe",
  mounted() {
    this.initializeGame(this.$el)
  },
  beforeDestroy() {
    this.destroyGame()
  },
  methods: {
    ...mapActions('phaserInStore', [
      'destroyGame',
      'initializeGame',
      'setColor'
    ])
  }
}
</script>
