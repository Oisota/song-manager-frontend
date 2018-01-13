const Vue = require('vue');

const App = require('./app');
const store = require('./store');
const router = require('./app/router');

const app = new Vue({
	el: '#app',
	router: router,
	store: store,
	render: h => h(App)
});

window.app = app;
