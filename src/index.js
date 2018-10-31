import Vue from 'vue';

import App from './components/app';
import store from './store';
import router from './router';
import config from './config';

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
