const Vue = require('vue');
const Vuex = require('vuex');

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
	},
	actions: {
		loadSongs(context, payload) {
			$.ajax({
				url: 'http://127.0.0.1:6505/api/songs',
				method: 'GET',
				timeout: 5000,
				dataType: 'json'
			})
			.done((data, textStatus, jqXHR) => {
				context.commit('loadSongs', data);
			})
			.fail((jqXHR, textStatus, errorThrown) => {
				if (process.env.NODE_ENV !== 'production') {
					console.log(errorThrown);
				}
			});
		},
		saveSong(context, payload) {
			$.ajax({
				url: 'http://localhost:6505/api/songs/'.concat(payload.song.id),
				method: 'PUT',
				contentType: 'application/json',
				dataType: 'json',
				data: JSON.stringify(payload.song),
				timeout: 5000,
			})
			.done((data, textStatus, jqXHR) => {
				context.commit('updateSong', payload);
			})
			.fail((jqXHR, textStatus, errorThrown) => {
				if (process.env.NODE_ENV !== 'production') {
					console.log(errorThrown);
				}
			});
		},
		createSong(context, payload) {
			$.ajax({
				url: 'http://localhost:6505/api/songs',
				method: 'POST',
				contentType: 'application/json',
				dataType: 'json',
				data: JSON.stringify(payload.song),
				timeout: 5000,
			})
			.done((data, textStatus, jqXHR) => {
				context.commit('addSong', {
					song: data
				});
			})
			.fail((jqXHR, textStatus, errorThrown) => {
				if (process.env.NODE_ENV !== 'production') {
					console.log(errorThrown);
				}
			});
		}
	},
	state: {
		songs: {
			data: []
		}
	},
});
