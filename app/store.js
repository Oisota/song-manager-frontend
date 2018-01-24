const Vue = require('vue');
const Vuex = require('vuex');

const http = require('./http');

Vue.use(Vuex);

module.exports = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	mutations: {
		loadSongs(state, payload) {
			state.songs.data = payload.songs;
		},
		updateSong(state, payload) {
			state.songs.data.splice(payload.index, 1, payload.song);
		},
		addSong(state, payload) {
			state.songs.data.push(payload.song);
		},
		deleteSong(state, payload) {
			state.songs.data.splice(payload.index, 1);
		}
	},
	actions: {
		loadSongs(context, payload) {
			http.get('/songs')
				.then(res => {
					context.commit('loadSongs', res.data);
				})
				.catch(err => {
					console.error(err.message);
				});
		},
		saveSong(context, payload) {
			http.put(`/songs/${payload.song.id}`, payload.song)
				.then(res => {
					context.commit('updateSong', payload);
				})
				.catch(err => {
					console.log(err);
				});
		},
		createSong(context, payload) {
			http.post('/songs', payload.song)
				.then(res => {
					context.commit('addSong', {
						song: data
					});
				})
				.catch(err => {
					console.log(err);
				});
		},
		deleteSong(context, payload) {
			http.delete(`/songs/${payload.id}`)
				.then(res => {
					context.commit('deleteSong', payload);
				})
				.catch(err => {
					console.log(err);
				});
		}
	},
	state: {
		songs: {
			data: []
		}
	},
});
