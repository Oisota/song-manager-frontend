const http = require('./http');

module.exports = {
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
};
