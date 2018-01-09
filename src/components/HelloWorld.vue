<template>
  <div class="hello">
      hello word
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    created() {
  	    this.$router.push('/banner/27')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~assets/scss/mixin";
    .hello{
        font-size: 36px/$ppr;
    }
</style>
