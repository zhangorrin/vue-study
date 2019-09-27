import Vue from 'vue';
import Vuex from 'vuex'
import { mutations } from './mutations'
import actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        groups: [1]
    },
    modules: {
        
    },
    actions, // 根级别的 action
    mutations, // 根级别的 mutations
    // 根级别的 getters
    getters: {
        getGroups (state) {
            return state.groups
        }
    }   
});

export default store;