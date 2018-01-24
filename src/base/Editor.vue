<template>
  <textarea :id="id" ></textarea>
</template>
<style scoped>

</style>
<script>

require('../../static/ueditor/ueditor.config.js')
require('../../static/ueditor/ueditor.all.js')
require('../../static/ueditor/lang/zh-cn/zh-cn.js')
//plugin
// require('../../../static/ueditor/chem-plugin/addChemDialog.js')

// require('../../../static/ueditor/kityformula-plugin/addKityFormulaDialog.js')
// require('../../../static/ueditor/kityformula-plugin/getKfContent.js')
// require('../../../static/ueditor/kityformula-plugin/defaultFilterFix.js')
// require('../../static/ueditor/latex-plugin/latexDialog.js')
// require('../../static/ueditor/latex-plugin/getKfContent.js')
// require('../../static/ueditor/latex-plugin/defaultFilterFix.js')

    export default{
        name:'editor',
        props:['id','value','width','height','readonly'],
        mounted:function(){
try{
          var _this = this;
          _this.editor = UE.getEditor(_this.id, {
            readonly:this.readonly,
            toolbars: [
              [
                 'source', '|','undo', 'redo', 'superscript', 'subscript','|',
                'bold', 'italic', 'underline', 'fontborder','|', 'strikethrough',
                'forecolor', 'backcolor',
                 'lineheight','insertorderedlist', '|', 'fontfamily', 'fontsize','removeformat', '|',
                'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify','|',
                'insertimage', 'spechars', '|','inserttable','drafts'
              ]
            ],
            autoHeightEnabled: true,
            autoFloatEnabled: true
          });
          _this.editor.addListener('ready',function(){
            _this.ok = true
            if(_this.value){
              _this.editor.setContent(_this.value)
            }
          })
          _this.editor.addListener('wordcount',function(){
            _this.$emit('input',_this.editor.getContent())
          })

}catch(e){
  console.log('err',e)
}
        },
        watch:{
          value:function(val){
            if(this.editor){
              if(this.ok){
                if(val && this.editor.getContent() != val ){
                  this.editor.setContent(val)
                }

              }else{
                var _this = this
                _this.editor.addListener('ready',function(){
                  _this.ok = true
                  if(val){
                    _this.editor.setContent(val)
                  }

                })
              }

            }
          }
        },
        beforeDestroy:function(){
          if(this.editor){
            try{
              this.editor.destroy()
            }catch (e){

            }

          }
        }
    }
</script>
