<template>
    <div class="header">
    <!-- logo -->
    <div class="logo">
      <router-link to="/index" tag="a">
        <img src="../assets/img/logo.svg" alt="">
      </router-link>
    </div>
    <div class="head-body">

    </div>
    </div>
</template>

<script>
  export default {
    name: 'v-header'
  }
</script>

<style lang="stylus" scoped>
.header
  height 80px
  background linear-gradient(90deg,#009fd7,#01c8c1)
  .logo
    background white
    width 240px
    height 100%
    border-bottom 1px solid #e6e6e6
    img 
      width 132px
      height 48px
      margin-left 54px
      margin-top 16px
  .head-body
    margin-right 240px
  div
    display inline-block

</style>
