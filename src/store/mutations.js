export const loadUser = (state) => {
	const userStr = localStorage.getItem('user');
	if (userStr === null) {
		return;
	}
	const user = JSON.parse(userStr);
	state.user.token = user.token;
};

export const setUserInfo = (state, payload) => {
	state.user.id = payload.id;
	state.user.role = payload.role.name;
};

export const login = (state, payload) => {
	state.user.token = payload.token;
	localStorage.setItem('user', JSON.stringify(state.user));
};

export const logout = (state) => {
	state.user.token = null;
	state.user.role = null;
	state.user.id = null;
	localStorage.removeItem('user');
};
