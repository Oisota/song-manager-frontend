const Vue = require('vue');
const VueRouter = require('vue-router');

const config = require('./config');
const store = require('./store');
const pages = require('./app/pages');

Vue.use(VueRouter);

const router = new VueRouter({
	mode: config.historyMode,
	routes: [
		{
			path: '/',
			component: pages.MainView
		},
		{
			path: '/set-lists',
			component: pages.SetListView
		},
		{
			path: '/login',
			component: pages.LoginView
		},
		{
			path: '*',
			component: pages.NotFound
		}
	]
});

router.beforeEach((to, from, next) => {
	const loggedIn = store.getters.userLoggedIn;
	if (!loggedIn && to.path !== '/login') {
		next('/login');
	} else {
		next();
	}
});

module.exports = router;
