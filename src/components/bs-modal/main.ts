import Vue from 'vue';
import $ from 'jquery';

export default Vue.extend({
	name: 'bs-modal',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			unreactive: {} as any
		}
	},
	mounted() {
		this.unreactive.$modalEl = $(this.$el);
		this.unreactive.$modalEl.on('show.bs.modal', (e: Event) => this.$emit('show', e));
		this.unreactive.$modalEl.on('shown.bs.modal', (e: Event) => this.$emit('shown', e));
		this.unreactive.$modalEl.on('hide.bs.modal', (e: Event) => this.$emit('hide', e));
		this.unreactive.$modalEl.on('hidden.bs.modal', (e: Event) => this.$emit('hidden', e));
	},
	methods: {
		show() {
			this.unreactive.$modalEl.modal('show');
		},
		hide() {
			this.unreactive.$modalEl.modal('hide');
		},
	}
});
