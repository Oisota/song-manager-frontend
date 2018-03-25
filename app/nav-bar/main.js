module.exports = {
	name: 'nav-bar',
	computed: {
		loggedIn() {
			return this.$store.getters.userLoggedIn;
		}
	}
};
