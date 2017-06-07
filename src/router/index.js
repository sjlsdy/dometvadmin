import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Login from '../page/Login.vue'

import main from '@/page/main'
import silder from '@/components/silder/main'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: '/',
		component: Login
	}, {
		path: '/main',
		name: 'main',
		component: main,
		children: [{
			path: 'silder',
			name: 'silder',
			component: silder
		}]
	}]
})