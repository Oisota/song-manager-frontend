exports.login = (state, payload) => {
	state.user.token = payload.token;
	state.user.role = payload.role;
	state.user.id = payload.id;
	localStorage.setItem('user', state.user.token);
};

exports.logout = (state, payload) => {
	state.user.token = null;
	state.user.role = null;
	state.user.id = null;
	localStorage.removeItem('user');
};

exports.loadSongs = (state, payload) => {
	state.songs.data = payload.songs;
};

exports.updateSong = (state, payload) => {
	state.songs.data.splice(payload.index, 1, payload.song);
};

exports.addSong = (state, payload) => {
	state.songs.data.push(payload.song);
};

exports.deleteSong = (state, payload) => {
	state.songs.data.splice(payload.index, 1);
};

exports.addAlert = (state, payload) => {
	console.log(payload);
};
