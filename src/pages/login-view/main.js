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
		login() {
			this.$store.dispatch('login', {
				email: this.email,
				password: this.password,
			}).then(() => {
				this.$router.push('/');
			}).catch(err => {
				console.log(err);
			});

		},
		register() {
			this.$store.dispatch('register', {
				email: this.registerEmail,
				password: this.registerPassword,
			}).then(() => {
				this.$notify({
					title: 'Account Created',
					text: 'An email will be sent once you are verified',
					type: 'alert-success'
				});
			}).catch(() => {
				this.$notify({
					title: 'Error',
					text: 'Account not created',
					type: 'alert-danger'
				});
			});
		},
	},
};
