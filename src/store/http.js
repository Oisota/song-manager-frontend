import Vue from 'vue';
import ky from 'ky';

import store from './store';

function beforeRequest(req) {
	const token = store.state.user.token;
	if (token !== null || typeof token === 'undefined') {
		req.headers.set('Authorization', `Bearer ${token}`);
	}
}

async function afterResponse(req, opts, res) {
	//parse json
	console.log(res);
	let data = null;
	try {
		data = await res.json();
	} catch (e) {
		console.log(e);
	}
	res.data = data;
	// show notification
	if (res.status >= 400) {
		const handleError = opts.hasOwnProperty('handleError') && opts.handleError;
		if (handleError) {
			Vue.notify({
				title: 'Error',
				text: data.error.message,
				type: 'alert-danger',
			});
		}
	}
	return res;
}

const http = ky.extend({
	prefixUrl: `${window.location.origin}/api/v1`,
	handleError: true,
	hooks: {
		beforeRequest: [beforeRequest],
		afterResponse: [afterResponse]
	},
});

export default http;
