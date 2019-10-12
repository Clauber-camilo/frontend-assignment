import Vue from 'vue';
import Vuex from 'vuex';

import toggle from './modules/toggle';
import company from './modules/company';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    company,
    toggle
  }
})

export default store;