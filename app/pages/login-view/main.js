module.exports = {
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
			this.$http.post('/auth/login', {
				email: this.email,
				password: this.password,
			}).then(resp => {
				if (resp.status == 200) {
					this.$store.commit('login', resp.data);
					this.$router.push('/');
				}
			}).catch(err => {
				console.log(err);
			});

		},
		register() {
			this.$http.post('/auth/register', {
				email: this.registerEmail,
				password: this.registerPassword,
			}).then(resp => {
				if (resp.status == 200) {
					this.$store.commit('addAlert', {
						title: 'Account Created',
						message: 'An email will be sent once you are verified',
						category: 'success'
					});
				}
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
