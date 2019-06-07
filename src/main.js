import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vueaxios2.firebaseio.com'
axios.defaults.headers.common['Authorization']='fasfdsa'
axios.defaults.headers.get['Accepts']='application/json'
//atleast return or else it will b blacked
const reqInterceptor=axios.interceptors.request.use(config=>{
  console.log('Request Interceptor',config)
  return config
})
axios.interceptors.response.use(res=>{
  console.log('response Interceptor ',res)
  return res;
})
//remove interceptors
axios.interceptors.request.eject(reqInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
