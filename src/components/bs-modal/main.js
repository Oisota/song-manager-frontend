import $ from 'jquery';

export default {
	name: 'bs-modal',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	mounted() {
		const m = $(this.$el);
		m.on('show.bs.modal', this.show);
		m.on('shown.bs.modal', this.shown);
		m.on('hide.bs.modal', this.hide);
		m.on('hidden.bs.modal', this.hidden);
	},
	methods: {
		show(e) {
			this.$emit('show', e);
		},
		shown(e) {
			this.$emit('shown', e);
		},
		hide(e) {
			this.$emit('hide', e);
		},
		hidden(e) {
			this.$emit('hidden', e);
		},
	}
};
