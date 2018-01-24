<template>
    <div class="add-exam">
        <item-head title="新增试卷" />
        <el-row class="form-body">
            <el-form ref="form" :rules="rules" label-width="180px">
                <el-form-item label="试卷类型：" prop="name">
                    <el-radio v-model="radio" label="1">单元测</el-radio>
                    <el-radio v-model="radio" label="1">总测</el-radio>
                </el-form-item>
                <el-form-item label="试卷名称：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="试卷总分：" prop="name">
                    <el-radio v-model="radio" label="1">选择题</el-radio>
                    <el-radio v-model="radio" label="1">填空题</el-radio>
                </el-form-item>
                <el-form-item label="题目数：" prop="name">
                    <el-radio v-model="radio" label="1">交互性题目</el-radio>
                    <el-radio v-model="radio" label="1">小测题</el-radio>
                </el-form-item>
                <el-form-item label="限时(秒)：" prop="name">
                    <el-radio v-model="radio" label="1">是</el-radio>
                    <el-radio v-model="radio" label="1">否</el-radio>
                </el-form-item>
                <el-form-item label="描述：" prop="name">
                    <el-col :span="20">
                        <editor id="xDsc"/>
                    </el-col>
                </el-form-item>
                <el-form-item label="要求：" prop="name">
                    <el-col :span="20">
                        <editor id="xRequire"/>
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
import Editor from 'base/Editor'
export default {
    name: 'imports',
    components: {
        ItemHead,
        Editor
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

        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
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
