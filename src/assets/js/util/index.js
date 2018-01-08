import moment from 'moment'

moment.locale('zh_CN')
// var CryptoJS = require('crypto-js');

export function deepCopy (obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
}
export default  {
  deepGet:function (object, path, defaultValue) {
    console.log('x',object,path)
    return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path)
            .reduce((o, k) => (o || {})[k], object) || defaultValue;
},
initReEdit:function(){
        setTimeout(function(){
          console.log("dfsfsfs")
            //重新编辑公式
        $($(document).find('iframe').contents().find('body.view')).on('click','.kfformula',function(){
            let viewArr=$(document).find('iframe').contents().find('body.view');
            for(var i=0;i<viewArr.length;i++){
                if(viewArr[i]===$(this).closest('body.view')[0]){
                    $($('.edui-for-插入kityformula')[i]).find('.edui-default').click();
                }
            }
        });
          //重新编辑latex
          $($(document).find('iframe').contents().find('body.view')).on('click','.latex',function(){
            let viewArr=$(document).find('iframe').contents().find('body.view');
            for(var i=0;i<viewArr.length;i++){
              if(viewArr[i]===$(this).closest('body.view')[0]){
                $($('.edui-for-解析latex')[i]).find('.edui-default').click();
              }
            }
          });
        //重新编辑化学公式
        $($(document).find('iframe').contents().find('body.view')).on('click','.chem-plugin',function(){
            let viewArr=$(document).find('iframe').contents().find('body.view');
            sessionStorage.setItem('smiles',$(this).data("latex"));
            window.smiles=$(this).data("latex");
            for(var i=0;i<viewArr.length;i++){
                if(viewArr[i]===$(this).closest('body.view')[0]){
                    $($('.edui-for-插入chem')[i]).find('.edui-default').click();
                }
            }
        });

        },1000)
},
convertImgToBase64:function (url, callback,isLatex, outputFormat){
    var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
      let scale=isLatex?0.8:1;
        canvas.height = img.height*scale;
        canvas.width = img.width*scale;
        ctx.drawImage(img,0,0,img.width,img.height,0,0,img.width*scale,img.height*scale);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL);
        canvas = null; 
    };
    img.src = url;
},
// base64encode:function (str) {
//   let img=new Image;
//   img.src=str;
//   img.onload=function(){
//     console.log(img)
//   let fr  =  new FileReader ();
//   console.log(fr.readAsDataURL(img))
//   }
//         var _str = CryptoJS.enc.Utf8.parse(str);
//         var _base64 = CryptoJS.enc.Base64.stringify(_str);
//         console.log(_base64);
//         return _base64;
//     },
 mapTree:function(arr){
    var lastArr=[];
    function mapTurn(arr){
    arr.map((item=>{
        if(item.childrenNodes){
          lastArr.push({id:item.knowledgeNodeId,pId:item.parentKnowledgeNodeId,name:item.name?item.name:'新知识点',status:item.editStatus,sequence:item.sequence,font:{'color':'red'}});
            mapTurn(item.childrenNodes);
        }else{
          lastArr.push({id:item.knowledgeNodeId,pId:item.parentKnowledgeNodeId,name:item.name?item.name:'新知识点',status:item.editStatus,sequence:item.sequence,font:{'color':'red'}});
        };
    }))
  };
  mapTurn(arr);
    return lastArr;
},
  getQueryString : function (name){
    var r = window.location.search.substr(1).match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"));
    if(r) {
      return r[2];
    }
    return null;
  },
  formatTime : function (time , format ) {
    if (!time) return "";
    if (typeof time == "string") {
      time = parseInt(time, 10);
    }
    return moment(time).format(format || 'YYYY-MM-DD H:mm:ss')
  },
  formatDate:function (time , format ) {
    if (!time) return "";
    if (typeof time == "string") {
      time = parseInt(time, 10);
    }
    return moment(time).format(format || 'YYYY-MM-DD')
  },
  firstDayOfMonth:function(){
    return moment().startOf('month');
  },
  endDayOfMonth:function(){
    return moment().endOf('month')
  },

  currentYear:function(){
    return moment().year()
  },

  currentMonth:function(){
    return moment().month() + 1
  },

  formatNumber:function(val , fixed){
    return parseFloat(val).toFixed(fixed)
  },

  toNumber:function(val){
    return Number(val)
  },

  isEmptyObject : function (e) {
    var t;
    for (t in e)
      return !1;
    return !0
  },

  install:function(Vue){
    Vue.filter('formatDate' ,this.formatDate )
    Vue.filter('formatTime' , this.formatTime )
    Vue.filter('formatNumber' , this.formatNumber )
    Vue.filter('toNumber' , this.toNumber )
    Vue.filter('deepGet' , this.deepGet)

    var isEmptyObject = this.isEmptyObject
    Vue.mixin({
      methods: {
        isEmptyObject: isEmptyObject,
        deepGet:this.deepGet
      }
    })
  }


}
