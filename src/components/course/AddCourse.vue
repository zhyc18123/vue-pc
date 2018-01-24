<template>
    <div class="imports">
        <item-head title="新增课程" />
        <el-row class="form-body">
            <el-form ref="form" :rules="rules" :model="form" label-width="180px">
                <el-form-item label="课程名称：" prop="name">
                    <el-col span="8">
                        <el-input v-model="name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="选择课程导师：" prop="name">
                    <el-button type="primary" icon="el-icon-circle-plus-outline" @click="chooseVisible=true">选择课程导师</el-button>
                </el-form-item>
                <el-form-item label="课程简介：" prop="name">
                    <el-col span="15">
                        <el-input type="textarea" :rows="5" placeholder="请输入课程简介" v-model="textarea">
                        </el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="应用区域：" prop="name">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="广州"></el-checkbox>
                        <el-checkbox label="南宁"></el-checkbox>
                        <el-checkbox label="惠州"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="$router.push('/course/add-course-list')">确定</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-row>

        <el-dialog title="选择课程导师" :visible.sync="chooseVisible">

            <el-form ref="form" :model="form" :inline="true">
                <el-form-item prop="name">
                    <el-input v-model="name"></el-input>
                </el-form-item>
                <el-form-item prop="name">

                    <el-select v-model="value" placeholder="请选择科目">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="name">
                    <el-select v-model="value" placeholder="请选择年级">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">搜索</el-button>
                </el-form-item>
            </el-form>
            <el-table 
            class="choose-table"
            :data="gridData" 
            border 
            @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
            <el-form>
                <el-form-item>
                    <el-button type="primary">确定</el-button>
                    <el-button type="primary">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
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
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            chooseVisible: false,
            gridData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            textarea: '',
            name: '',
            checkList: ['广州'],
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        handleSelectionChange(val) {
            console.log(val)
        },
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
.choose-table
    margin-bottom 20px
</style>
