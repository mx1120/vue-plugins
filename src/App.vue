<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "assets/scss/reset";
    @import "assets/scss/mixin";
    #app{
        height: 100vh;
    }
</style>
