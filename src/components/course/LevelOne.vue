<template>
    <div class="level-one">
        <div class="l-item">
            <div class="l-label">
                <i>*</i>课程简介
            </div>
            <editor id="desc" />
        </div>
        <div class="l-item">
            <div class="l-label">
                此课程适用人群
            </div>
            <editor id="suit" />
        </div>
        <div class="l-item">
            <div class="l-label">
                此课程所需时间
            </div>
            <editor id="costTime" />
        </div>
        <div class="l-item">
            <div class="l-label">
                课程作业
            </div>
            <editor id="homework" />
        </div>
        <div class="l-item">
            <div class="l-label">
                如何通过该课程
            </div>
            <editor id="howPass" />
        </div>
        <div class="l-item">
            <div class="l-label">
                通过该课程可获得
            </div>
            <editor id="getWhat" />
        </div>
        <div class="l-btn">
            <el-button type="primary">确定</el-button>
            <el-button>取消</el-button>
        </div>
    </div>
</template>

<script>
import Editor from 'base/Editor'
export default {
    name: 'level-one',
    components: {
        Editor
    }
}
</script>

<style lang="stylus" scoped>
.level-one
    padding 30px
    .l-item
        margin-bottom 20px
    .l-label
        margin-bottom 10px
        position relative
        i 
            color red
            position absolute
            top -3px
            left -13px
</style>
