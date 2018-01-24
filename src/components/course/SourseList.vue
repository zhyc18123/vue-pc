<template>
    <div class="sourse-list">
        <div v-if="type==='01'">
            <el-form>
            <el-col :span="10">
                <el-form-item>
                    <el-input></el-input>
                </el-form-item>
            </el-col>
                    <el-button type="primary" class="search">搜索</el-button>
            </el-form>
        <el-table
        
    ref="singleTable"
    border
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange">
    <el-table-column
      type="index"
      width="50"
      label="序号">
    </el-table-column>
    <el-table-column
      property="date"
      label="编号"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="名称"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="类型">
    </el-table-column>
    <el-table-column
      property="address"
      label="时长">
    </el-table-column>
    <el-table-column
      property="address"
      label="描述">
    </el-table-column>
    <el-table-column
      property="address"
      label="要求">
    </el-table-column>
    <el-table-column
      property="address"
      label="添加日期">
    </el-table-column>
    <el-table-column
      property="address"
      label="来源">
    </el-table-column>
    <el-table-column
      property="address"
      label="操作者">
    </el-table-column>
  </el-table>
    <pagination :total="33" />
    <el-button type="primary">确定</el-button>
    <el-button>取消</el-button>
  </div>
        <div v-if="type==='02'">
            <el-form>
            <el-col :span="10">
                <el-form-item>
                    <el-input></el-input>
                </el-form-item>
            </el-col>
                    <el-button type="primary" class="search">搜索</el-button>
            </el-form>
        <el-table
    ref="singleTable"
    border
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange">
    <el-table-column
      type="index"
      width="50"
      label="序号">
    </el-table-column>
    <el-table-column
      property="date"
      label="编号"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="名称"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="类型">
    </el-table-column>
    <el-table-column
      property="address"
      label="时长">
    </el-table-column>
    <el-table-column
      property="address"
      label="描述">
    </el-table-column>
    <el-table-column
      property="address"
      label="要求">
    </el-table-column>
    <el-table-column
      property="address"
      label="添加日期">
    </el-table-column>
    <el-table-column
      property="address"
      label="来源">
    </el-table-column>
    <el-table-column
      property="address"
      label="操作者">
    </el-table-column>
  </el-table>
    <pagination :total="33" />
    <el-button type="primary">确定</el-button>
    <el-button>取消</el-button>
  </div>
        <div v-if="type==='03'">
            <el-form>
            <el-col :span="10">
                <el-form-item>
                    <el-input></el-input>
                </el-form-item>
            </el-col>
                    <el-button type="primary" class="search">搜索</el-button>
            </el-form>
        <el-table
    ref="singleTable"
    border
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange">
    <el-table-column
      type="index"
      width="50"
      label="序号">
    </el-table-column>
    <el-table-column
      property="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="地址">
    </el-table-column>
  </el-table>
    <pagination :total="33" />
    <el-button type="primary">确定</el-button>
    <el-button>取消</el-button>
  </div>
        <div v-if="type==='04'">
            <el-form>
            <el-col :span="10">
                <el-form-item>
                    <el-input></el-input>
                </el-form-item>
            </el-col>
                    <el-button type="primary" class="search">搜索</el-button>
            </el-form>
        <el-table
    ref="singleTable"
    border
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange">
    <el-table-column
      type="index"
      width="50"
      label="序号">
    </el-table-column>
    <el-table-column
      property="date"
      label="试卷编号"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="名称"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="类型">
    </el-table-column>
    <el-table-column
      property="address"
      label="总分">
    </el-table-column>
    <el-table-column
      property="address"
      label="描述">
    </el-table-column>
    <el-table-column
      property="address"
      label="要求">
    </el-table-column>
    <el-table-column
      property="address"
      label="考试时长">
    </el-table-column>
    <el-table-column
      property="address"
      label="总题目数">
    </el-table-column>
    <el-table-column
      property="address"
      label="添加日期">
    </el-table-column>
  </el-table>
    <pagination :total="33" />
    <el-button type="primary">确定</el-button>
    <el-button>取消</el-button>
  </div>
        <div v-if="type==='05'">
            <el-form>
            <el-col :span="10">
                <el-form-item>
                    <el-input></el-input>
                </el-form-item>
            </el-col>
                    <el-button type="primary" class="search">搜索</el-button>
            </el-form>
        <el-table
    ref="singleTable"
    border
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange">
    <el-table-column
      type="index"
      width="50"
      label="序号">
    </el-table-column>
    <el-table-column
      property="date"
      label="编号"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="名称"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="描述">
    </el-table-column>
    <el-table-column
      property="address"
      label="要求">
    </el-table-column>
    <el-table-column
      property="address"
      label="添加日期">
    </el-table-column>
  </el-table>
    <pagination :total="33" />
    <el-button type="primary">确定</el-button>
    <el-button>取消</el-button>
  </div>
        <div v-if="type==='06'">
            <el-form>
            <el-col :span="10">
                <el-form-item>
                    <el-input></el-input>
                </el-form-item>
            </el-col>
                    <el-button type="primary" class="search">搜索</el-button>
            </el-form>
        <el-table
    ref="singleTable"
    border
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange">
    <el-table-column
      type="index"
      width="50"
      label="序号">
    </el-table-column>
    <el-table-column
      property="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="地址">
    </el-table-column>
  </el-table>
    <pagination :total="33" />
    <el-button type="primary">确定</el-button>
    <el-button>取消</el-button>

  </div>
    </div>
</template>

<script>
import Pagination from 'base/Pagination'
  export default {
    name: 'sourse-list',
    props: ['type'],
    components: {
        Pagination
    },
    data () {
        return {
            
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
        }
    },
    methods: {
        
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
          console.log(val)
        this.currentRow = val;
      }
    }
  }
</script>

<style lang="stylus" scoped>
.search 
    margin-left 20px
</style>
