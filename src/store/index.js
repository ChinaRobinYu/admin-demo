import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import Tabs from './modules/tabs'
Vue.use(Vuex)
export default new Vuex.Store({
	modules: {
		User,
		Tabs
	}
})
