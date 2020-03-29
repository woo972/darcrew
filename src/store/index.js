import Vue from 'vue'
import Vuex from 'vuex'
import forum from './forum'

Vue.use(Vuex);
const store = new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    modules: {
        forum
    }
})

export default store

