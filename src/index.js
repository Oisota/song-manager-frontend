import Vue from 'vue';
import Notifications from 'vue-notification';
import 'bootstrap';

Vue.use(Notifications);

import App from './components/app';
import store from './store';
import router from './router';
import config from './config';


(async () => {

	let app = null;

	await store.dispatch('loadUser');

	app = new Vue({
		el: '#app',
		router: router,
		store: store,
		render: h => h(App)
	});

	if (config.ENV !== 'production') {
		window.app = app;
	}

})();
