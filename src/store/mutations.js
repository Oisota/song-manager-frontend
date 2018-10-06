exports.loadUser = (state) => {
	const user_str = localStorage.getItem('user');
	if (user_str === null) {
		return;
	}
	const user = JSON.parse(user_str);
	state.user.token = user.token;
	state.user.role = user.role;
	state.user.id = user.id;
};

exports.login = (state, payload) => {
	state.user.token = payload.token;
	state.user.role = payload.role;
	state.user.id = payload.id;
	localStorage.setItem('user', JSON.stringify(state.user));
};

exports.logout = (state) => {
	state.user.token = null;
	state.user.role = null;
	state.user.id = null;
	localStorage.removeItem('user');
};

exports.createAlert = (state, payload) => {
	state.alerts.unshift(payload);
};

exports.dismissAlert = (state, index) => {
	state.alerts.splice(index, 1);
};
