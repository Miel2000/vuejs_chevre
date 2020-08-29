import Vue from 'vue'
import Router from 'vue-router'
import Cinema from './views/Cinema.vue'

Vue.use(Router)

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/:videoId",
			name: "home",
			component: Cinema,
			meta: {},
			props: true
		}
	]
});
