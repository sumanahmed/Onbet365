import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {router} from './router'
import store from './store'
import moment from 'moment'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import VueGtag from "vue-gtag";

import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '41c2725027b60bdff76d',
    cluster: 'ap1',
    encrypted: true
});

Vue.use(VueAxios, axios)

var toastrConfigs = {
  position: 'top right',
  progressBar: true,
  closeButton: true,
  showDuration: 200
}

Vue.use(CxltToastr,toastrConfigs)

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

Vue.use(VueGtag, {
  config: { id: "G-ND0555EY0C" }
}, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
