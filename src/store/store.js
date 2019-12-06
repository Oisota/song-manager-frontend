import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import modules from './modules';
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

export default store;
