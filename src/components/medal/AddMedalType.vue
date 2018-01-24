<template>
    <div class="add-medal-type">
        <item-head title="新增勋章类别" />
        <el-row class="form-body">
            <el-form ref="form" :rules="rules" label-width="180px">
                <el-form-item label="勋章类别：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="是否启用：" prop="name">
                    <el-radio v-model="radio" label="1">是</el-radio>
                    <el-radio v-model="radio" label="1">否</el-radio>
                </el-form-item>
                <el-form-item label="选择类型：" prop="name">
                    <el-radio v-model="radio" label="1">视频</el-radio>
                    <el-radio v-model="radio" label="1">音频</el-radio>
                </el-form-item>
                <el-form-item label="描述：" prop="name">
                    <el-col :span="20">
                        <el-input type="textarea" v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">确定</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
                </el-form-item>
            </el-form>
        </el-row>
    </div>
</template>

<script>
import ItemHead from 'base/ItemHead'
export default {
    name: 'imports',
    components: {
        ItemHead
    },
    data() {
        return {
            checkList: ['01', '02'],
            name: '',
            radio: '',
            imageUrl: '',
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {

    }
}
</script>

<style lang="stylus" scoped>
.form-body
    background white
    padding-top 20px
.inline-input
    width 200px !important
.param-div
    padding 20px
    border 1px dashed #409EFF
</style>
