import http from './http';

export const login = (context, payload) => {
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

export const loadUser = (context) => {
	context.commit('loadUser');
	return http.get('/me')
		.then(resp => {
			context.commit('setUserInfo', resp.data);
		})
		.catch(err => {
			console.log(err);
		});
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

export const register = (context, payload) => {
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

export const addAlert = (context, payload) => {
	context.commit('addAlert', payload);
};
