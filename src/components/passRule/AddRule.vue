<template>
    <div class="imports">
        <item-head title="新增学员" />
        <el-row class="form-body">
            <el-form ref="form" :rules="rules" label-width="180px">
                <el-form-item label="规则名称：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="是否启用：" prop="name">
                    <el-radio v-model="radio" label="1">是</el-radio>
                    <el-radio v-model="radio" label="1">否</el-radio>
                </el-form-item>
                <el-form-item label="规则适用类型：" prop="name">
                    <el-radio v-model="radio" label="1">视频</el-radio>
                    <el-radio v-model="radio" label="1">音频</el-radio>
                </el-form-item>
                <el-form-item label="参数：" prop="name">
                    <el-col :span="20" class="param-div">
                        <span>时长：</span>
                        <el-input class="inline-input" v-model="name"></el-input>% (填写数字)
                    </el-col>
                    <el-col :span="20" class="param-div">

                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="01">

                                <span>触发动作</span>
                                <!--<el-input class="inline-input" v-model="name"></el-input>% (填写数字)-->
                            </el-checkbox><br/>
                            <!--<el-checkbox label="02">

                                <span>分数达标：</span>
                                <el-input class="inline-input" v-model="name"></el-input> (填写数字0~100)
                            </el-checkbox><br/>
                            <el-checkbox label="03">

                                <span> &nbsp;&nbsp;&nbsp;完成率：</span>
                                <el-input class="inline-input" v-model="name"></el-input>% (填写数字0~100)
                            </el-checkbox><br/>-->
                        <el-checkbox label="04">

                            <span>触发评语</span>
                            <!--<el-input class="inline-input" v-model="name"></el-input>% (填写数字)-->
                        </el-checkbox><br/>
                        </el-checkbox-group>
                    </el-col>
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
