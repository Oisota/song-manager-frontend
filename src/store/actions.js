import http from 'App/http';

export const login = async (context, payload) => {
	let resp = null;
	let data = null;
	try {
		resp = await http.post('auth/login', {
			json: {
				email: payload.email,
				password: payload.password
			}
		});
		data = (await resp.json()).data;
	} catch (err) {
		console.log(err);
		return;
	}
	context.commit('login', data);
	return resp;
};

export const loadUser = async (context) => {
	context.commit('loadUser');
	let resp = null;
	let data = null;
	try {
		resp = await http.get('me');
		data = (await resp.json()).data;
	} catch (err) {
		console.log(err);
		return;
	}
	context.commit('setUserInfo', data);
	return resp;
};

export const register = async (context, payload) => {
	let resp = null;
	try {
		resp = await http.post('auth/register', {
			json: {
				email: payload.email,
				password: payload.password
			}
		});
	} catch (err) {
		console.log(err);
		return;
	}
	return resp;
};
