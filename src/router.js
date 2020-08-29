import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
		path: "/:videoId",
		name: "home",
		component: () => import("./views/Cinema.vue"),
		meta: {},
		}
	]
});
