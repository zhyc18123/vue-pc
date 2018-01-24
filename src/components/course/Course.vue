<template>
  <div class="student">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="">
        <el-input v-model="formInline.user" placeholder="输入课程名称搜索"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button type="primary" @click="$router.push('/course/add-course')">新增课程</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="序号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="课程名称">
      </el-table-column>
      <el-table-column prop="address" label="邀请码">
      </el-table-column>
      <el-table-column prop="address" label="应用区域">
      </el-table-column>
      <el-table-column prop="address" label="操作" fixed="right" width="250">
        <template slot-scope="scope">
          <el-button type="text">查看</el-button>
          <el-button type="text">编辑</el-button>
          <el-button type="text">重新生成邀请码</el-button>
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
