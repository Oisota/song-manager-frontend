const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex);

module.exports = new Vuex.Store({
	mutations: {
		loadSongs(state, payload) {
			state.songs.data = payload.songs;
		}
	},
	state: {
		songs: {
			data: []
		}
	},
});
