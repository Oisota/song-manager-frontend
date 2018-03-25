module.exports = {
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
};
