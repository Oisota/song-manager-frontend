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

export const createAlert = (context, payload) => {
	const a = {
		title: payload.title || '',
		text: payload.text || '',
		type: 'alert-' + (payload.type || 'danger'),
	};

	context.commit('createAlert', a);

	if (payload.dismiss) {
		setTimeout(() => {
			context.commit('dismissAlert', context.state.alerts.indexOf(a));
		}, payload.dismiss);
	}
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

export const addAlert = (context, payload) => {
	context.commit('addAlert', payload);
};
