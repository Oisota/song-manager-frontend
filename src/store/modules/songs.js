import http from '../http';

export const namespaced = true;

export const state = {
	songs: [],
};

export const mutations = {
	load(state, songs) {
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

export const actions = {
	async load(context) {
		let resp = null;
		try {
			resp = await http.get(`/users/${context.rootState.user.id}/songs`);
		} catch (err) {
			console.log(err);
		}
		context.commit('load', resp.data);
		return resp;
	},
	async saveSong(context, payload) {
		let resp = null;
		try {
			resp = await http.put(`/users/${context.state.user.id}/songs/${payload.song.id}`, payload.song);
		} catch (err) {
			console.log(err);
		}
		context.commit('updateSong', payload);
		return resp;
	},
	async create(context, payload) {
		let resp = null;
		try {
			resp = await http.post(`/users/${context.state.user.id}/songs`, payload);
		} catch (err) {
			console.log(err);
		}
		const s = Object.assign(payload, resp.data);
		context.commit('addSong', {
			song: s,
		});
		return s;
	},
	async deleteSong(context, payload) {
		let resp = null;
		try {
			resp = await http.delete(`/users/${context.state.user.id}/songs/${payload.id}`);
		} catch (err) {
			console.log(err);
		}
		context.commit('deleteSong', payload);
		return resp;
	},
};
