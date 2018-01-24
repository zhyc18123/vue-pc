<template>
    <div class="level-three">
        <div class="l-item">
            <div class="l-label">
                <i>*</i>内容概况
            </div>
            <editor id="content" />
        </div>
        <div>
            <el-button type="primary" icon="el-icon-circle-plus-outline" @click="">选择课程资源</el-button>
        </div>
        <choose-sourse/>
        <el-form class="source-desc">
            <el-form-item>
                <h2>导师对课程内容整体简介（这是名称</h2>
            </el-form-item>
            <el-form-item label="描述：">
                <span>这是描述内容放这里放这里</span>
            </el-form-item>
            <el-form-item label="要求：">
                <span>这里放要求的文字</span>
            </el-form-item>
            <el-form-item label="类型：">
                <span>视频</span>
            </el-form-item>
            <el-form-item label="时长：">
                <span>10分钟</span>
            </el-form-item>
        </el-form>
        <div class="config">
            <h3>通关规则配置</h3>
            <el-button type="primary" icon="el-icon-circle-plus-outline" @click="passType='1'">选择通关规则</el-button>
            <el-button type="primary" icon="el-icon-circle-plus-outline" @click="passType='2'">关键帧管理</el-button>
            <div v-if="passType==='1'">
                <el-table class="pass-rules" ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column label="日期" width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址" show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <el-button type="primary">确定</el-button>
                <el-button>取消</el-button>
            </div>
            <div v-if="passType==='2'" class="key-second">
                <el-form>
                    <el-form-item label="视频总时长：">
                        600秒
                    </el-form-item>
                    <el-form-item label="关键帧1：">
                        <span>在视频</span>
                        <el-input class="in-input"></el-input>秒插入
                        <i class="el-icon-circle-plus-outline"></i>
                        <i class="el-icon-remove-outline"></i>
                        <div>
                            <el-button type="primary" icon="el-icon-circle-plus-outline">添加题目</el-button>
                        </div>
                        <div class="select-question">
                            <el-form inline="inline">
                                <el-form-item label="题型标签：">
                                    <el-select v-model="value" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="题型类型：">
                                    <el-select v-model="value" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-button type="primary">搜索</el-button>
                            </el-form>

                            <el-table class="q-table" ref="singleTable" border :data="tableData3" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
                                <el-table-column type="index" width="50">
                                </el-table-column>
                                <el-table-column property="date" label="日期" width="120">
                                </el-table-column>
                                <el-table-column property="name" label="姓名" width="120">
                                </el-table-column>
                                <el-table-column property="address" label="地址">
                                </el-table-column>
                            </el-table>
                <el-button type="primary">确定</el-button>
                <el-button>取消</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item label="关键帧2：">
                        <span>在视频</span>
                        <el-input class="in-input"></el-input>秒插入
                        <i class="el-icon-remove-outline"></i>
                        <i class="el-icon-circle-plus-outline"></i>
                        <div>
                            <el-button type="primary" icon="el-icon-circle-plus-outline">添加题目</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="config">
            <h3>过关奖励配置</h3>
            <el-form>
                <el-form-item label-width="180px" label="通关可得积分：">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="l-btn">
            <el-button type="primary">确定</el-button>
            <el-button>取消</el-button>
        </div>
    </div>
</template>

<script>
import Editor from 'base/Editor'
import ChooseSourse from './ChooseSourse'
export default {
    name: 'level-three',
    components: {
        Editor,
        ChooseSourse
    },
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }],
            value: '',
            passType: '1',
            tableData3: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            multipleSelection: []
        }
    },
    methods: {
        handleCurrentChange(val) {
            console.log(val)
        },
        handleSelectionChange(val) {
            console.log(val)
        }
    }
}
</script>

<style lang="stylus" scoped>
.level-three
    padding 30px
    .l-item
        margin-bottom 20px
    .l-label
        margin-bottom 10px
        position relative
        i 
            color red
            position absolute
            top -3px
            left -13px
    .config
        margin 30px 0
        h3 
            line-height 60px
            text-decoration underline
.pass-rules
    margin 20px 0
.source-desc
    background #eeeeee
    padding 10px
    h2
        font-size 18px
        font-weight bold
    .el-form-item
        margin-bottom 0
.in-input
    width 200px
    margin 0 20px
.key-second
    i 
        cursor pointer
        font-size 24px
        color #409EFF
.select-question
    margin-top 20px
    padding 20px
    border 1px dashed #409EFF
.q-table
    margin 20px 0
</style>
