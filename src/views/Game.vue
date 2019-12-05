<template>
  <div id="game-page">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Game',
  data() {
    return {
      msg: 'test'
    }
  }
}
</script>

<style lang="scss" scoped>
#game-page {
  background-color: #eee;
}
</style>