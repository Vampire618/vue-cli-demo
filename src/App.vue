<template>
  <div id="app">
    <headTop></headTop>
  </div>
</template>

<script>
import headTop from 'components/common/header'

export default {
  name: 'app',
  components: {
    headTop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
