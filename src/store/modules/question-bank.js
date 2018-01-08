
import * as types from '../mutation-types'
import {getQuestionList} from 'api/service/test'
import storage from 'assets/js/storage'


const state = {
    questionData: {},
}

// getters
const getters = {
    questionData: state => state.questionData,
}

// mutations
const mutations = {
    [types.GET_QUESTION](state, data) {
        console.log(data)
        state.questionData = data;
    },
}

// actions
const actions = {
    async questionList({ commit },opt) {
        console.log('xxxx')
       let {data}= await getQuestionList(opt);
       if(data.success){
           commit(types.GET_QUESTION,data)
       }
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}