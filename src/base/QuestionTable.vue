<template>
    <div class="question-table">

    <el-table 
    :data="tableData" 
    border 
    style="width: 100%"
    @selection-change="handleSelectionChange">
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column prop="name" label="试卷名称">
      </el-table-column>
      <el-table-column prop="address" label="总分">
      </el-table-column>
      <el-table-column prop="address" label="总题目数">
      </el-table-column>
      <el-table-column prop="address" label="要求">
      </el-table-column>
      <el-table-column prop="address" label="限时(秒)">
      </el-table-column>
      <el-table-column prop="address" label="描述">
      </el-table-column>
      <el-table-column prop="address" label="试卷类型">
      </el-table-column>
      <el-table-column prop="address" label="组卷时间">
      </el-table-column>
      <el-table-column prop="address" label="组卷人">
      </el-table-column>
      <el-table-column prop="address" label="是否启用">
      </el-table-column>
      <el-table-column prop="address" label="操作" fixed="right" width="100">
        <template slot-scope="scope">
          <el-button type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
          <router-link to="/exam/set-question">
            <el-button type="text">题目明细</el-button></router-link> 
        </template>
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
  export default {
    name: 'question-table',
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
      }]
        }
    },
    methods: {
        
    handleSelectionChange(val){
        console.log(val)
    }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
