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
			name: 'home',
			component: pages.MainView,
			meta: {
				title: 'Song Manager',
			}
		},
		{
			path: '/login',
			name: 'login',
			component: pages.LoginView,
			meta: {
				title: 'Login',
			}
		},
		{
			path: '*',
			name: 'not-found',
			component: pages.NotFoundView,
			meta: {
				title: 'Not Found',
			}
		}
	]
});

router.beforeEach((to, from_, next) => {
	document.title = to.meta.title;
	const loggedIn = store.getters['user/loggedIn'];
	if (!loggedIn && to.path !== '/login') {
		next({name: 'login'});
	} else {
		next();
	}
});

export default router;
