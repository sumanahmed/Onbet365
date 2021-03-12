import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {router} from './router'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.filter('dateformat',(arg)=> {
  return moment(arg).format("DD MMM YYYY");
})

Vue.filter('timeformat',(arg)=> {
  return moment(arg).format("h:mm a");
})

Vue.filter('capitalizeFirstLetter',(string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
})

export default router;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
