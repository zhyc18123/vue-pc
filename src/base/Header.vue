<template>
    <div class="header">
      <span class="cart"><router-link to="/main/goodsOrder">我的购物车 &nbsp;|&nbsp;</router-link></span>
      <span class="order"><router-link to="/main/user/buy">&nbsp;&nbsp;我的订单 &nbsp;|&nbsp;</router-link></span>
      <span class="info"><router-link to="/info">关于我们</router-link></span>
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
</style>
