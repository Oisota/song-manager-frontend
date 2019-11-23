import http from './http';

export const login = async (context, payload) => {
	let resp = null;
	try {
		resp = await http.post('/auth/login', {
			email: payload.email,
			password: payload.password
		});
	} catch (err) {
		console.log(err);
		return;
	}
	context.commit('login', resp.data);
	return resp;
};

export const loadUser = async (context) => {
	context.commit('loadUser');
	let resp = null;
	try {
		resp = await http.get('/me');
	} catch (err) {
		console.log(err);
		return;
	}
	context.commit('setUserInfo', resp.data);
	return resp;
};

export const register = async (context, payload) => {
	let resp = null;
	try {
		resp = await http.post('/auth/register', {
			email: payload.email,
			password: payload.password
		});
	} catch (err) {
		console.log(err);
		return;
	}
	return resp;
};
