const Vue = require('vue');
const Vuex = require('vuex');

const state = require('./state');
const actions = require('./actions');
const mutations = require('./mutations');
const getters = require('./getters');
const modules = require('./modules');
const http = require('./http');

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state,
	mutations,
	actions,
	getters,
	modules,
});

http.interceptors.request.use(config => {
	const token = store.state.user.token;
	if (token !== null || typeof token === 'undefined') {
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
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

module.exports = store;
