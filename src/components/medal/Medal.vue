<template>
  <div class="medal">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="$router.push('/medal/add-medal')">新增勋章</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed type="index" label="序号">
      </el-table-column>
      <el-table-column prop="name" label="勋章类别">
      </el-table-column>
      <el-table-column prop="address" label="勋章名称">
      </el-table-column>
      <el-table-column prop="address" label="描述">
      </el-table-column>
      <el-table-column prop="address" label="是否启用">
      </el-table-column>
      <el-table-column prop="address" label="勋章标识">
      </el-table-column>
      <el-table-column prop="address" label="积分">
      </el-table-column>
      <el-table-column prop="address" label="对应图标">
      </el-table-column>
      <el-table-column prop="address" label="操作" fixed="right" width="100">
        <template slot-scope="scope">
          <!--<el-button type="text">查看</el-button>-->
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :total="33" />
  </div>
</template>

<script>
import Pagination from 'base/Pagination'
export default {
  name: 'student',
  components: {
    Pagination
  },
  data() {
    return {
      value6: '',
      formInline: {
        user: '',
        region: ''
      },
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
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
