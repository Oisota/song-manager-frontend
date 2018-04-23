const Vue = require('vue');

const App = require('./app');
const store = require('./store');
const http = require('./http');
const router = require('./router');

Vue.prototype.$http = http;

store.commit('loadUser');

const app = new Vue({
	el: '#app',
	router: router,
	store: store,
	render: h => h(App)
});

window.app = app;
window.store = store;
