<template>
    <div class="add-course-list">
        <item-head title="新增课程" />
        <el-row class="c-body">
            <el-col :span="8" class="c-tree">
                <el-tree
  :data="data4"
  :props="defaultProps"
  node-key="id"
  default-expand-all
  :expand-on-click-node="true"
  :render-content="renderContent"
  @node-click="nodeClick">
</el-tree>
            </el-col>
            <el-col :span="16" class="c-body">
        <!--<level-one/>-->
        <levle-one v-if="activeLevel===1"></levle-one>
        <levle-two v-if="activeLevel===2"></levle-two>
        <levle-three v-if="activeLevel===3"></levle-three>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import LevleOne from './LevelOne'
import LevleTwo from './LevelTwo'
import LevleThree from './LevelThree'
import ItemHead from 'base/ItemHead'
  export default {
    name: 'add-course-list',
    components: {
        ItemHead,
        LevleOne,
        LevleTwo,
        LevleThree
    },
    data () {
        return {
        activeLevel:'',
        data4: [{
          id: 1,
          label: '一级 1',
          
          children: [{
            id: 4,
            label: '二级 1-1',
          
            children: [{
              id: 9,
              label: '三级 1-1-1',
          
            }, {
              id: 10,
              label: '三级 1-1-2',
          
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          
          children: [{
            id: 5,
            label: '二级 2-1',
          
          }, {
            id: 6,
            label: '二级 2-2',
          
          }]
        }, {
          id: 3,
          label: '一级 3',
          
          children: [{
            id: 7,
            label: '二级 3-1',
          
          }, {
            id: 8,
            label: '二级 3-2',
          
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
        }
    },
    methods: {
        nodeClick(node,data){
          this.activeLevel=data.level
            console.log('click',node,data)
        },
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      reName(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        const newObj=Object.assign({},children[index]);
        newObj.label='ddx';
        children.splice(index, 1,newObj);
      },

      renderContent(h, { node, data, store }) {
          let html;
          if(node.level===1){
          html=<span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
            <span>
              <span>{node.label}</span>
            </span>
            <span>
              <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>添加</el-button>
              <el-button style="font-size: 12px;" type="text" on-click={ () => this.reName(node, data) }>修改</el-button>
            </span>
          </span>
          }else if(node.level===2){

          html=<span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
            <span>
              <span>{node.label}</span>
            </span>
            <span>
              <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>添加</el-button>
              <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
              <el-button style="font-size: 12px;" type="text" on-click={ () => this.reName(node, data) }>修改</el-button>
            </span>
          </span>
          }else{
          html=<span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
            <span>
              <span>{node.label}</span>
            </span>
            <span>
              <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
              <el-button style="font-size: 12px;" type="text" on-click={ () => this.reName(node, data) }>修改</el-button>
            </span>
          </span>
          }
        return (html);
      }
    }
  }
</script>

<style lang="stylus" scoped>
.c-body
    background white
    height 1500px
    overflow auto
    .c-tree
      height 1500px
      overflow auto
      border-right 1px solid #ccc
    .c-body
      height 1500px
      overflow auto
</style>
