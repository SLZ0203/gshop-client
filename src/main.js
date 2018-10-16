import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/dist/css/swiper.min.css'
import './mock/mockServer'
import './filters'
import VueLazyload from 'vue-lazyload'

import TopHeader from './components/TopHeader/TopHeader.vue'
import CartControl from './components/CartControl/CartControl.vue'
import Split from './components/Split/Split.vue'
import loading from './common/imgs/loading.gif'

//注册全局组件
Vue.component('TopHeader', TopHeader);
Vue.component('CartControl', CartControl);
Vue.component('Split', Split);
Vue.component(Button.name, Button);

Vue.use(VueLazyload, {loading});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
