<template>
  <div class="student">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="">
        <el-input v-model="formInline.user" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-select v-model="formInline.region" placeholder="任教学段">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-select v-model="formInline.region" placeholder="课程名称">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="加入时间">
        <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="$router.push('/student/add-student')">新增学员</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="$router.push('/student/imports')">批量导入</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="序号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="课程名称">
      </el-table-column>
      <el-table-column prop="address" label="姓名">
      </el-table-column>
      <el-table-column prop="address" label="手机号">
      </el-table-column>
      <el-table-column prop="address" label="性别">
      </el-table-column>
      <el-table-column prop="address" label="毕业学校">
      </el-table-column>
      <el-table-column prop="address" label="任教科目">
      </el-table-column>
      <el-table-column prop="address" label="任教学段">
      </el-table-column>
      <el-table-column prop="address" label="加入时间">
      </el-table-column>
      <el-table-column prop="address" label="账号状态">
      </el-table-column>
      <el-table-column prop="address" label="来源">
      </el-table-column>
      <el-table-column prop="address" label="操作" fixed="right" width="100">
        <template slot-scope="scope">
          <el-button type="text">查看</el-button>
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
