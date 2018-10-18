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

exports.createAlert = (context, payload) => {
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

exports.addAlert = (context, payload) => {
	context.commit('addAlert', payload);
};