export default {
	name: 'length-input',
	props: {
		value: {
			type: Number,
			required: true,
		}
	},
	computed: {
		minutes() {
			return Math.floor(this.value / 60) || '';
		},
		seconds() {
			return this.value % 60 || '';
		}
	},
	methods: {
		updateLength() {
			const l = Number(this.$refs.minuteInput.value) * 60 + Number(this.$refs.secondInput.value);
			this.$emit('input', l);
		}
	}
};
