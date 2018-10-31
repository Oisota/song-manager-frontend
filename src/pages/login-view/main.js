export default {
	name: 'login-view',
	data() {
		return {
			email: '',
			password: '',
			registerEmail: '',
			registerPassword: '',
		}
	},
	methods: {
		login() {
			this.$store.dispatch('login', {
				email: this.email,
				password: this.password,
			}).then(resp => {
				this.$router.push('/');
			}).catch(err => {
				console.log(err);
			});

		},
		register() {
			this.$store.dispatch('register', {
				email: this.registerEmail,
				password: this.registerPassword,
			}).then(resp => {
				this.$store.commit('addAlert', {
					title: 'Account Created',
					message: 'An email will be sent once you are verified',
					category: 'success'
				});
			}).catch(err => {
				this.$store.commit('addAlert', {
					title: 'Error',
					message: 'Account not created',
					category: 'danger'
				});
			});

		}
	}
};
