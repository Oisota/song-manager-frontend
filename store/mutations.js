exports.loadUser = (state, payload) => {
	const user_str = localStorage.getItem('user');
	if (user_str === null) {
		return;
	}
	const user = JSON.parse(user_str);
	state.user.token = user.token;
	state.user.role = user.role;
	state.user.id = user.id;
};

exports.login = (state, payload) => {
	state.user.token = payload.token;
	state.user.role = payload.role;
	state.user.id = payload.id;
	localStorage.setItem('user', JSON.stringify(state.user));
};

exports.logout = (state, payload) => {
	state.user.token = null;
	state.user.role = null;
	state.user.id = null;
	localStorage.removeItem('user');
};

exports.loadSongs = (state, payload) => {
	state.songs = payload.songs;
};

exports.updateSong = (state, payload) => {
	state.songs.splice(payload.index, 1, payload.song);
};

exports.addSong = (state, payload) => {
	state.songs.push(payload.song);
};

exports.deleteSong = (state, payload) => {
	state.songs.splice(payload.index, 1);
};

exports.addAlert = (state, payload) => {
	console.log(payload);
};
