<template>
    <div class="set-question">
        <item-head title="题目明细" />
        <el-form>
            <el-form-item>
        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="chooseVisible=true">新增题目</el-button>
            </el-form-item>
        </el-form>

  <el-table
    :data="tableData5"
    border
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
    label="编号"
    width="50"
    type="index">
    </el-table-column>
    <el-table-column
      label="题目"
      prop="id">
    </el-table-column>
    <el-table-column
      label="分值"
      prop="name">
    </el-table-column>
    <el-table-column
      label="题目类型"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button type="text">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-row class="q-num">
      试卷总分<em>100</em>分，目前已配置<em>50</em>分；题目总数<em>10</em>道，目前已配置<em>5</em>道；
  </el-row>

                    <el-button type="primary">确定</el-button>
                    <el-button>取消</el-button>

        <el-dialog title="选择试卷题目" :visible.sync="chooseVisible">

            <el-form ref="form" :inline="true">
                <el-form-item prop="name">
                    <el-select v-model="value" placeholder="适用类型">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="name">
                    <el-select v-model="value" placeholder="题目类型">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">搜索</el-button>
                </el-form-item>
            </el-form>
            <question-table/>
            <el-form class="s-btn">
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
import Editor from 'base/Editor'
import QuestionTable from 'base/QuestionTable'
export default {
    name: 'imports',
    components: {
        ItemHead,
        Editor,
        QuestionTable
    },
    data() {
        return {
            value:'',
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }],
        chooseVisible:false,
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
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
.inline-input
    width 200px !important
.param-div
    padding 20px
    border 1px dashed #409EFF
.q-num
    margin 20px 0
    em
        color red
        font-style normal
.s-btn
    margin-top 20px
</style>
