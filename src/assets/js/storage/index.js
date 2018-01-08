import store from 'store' ;

const storage = {
  setConfig:function(allConfig){
    store.set("config" , allConfig );
  },
  getConfig:function () {
    return store.get("config");
  },
  setAccessToken:function(accessToken){
    store.set("accessToken" , accessToken );
  },
  getAccessToken:function () {
    return store.get("accessToken");
  },
  removeAccessToken:function(){
    store.remove('accessToken')
  },
  setSubjectId:function(subjectId){
    store.set("subjectId" , subjectId );
  },
  getSubjectId:function () {
    return store.get("subjectId");
  },
  setSubjectName:function(subjectName){
    store.set("subjectName" , subjectName );
  },
  getSubjectName:function () {
    return store.get("subjectName");
  },
  setCurrentUserInfo:function(userInfo){
    store.set("currentUserInfo" ,JSON.stringify(userInfo)  );
  },
  getCurrentUserInfo:function(){
    return store.get('currentUserInfo')?JSON.parse(store.get('currentUserInfo')) : {}
  },
  removeCurrentUserInfo:function(){
    store.remove('currentUserInfo')
  }
}
export default  storage  ;
