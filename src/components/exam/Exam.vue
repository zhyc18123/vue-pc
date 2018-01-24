<template>
  <div class="exam">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="">
                        <el-input v-model="name" placeholder="请输入试卷名称"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-select v-model="formInline.region" placeholder="是否启用">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="$router.push('/exam/add-exam')">新增试卷</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">批量启用</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">取消启用</el-button>
      </el-form-item>
    </el-form>
    <question-table/>
    <pagination :total="33" />
  </div>
</template>

<script>
import Pagination from 'base/Pagination'
import QuestionTable from 'base/QuestionTable'
export default {
  name: 'student',
  components: {
    Pagination,
    QuestionTable
  },
  data() {
    return {
      name:'',
      formInline: {
        user: '',
        region: ''
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  }
}
</script>

<style lang="stylus" scoped>
</style>
