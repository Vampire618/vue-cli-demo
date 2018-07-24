<template>
  <div>
    <home></home>
    <div class="hello">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos cum, consequuntur odit reiciendis provident dignissimos accusantium voluptatem deserunt mollitia quidem, architecto suscipit quis saepe necessitatibus maxime distinctio accusamus corporis minus?</div>
  </div>
</template>

<script>
import home from './home'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/mixin';
.hello{
  @include sc(.45rem, #666);
}
</style>
