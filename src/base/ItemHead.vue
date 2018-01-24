<template>
    <div class="item-head">
        <h5>{{title}}</h5>
        <el-button type="primary" size="small" class="back" @click="back">返回</el-button>
    </div>
</template>

<script>
  export default {
    name: 'item-head',
    props: ['title'],
    methods: {
        back(){
            this.$router.go(-1);
        }
    }
  }
</script>

<style lang="stylus" scoped>
.item-head
    height 40px
    line-height 40px
    margin-bottom 2px
    h5
        display inline-block
    .back
        float right 
</style>
