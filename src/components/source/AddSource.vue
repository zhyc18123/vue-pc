<template>
    <div class="add-source">
        <item-head title="新增资源" />
        <el-row class="form-body">
            <el-form ref="form" :rules="rules" label-width="180px">
                <el-form-item label="资源类型：" prop="name">
                    <el-radio v-model="radio" label="1">视频</el-radio>
                    <el-radio v-model="radio" label="1">音频</el-radio>
                    <el-radio v-model="radio" label="1">作业</el-radio>
                    <el-radio v-model="radio" label="1">作业(自评)</el-radio>
                    <el-radio v-model="radio" label="1">文件</el-radio>
                    <el-radio v-model="radio" label="1">试卷</el-radio>
                    <el-radio v-model="radio" label="1">感想</el-radio>
                </el-form-item>
                <el-form-item label="名称：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="描述：" prop="name">
                    <el-col :span="20">
                        <editor id="source-desc"/>
                    </el-col>
                </el-form-item>
                <el-form-item label="要求：" prop="name">
                    <el-col :span="20">
                        <editor id="source-require"/>
                    </el-col>
                </el-form-item>
                <el-form-item label="来源：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="上传文件：" prop="name">
                    <el-col :span="8">
                        <upload/>
                    </el-col>
                </el-form-item>
                <el-row class="source-message">
                <el-form-item label="文件大小：" prop="name">
                    60M
                </el-form-item>
                <el-form-item label="类型图标：" prop="name">
                    <upload/>
                </el-form-item>
                <el-form-item label="时长：" prop="name">
                    101秒
                </el-form-item>
                
                <el-form-item label="封面图片：" prop="name">
                    <upload/>
                </el-form-item>
                </el-row>
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
import Editor from 'base/Editor'
import Upload from 'base/Upload'
export default {
    name: 'imports',
    components: {
        ItemHead,
        Editor,
        Upload
    },
    data() {
        return {
            checkList: ['01', '02'],
            name: '',
            radio: '',
            imageUrl: '',
            checkList: ['语文'],
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
.source-message
    border 1px dashed #409eff
    padding 20px
    margin 0px 10% 20px
</style>
