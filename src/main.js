const Vue = require('vue');

const App = require('./components/app');
const store = require('./store');
const router = require('./router');
const config = require('./config');

store.commit('loadUser');

const app = new Vue({
	el: '#app',
	router: router,
	store: store,
	render: h => h(App)
});

if (config.env !== 'production') {
	window.app = app;
}
