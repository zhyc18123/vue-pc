<template>
    <div class="imports">
        <item-head title="新增学员" />
        <el-row class="form-body">
            <el-form ref="form" :rules="rules"  label-width="180px">
                <el-form-item label="姓名：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="手机号：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="性别：" prop="name">
                    <el-radio v-model="radio" label="1">男</el-radio>
                    <el-radio v-model="radio" label="1">女</el-radio>
                </el-form-item>
                <el-form-item label="地区：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="身份证：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="Email：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="毕业学校：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="专业信息：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="任教科目：" prop="name">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="数学"></el-checkbox>
                        <el-checkbox label="物理"></el-checkbox>
                        <el-checkbox label="化学"></el-checkbox>
                        <el-checkbox label="英语"></el-checkbox>
                        <el-checkbox label="语文"></el-checkbox>
                        <el-checkbox label="地理"></el-checkbox>
                        <el-checkbox label="生物"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="任教学段：" prop="name">
                    <el-radio v-model="radio" label="小学段"></el-radio>
                    <el-radio v-model="radio" label="初中段"></el-radio>
                    <el-radio v-model="radio" label="高中段"></el-radio>
                </el-form-item>
                <el-form-item label="个人标签：" prop="name">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="活泼生动"></el-checkbox>
                        <el-checkbox label="严肃认真"></el-checkbox>
                        <el-checkbox label="幽默风趣"></el-checkbox>
                        <el-checkbox label="博学多才"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="个人简介：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="初始密码：" prop="name">
                    <el-col :span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="上传头像：" prop="name">
                    <el-col :span="8">
                        <upload/>
                    </el-col>
                </el-form-item>
                <el-form-item label="账号状态：" prop="name">
                    <el-radio v-model="radio" label="1">正常</el-radio>
                    <el-radio v-model="radio" label="1">禁用</el-radio>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">确定</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-row>
    </div>
</template>

<script>
import ItemHead from 'base/ItemHead'
import Upload from 'base/Upload'
export default {
    name: 'imports',
    components: {
        ItemHead,
        Upload
    },
    data() {
        return {
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
</style>
