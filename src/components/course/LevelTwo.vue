<template>
    <div class="level-two">
        <div class="l-item">
            <div class="l-label">
                <i>*</i>内容概况
            </div>
            <editor id="content" />
        </div>
        <!--<div>
            <el-button type="primary" icon="el-icon-circle-plus-outline" @click="$emit('chooseSourse')">选择课程资源</el-button>
        </div>-->
        <!--<div class="config">
            <h3>过关奖励配置</h3>
            <el-form>
                <el-form-item label-width="180px" label="通关可得积分：">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
        </div>-->
        <div class="config">
            <h3>课程绩点配置</h3>
            <el-form>
                <el-form-item label-width="180px" label="课程总绩点：">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
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
    name: 'level-two',
    components: {
        Editor
    }
}
</script>

<style lang="stylus" scoped>
.level-two
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
    .config
        margin 30px 0
        h3 
            line-height 60px
            text-decoration underline

</style>
