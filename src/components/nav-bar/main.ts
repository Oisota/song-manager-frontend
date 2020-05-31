import Vue from 'vue';

export default Vue.extend({
	name: 'nav-bar',
	computed: {
		loggedIn() {
			return this.$store.getters['user/loggedIn'];
		}
	},
	methods: {
		logout() {
			this.$store.commit('logout');
			this.$router.push('/login');
		}
	}
});