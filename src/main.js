import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {router} from './router'
import moment from 'moment'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios, CxltToastr)

Vue.filter('dateformat',(arg)=> {
  return moment(arg).format("DD MMM YYYY");
})

Vue.filter('timeformat',(arg)=> {
  return moment(arg).format("h:mm a");
})

Vue.filter('capitalizeFirstLetter',(string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
})

Vue.prototype.$imagePath = 'https://dreambet365.uk/';

export default router;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
