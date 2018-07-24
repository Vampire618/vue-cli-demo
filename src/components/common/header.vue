<template>
  <div class="header">
    <div class="header-container">
      <div class="header-nav">header compo</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headTop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/mixin';
.header{
  @include wh(auto,40px);
  background: $header;
  @include sc(12px,#b0b0b0);
}
.header-container{
  margin: 0 auto;
  width: 1226px;
}
</style>
