module.exports = {
	name: 'alert-box',
	computed: {
		alerts() {
			return this.$store.state.alerts;
		}
	},
	methods: {
		dismiss(index) {
			this.$store.commit('dismissAlert', index);
		},
	}
};
