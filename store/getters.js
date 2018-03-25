exports.userLoggedIn = (state) => {
	return state.user.token !== null;
};
