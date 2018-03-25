const Vue = require('vue');
const VueRouter = require('vue-router');

const pages = require('./app/pages');

Vue.use(VueRouter);

module.exports = new VueRouter({
	mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
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
