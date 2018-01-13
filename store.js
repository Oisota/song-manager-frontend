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
		}
	},
	actions: {
		saveSong(context, payload) {
			$.ajax({
				url: 'http://localhost:6505/api/songs/'.concat(payload.song.id),
				method: 'PUT',
				contentType: 'application/json',
				dataType: 'json',
				data: JSON.stringify(payload.song),
				timeout: 5000,
			})
			.done(function (data, textStatus, jqXHR) {
				context.commit('updateSong', payload);
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
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
