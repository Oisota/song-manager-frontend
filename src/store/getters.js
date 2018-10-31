export const userLoggedIn = (state) => {
	return state.user.token !== null;
};
