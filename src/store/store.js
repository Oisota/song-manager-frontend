const Vue = require('vue');
const Vuex = require('vuex');

const state = require('./state');
const actions = require('./actions');
const mutations = require('./mutations');
const getters = require('./getters');
const modules = require('./modules');
const http = require('./http');
const config = require('../config');

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

module.exports = store;
