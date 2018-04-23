module.exports = {
	name: 'login-view',
	data() {
		return {
			email: '',
			password: '',
		}
	},
	methods: {
		async login() {
			const resp = await this.$http.post('/auth/login', {
				email: this.email,
				password: this.password,
			});

			if (resp.status == 200) {
				this.$store.commit('login', resp.data);
				this.$router.push('/');
			}
		}
	}
};
