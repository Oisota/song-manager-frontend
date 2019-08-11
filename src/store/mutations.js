export const loadUser = (state) => {
	const user_str = localStorage.getItem('user');
	if (user_str === null) {
		return;
	}
	const user = JSON.parse(user_str);
	state.user.token = user.token;
};

export const setUserInfo = (state, payload) => {
	state.user.id = payload.id;
	state.user.role = payload.role;
};

export const login = (state, payload) => {
	state.user.token = payload.token;
	state.user.role = payload.role;
	state.user.id = payload.id;
	localStorage.setItem('user', JSON.stringify(state.user));
};

export const logout = (state) => {
	state.user.token = null;
	state.user.role = null;
	state.user.id = null;
	localStorage.removeItem('user');
};

export const createAlert = (state, payload) => {
	state.alerts.unshift(payload);
};

export const dismissAlert = (state, index) => {
	state.alerts.splice(index, 1);
};
