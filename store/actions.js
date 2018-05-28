const http = require('./http');

exports.login = (context, payload) => {
	return new Promise((resolve, reject) => {
		http.post('/auth/login', {
			email: payload.email,
			password: payload.password
		}).then(resp => {
			if (resp.status === 200) {
				context.commit('login', resp.data);
				resolve(resp);
			} else {
				reject(resp);
			}
		}).catch(err => {
			reject(err);
		});
	});
};

exports.register = (context, payload) => {
	return new Promise((resolve, reject) => {
		http.post('/auth/register', {
			email: payload.email,
			password: payload.password
		}).then(resp => {
			if (resp.status === 200) {
				resolve(resp);
			} else {
				reject(resp);
			}
		}).catch(err => {
			reject(err);
		});
	});
};

exports.loadSongs = (context, payload) => {
	http.get(`/users/${context.state.user.id}/songs`)
		.then(res => {
			context.commit('loadSongs', res.data);
		})
		.catch(err => {
			console.error(err.message);
		});
};

exports.saveSong = (context, payload) => {
	http.put(`/users/${context.state.user.id}/songs/${payload.song.id}`, payload.song)
		.then(res => {
			context.commit('updateSong', payload);
		})
		.catch(err => {
			console.log(err);
		});
};

exports.createSong = (context, song) => {
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
};

exports.deleteSong = (context, payload) => {
	http.delete(`/users/${context.state.user.id}/songs/${payload.id}`)
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
