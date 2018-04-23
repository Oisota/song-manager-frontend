const http = require('../http');
const state = require('./state');

exports.loadSongs = (context, payload) => {
	http.get(`/users/${state.user.id}/songs`)
		.then(res => {
			context.commit('loadSongs', res.data);
		})
		.catch(err => {
			console.error(err.message);
		});
};

exports.saveSong = (context, payload) => {
	http.put(`/users/${state.user.id}/songs/${payload.song.id}`, payload.song)
		.then(res => {
			context.commit('updateSong', payload);
		})
		.catch(err => {
			console.log(err);
		});
};

exports.createSong = (context, payload) => {
	http.post(`/users/${state.user.id}/songs`, payload.song)
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
	http.delete(`/users/${state.user.id}/songs/${payload.id}`)
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
