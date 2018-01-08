<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import {getQuestionList} from 'service/test'
import {mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js '
    }
  },
  created () {
   this.questionList({subjectId:20}); 
  },
  methods: {
    ...mapActions({
      questionList:'questionList'
    }),
  //  async getQuestion(){
  //   let {data}=await getQuestionList({subjectId:20});
  //   console.log(data)
  //  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~assets/stylus/variable.styl'
@import '~assets/stylus/mixin.styl'
  .hello
    // height 1000px
    h1
      font-size $font-size-large
      // no-wrap()
      display inline-block
      // width 80px
</style>

