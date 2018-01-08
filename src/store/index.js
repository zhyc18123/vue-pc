import Vue from 'vue'
import Vuex from 'vuex'


import questionBank from './modules/question-bank'
// import global from './modules/global'
import createLogger from 'plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    questionBank,
    // global,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
