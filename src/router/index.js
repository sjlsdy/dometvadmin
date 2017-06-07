import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import silder from '@/components/silder/main'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Hello',
		component: Hello
	}, {
		path: '/silder',
		name: 'silder',
		component: silder
	}]
})