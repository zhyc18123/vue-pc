
import * as types from '../mutation-types'
import io from '../../lib/io'
import storage from '../../lib/storage'

var config = {};
function formatConfig(array) {
  array.map((val) => {
    config[val.permission] = true
    val.children && formatConfig(val.children)
  });
}

const state = {
  grades:[],
  subjects: [],
  allSubjects:[],
  loginInfo: null,
  config: [],
  showLoginForm: false,
  loginSuccess: false,
  selectSubject:false,
  subjectId:''
}

// getters
const getters = {
  grades:state=>state.grades,
  subjects:state=>state.subjects,
  allSubjects:state=>state.allSubjects,
  loginInfo:state=>state.loginInfo,
  showLoginForm:state=>state.showLoginForm,
  loginSuccess:state=>state.loginSuccess,
  config:state=>state.config,
  selectSubject:state=>state.selectSubject,
  subjectId:state=>state.subjectId,
}

// mutations
const mutations = {
  changeSubjectId(state,id){
    state.subjectId=id;
  },
  changeSelectSubject(state,type){
    state.selectSubject=type;
  },
  changeLoginSuccess(state,opt){
    state.loginSuccess=false;
  },
  [types.GET_ORGANIZATION_BASE_CONFIG](state, data) {
    state.grades = data.grades;
    state.allSubjects = data.subjects;
  },
  [types.LOGIN](state, data) {
    state.loginInfo = data;
    storage.setCurrentUserInfo(data.user)
    storage.setAccessToken(data.accessToken)
    state.showLoginForm = false
    state.loginSuccess = true;
    let subId=data.user.teachSubjectIds.split(',');
    let subName=data.user.teachSubjectNames.split(',');
      if(subId.length>1){
        state.subjects=[];
        subId.map((item,i)=>{
          state.subjects.push({id:item,name:subName[i]});
        });
        state.selectSubject=true;
      }else{
        state.subjectId=data.user.teachSubjectIds;
            storage.setSubjectId(data.user.teachSubjectIds);
            storage.setSubjectName(data.user.teachSubjectNames);
      }
  },
  [types.SHOW_LOGIN_FORM](state, booleanData) {
    state.showLoginForm = booleanData;
  },
  [types.CONFIG](state, data) {
    config={};
    formatConfig(data.optResources);
    state.config = config;
    storage.setConfig(config)
  },
  [types.HAS_LOGIN](state, data) {
    let loginInfo =storage.getCurrentUserInfo();
    console.log('login',loginInfo)
    if (loginInfo&&Object.keys(loginInfo).length>0) {
      state.loginInfo = loginInfo;
    } else {
      state.loginInfo = null
      state.showLoginForm = true
      state.subjectId=''
    }
  },
}

// actions
const actions = {
  getOrganizationBaseConfig({ commit },opt) {
    io.post(io.organizationBaseConfig, opt, (data) => {
      commit(types.GET_ORGANIZATION_BASE_CONFIG, data)
    })
  },
  login({dispatch, commit },opt) {
    io.post(io.login, opt, (data) => {
      commit(types.LOGIN, data);
      dispatch("config");
      commit(types.HAS_LOGIN)
    })
  },
  config({ commit },opt) {
    io.post(io.config, opt, (data) => {
      commit(types.CONFIG, data)
    })
  },
  hasLogin({ commit },opt) {
    commit(types.HAS_LOGIN)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
