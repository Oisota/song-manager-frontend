import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import modules from './modules';
import http from './http';
import config from '../config';

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: config.ENV !== 'production',
	state,
	mutations,
	actions,
	getters,
	modules,
});

http.interceptors.request.use(conf => {
	const token = store.state.user.token;
	if (token !== null || typeof token === 'undefined') {
		conf.headers['Authorization'] = `Bearer ${token}`;
	}
	return conf;
}, error => {
	return Promise.reject(error);
});

/*
http.interceptors.response.use(response => {
	return response;
}, error => {
	store.dispatch('addAlert', error);
});
*/

export default store;
