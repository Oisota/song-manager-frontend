const Vue = require('vue');
const VueRouter = require('vue-router');

const MainView = require('./main-view');
const NotFound = require('./not-found');

Vue.use(VueRouter);

module.exports = new VueRouter({
	mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
	routes: [
		{
			path: '/',
			component: MainView
		},
		{
			path: '*',
			component: NotFound
		}
	]
});
