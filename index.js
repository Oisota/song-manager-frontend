const Vue = require('vue');
const App = require('./app');

const app = new Vue({
	el: '#app',
	render(createElement) {
		return createElement(App);
	}
});

window.app = app;
