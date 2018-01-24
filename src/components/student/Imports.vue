<template>
    <div class="imports">
        <item-head title="批量导入" />
        <el-row class="form-body">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item class="no-bottom" label="步骤一：">
                <span>下载批量导入模板</span>
            </el-form-item>
            <el-form-item>
                <el-button type="text">
                    点击下载模板
                </el-button>
            </el-form-item>
            <el-form-item class="no-bottom" label="步骤二：">
                <span>上传模板</span>
            </el-form-item>
            <el-form-item>
                <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="true">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>

            </el-form-item>
            <el-form-item class="no-bottom" label="步骤三：">
                <span>总条数112条，成功导入112条，导入完成</span>
            </el-form-item>
        </el-form>

        <el-form ref="form1" :model="form" label-width="80px">
            <el-form-item class="no-bottom" label="步骤三：">
                <span>总条数112条，成功导入100条，失败12条，需重新导入</span>
            </el-form-item>
            <el-form-item>
                <el-button type="text">
                    点击下载导入失败模板
                </el-button>
            </el-form-item>
        </el-form>
        </el-row>
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
            fileList: []
        }
    },
    methods: {

        //   submitUpload() {
        //     this.$refs.upload.submit();
        //   },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }

    }
}
</script>

<style lang="stylus" scoped>
.no-bottom
    margin-bottom 0
.form-body
    background white
</style>
