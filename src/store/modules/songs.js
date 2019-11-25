import http from '../http';

export const namespaced = true;

export const state = {
	songs: [],
};

export const mutations = {
	load(state, songs) {
		state.songs = songs;
	},
	update(state, payload) {
		state.songs.splice(payload.index, 1, payload.song);
	},
	create(state, payload) {
		state.songs.push(payload);
	},
	delete(state, payload) {
		state.songs.splice(payload.index, 1);
	},
};

export const actions = {
	async load(context) {
		let resp = null;
		const userID = context.rootState.user.id;
		try {
			resp = await http.get(`/users/${userID}/songs`);
		} catch (err) {
			console.log(err);
		}
		context.commit('load', resp.data);
		return resp;
	},
	async update(context, payload) {
		let resp = null;
		const userID = context.rootState.user.id;
		try {
			resp = await http.put(`/users/${userID}/songs/${payload.song.id}`, payload.song);
		} catch (err) {
			console.log(err);
		}
		context.commit('update', payload);
		return resp;
	},
	async create(context, payload) {
		let resp = null;
		const userID = context.rootState.user.id;
		try {
			resp = await http.post(`/users/${userID}/songs`, payload);
		} catch (err) {
			console.log(err);
		}
		payload.id = resp.data.id;
		const s = Object.assign({}, payload);
		context.commit('create', s);
		return s;
	},
	async delete(context, payload) {
		let resp = null;
		const userID = context.rootState.user.id;
		try {
			resp = await http.delete(`/users/${userID}/songs/${payload.id}`);
		} catch (err) {
			console.log(err);
		}
		context.commit('deleteSong', payload);
		return resp;
	},
};
