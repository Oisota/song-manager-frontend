const LengthInput = require('../../length-input');

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
	components: {
		'length-input': LengthInput,
	},
	data() {
		return {
			beingEdited: false,
			localSong: {}
		}
	},
	created() {
		this.localSong = Object.assign({}, this.song);
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
			this.$store.dispatch('saveSong', {
				song: Object.assign({}, this.localSong),
				index: this.index
			});
		},
		cancel() {
			this.beingEdited = false;
			Object.assign(this.localSong, this.song);
		},
		delSong() {
			this.$store.dispatch('deleteSong', {
				id: this.song.id,
				index: this.index
			});
		}
	},
	filters: {
		formatLength(v) {
			const minutes = Math.floor(v / 60);
			const seconds = v % 60;
			return `${minutes}:${seconds}`;
		}
	}
};
