import Vue from 'vue';
import ky from 'ky';

import store from './store';

function addAuth(req) {
	const token = store.state.user.user.token;
	if (token !== null || typeof token !== 'undefined') {
		req.headers.set('Authorization', `Bearer ${token}`);
	}
}

async function showNotifications(req, opts, res) {
	// show notification
	if (res.status >= 400) {
		const handleError = opts.hasOwnProperty('handleError') && opts.handleError;
		if (handleError) {
			try {
				Vue.notify({
					title: 'Error',
					text: res.data.error.message,
					type: 'alert-danger',
				});
			} catch (err) {
				console.log(err);
			}
		}
	}
	return res;
}

const http = ky.extend({
	prefixUrl: `${window.location.origin}/api/v1`,
	handleError: true,
	hooks: {
		beforeRequest: [addAuth],
		afterResponse: [showNotifications]
	},
});

export default http;
