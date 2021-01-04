import Vue from 'vue'
import Router from 'vue-router'
import Cinema from './views/Cinema.vue'
import Home from './views/Home.vue'
import Boutique from './views/Boutique.vue'

Vue.use(Router)

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/cinema",
			name: "cinema",
			component: Cinema,
			meta: {},
			props: true
		},
		{
			path: "/home",
			name: "home",
			component: Home,
			meta: {},
			props: true
		},
		{
			path: "/boutique",
			name: "boutique",
			component: Boutique,
			meta: {},
			props: true
		}
	]
});
