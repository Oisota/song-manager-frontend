module.exports = {
	name: 'song-row',
	props: {
		song: {
			type: Object,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		}
	},
	data() {
		return {
			beingEdited: false,
		}
	},
	methods: {
		edit() {
			this.beingEdited = true;
			this.$nextTick(function () {
				this.$el.querySelector('.song-name').children[0].focus();
			});
		},
		update() {
			this.beingEdited = false;
		},
		cancelUpdate() {
			this.beingEdited = false;
		}
	}
};
