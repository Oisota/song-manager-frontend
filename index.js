const Vue = require('vue');
const VueRouter = require('vue-router');
const App = require('./app');
const routes = require('./app/routes');

Vue.use(VueRouter);

const router = new VueRouter({routes});

const app = new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
});

window.app = app;
