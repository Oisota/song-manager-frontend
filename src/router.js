import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';
import pages from './pages';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: pages.MainView,
			meta: {
				title: 'Song Manager',
			}
		},
		{
			path: '/login',
			component: pages.LoginView,
			meta: {
				title: 'Login',
			}
		},
		{
			path: '*',
			component: pages.NotFoundView,
			meta: {
				title: 'Not Found',
			}
		}
	]
});

router.beforeEach((to, from_, next) => {
	document.title = to.meta.title;
	const loggedIn = store.getters.userLoggedIn;
	if (!loggedIn && to.path !== '/login') {
		next('/login');
	} else {
		next();
	}
});

export default router;
