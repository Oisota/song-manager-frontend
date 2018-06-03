const Vue = require('vue');

const App = require('./app');
const store = require('./store');
const router = require('./router');

store.commit('loadUser');

const app = new Vue({
	el: '#app',
	router: router,
	store: store,
	render: h => h(App)
});

if (process.env.NODE_ENV !== 'production') {
	window.app = app;
	window.store = store;
}
