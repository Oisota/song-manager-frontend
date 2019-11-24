export default {
	name: 'login-view',
	data() {
		return {
			email: '',
			password: '',
			registerEmail: '',
			registerPassword: '',
		};
	},
	methods: {
		async login() {
			try {
				await this.$store.dispatch('login', {
					email: this.email,
					password: this.password,
				});
			} catch (err) {
				console.log(err);
			}
			this.$router.push('/');

		},
		async register() {
			try {
				await this.$store.dispatch('register', {
					email: this.registerEmail,
					password: this.registerPassword,
				});
			} catch (_) {
				this.$notify({
					title: 'Error',
					text: 'Account not created',
					type: 'alert-danger'
				});
			}
			this.$notify({
				title: 'Account Created',
				text: 'An email will be sent once you are verified',
				type: 'alert-success'
			});
		},
	},
};
