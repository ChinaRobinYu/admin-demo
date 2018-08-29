import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
// 自定义指令
import '@/directives/statistic.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局样式
import '@/assets/scss/index.scss'
// 路由鉴权
import '@/utils/permission'
Vue.use(ElementUI)

Vue.use(VueRouter)
Vue.use(Vuex)

const loadingImg = require('./assets/images/lazyload/default.jpg')
const errorImg = require('./assets/images/lazyload/error.png')
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: errorImg,
	loading: loadingImg,
	try: 3
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
