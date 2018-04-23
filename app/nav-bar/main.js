module.exports = {
	name: 'nav-bar',
	computed: {
		loggedIn() {
			return this.$store.getters.userLoggedIn;
		}
	},
	methods: {
		logout() {
			this.$store.commit('logout');
			this.$router.push('/login');
		}
	}
};
