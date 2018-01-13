const Vue = require('vue');
const VueRouter = require('vue-router');

const MainView = require('./main-view');

Vue.use(VueRouter);

module.exports = new VueRouter({
	routes: [
		{
			path: '/', component: MainView
		},
	]
});
