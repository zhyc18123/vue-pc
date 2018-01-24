<template>
    <div class="choose-sourse">
        <div class="choose-tag">
            <el-tag :color="tag==='01'?tagActiveColor:''" @click.native="tag='01'">视频</el-tag>
            <el-tag :color="tag==='02'?tagActiveColor:''" @click.native="tag='02'">音频</el-tag>
            <el-tag :color="tag==='03'?tagActiveColor:''" @click.native="tag='03'">文件</el-tag>
            <el-tag :color="tag==='04'?tagActiveColor:''" @click.native="tag='04'">试卷</el-tag>
            <el-tag :color="tag==='05'?tagActiveColor:''" @click.native="tag='05'">作业（自评作业)</el-tag>
            <el-tag :color="tag==='06'?tagActiveColor:''" @click.native="tag='06'">作业（提交型作业）</el-tag>
        </div>
        <sourse-list v-if="tag" :type="tag"/>
    </div>
</template>

<script>
import SourseList from './SourseList'
  export default {
    name: 'choose-sourse',
    components: {
        SourseList
    },
    data () {
        return {
            // 01:视频，02:音频，03：文件，04：试卷，05：作业（自评作业),06:作业（提交型作业）
            tag:'01',
            tagActiveColor:'rgba(24,8,255,.3)'
        }
    }
  }
</script>

<style lang="stylus" scoped>
.choose-sourse
    margin-top 20px
    .choose-tag
        margin-bottom 10px
        .el-tag
            cursor pointer
</style>
