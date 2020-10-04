import Vue from 'vue'
import App from './App.vue'
import VCharts from 'v-charts'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import countTo from "vue-count-to";
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import JsonExcel from 'vue-json-excel'


Vue.use(VCharts)
Vue.use(ElementUI);
Vue.use(mavonEditor)
Vue.component('downloadExcel', JsonExcel)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
