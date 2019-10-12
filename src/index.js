import 'Styles/main.scss';

import { sync } from 'vuex-router-sync'

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  ...App
}).$mount("#app");