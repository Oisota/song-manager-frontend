const http = require('../http');

exports.loadSongs = (context, payload) => {
	http.get('/songs')
		.then(res => {
			context.commit('loadSongs', res.data);
		})
	.catch(err => {
		console.error(err.message);
	});
};

exports.saveSong = (context, payload) => {
	http.put(`/songs/${payload.song.id}`, payload.song)
		.then(res => {
			context.commit('updateSong', payload);
		})
	.catch(err => {
		console.log(err);
	});
};

exports.createSong = (context, payload) => {
	http.post('/songs', payload.song)
		.then(res => {
			context.commit('addSong', {
				song: data
			});
		})
	.catch(err => {
		console.log(err);
	});
};

exports.deleteSong = (context, payload) => {
	http.delete(`/songs/${payload.id}`)
		.then(res => {
			context.commit('deleteSong', payload);
		})
	.catch(err => {
		console.log(err);
	});
};

exports.addAlert = (context, payload) => {
	context.commit('addAlert', payload);
};
