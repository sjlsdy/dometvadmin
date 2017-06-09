import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Login from '../page/Login.vue'
import LoginOut from '../page/LoginOut.vue'

import Main from '@/page/Main'
import Silder from '@/components/silder/main'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: '/',
		component: Login
	}, {
		path: '/loginout',
		name: '/loginout',
		component: LoginOut
	}, {
		path: '/main',
		name: 'main',
		component: Main,
		children: [{
			path: 'silder',
			name: 'silder',
			component: Silder
		}]
	}]
})