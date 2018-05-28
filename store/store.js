const Vue = require('vue');
const Vuex = require('vuex');

const state = require('./state');
const actions = require('./actions');
const mutations = require('./mutations');
const getters = require('./getters');

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state,
	mutations,
	actions,
	getters
});

module.exports = store;
