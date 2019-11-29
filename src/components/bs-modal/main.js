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
		this.$modalEl = $(this.$el);
		this.$modalEl.on('show.bs.modal', e => this.$emit('show', e));
		this.$modalEl.on('shown.bs.modal', e => this.$emit('shown', e));
		this.$modalEl.on('hide.bs.modal', e => this.$emit('hide', e));
		this.$modalEl.on('hidden.bs.modal', e => this.$emit('hidden', e));
	},
	methods: {
		show() {
			this.$modalEl.modal('show');
		},
		hide() {
			this.$modalEl.modal('hide');
		},
	}
};
