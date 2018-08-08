const http = require('../http');

exports.namespaced = true;

exports.state = {
	songs: [],
};

exports.actions = {
	loadSongs(context) {
		return new Promise((resolve, reject) => {
			http.get(`/users/${context.state.user.id}/songs`)
				.then(resp => {
					if (resp.status === 200) {
						context.commit('loadSongs', resp.data);
						resolve(resp);
					} else {
						reject(resp);
					}
				})
				.catch(err => {
					reject(err);
				});
		});
	},
	saveSong(context, payload) {
		http.put(`/users/${context.state.user.id}/songs/${payload.song.id}`, payload.song)
			.then(() => {
				context.commit('updateSong', payload);
			})
			.catch(err => {
				console.log(err);
			});
	},
	createSong(context, song) {
		console.log(song);
		http.post(`/users/${context.state.user.id}/songs`, song)
			.then(res => {
				const s = Object.assign(song, res.data);
				context.commit('addSong', {
					song: s,
				});
			})
			.catch(err => {
				console.log(err);
			});
	},
	deleteSong(context, payload) {
		http.delete(`/users/${context.state.user.id}/songs/${payload.id}`)
			.then(() => {
				context.commit('deleteSong', payload);
			})
			.catch(err => {
				console.log(err);
			});
	},
};

exports.mutations = {
	loadSongs(state, songs) {
		state.songs = songs;
	},
	updateSong(state, payload) {
		state.songs.splice(payload.index, 1, payload.song);
	},
	addSong(state, payload) {
		state.songs.push(payload.song);
	},
	deleteSong(state, payload) {
		state.songs.splice(payload.index, 1);
	},
};
