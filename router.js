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
			component: pages.NotFound,
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


module.exports = router;
