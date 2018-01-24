<template>
  <div class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="form.pageNo"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="form.pageSize||10"
      layout="total,sizes, prev, pager, next, jumper"
      :total="total || 0">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    props: ['total','pageSize'],
    data() {
      return {
        form: {
          pageNo: 1,
          pageSize:this.pageSize||10
        },
      }
    },
    methods: {
      handleSizeChange(val) {
        this.form.pageSize = val
        this.$emit('getListResult', Object.assign({},this.form,{pageSize: val}))
      },
      handleCurrentChange(val) {
        this.form.pageNo = val
        this.$emit('getListResult', Object.assign({},this.form,{pageNo: val}))
      },
    },
  }
</script>
<style>
  .pagination {
    text-align: right;
    margin-top: 20px;
    padding-top: 13px;
  }
</style>
