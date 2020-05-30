import Vue from 'vue';
import pick from 'lodash/pick';

import BSModal from 'Components/bs-modal';

interface Song {
	id: number | null;
	name: string;
	artist: string;
	album: string;
	genre: string;
	length: number;
	index: number | null;
}

interface Data {
	song: Song;
}

export default Vue.extend({
	name: 'song-table',
	components: {
		'bs-modal': BSModal,
	},
	data(): Data {
		return {
			song: {
				id: null,
				name: '',
				artist: '',
				album: '',
				genre: '',
				length: 0,
				index: null,
			}
		};
	},
	created() {
		this.loadSongs();
	},
	computed: {
		songs() {
			return this.$store.state.songs.songs;
		},
		addEditTitle(): string {
			return this.song.id ? 'Edit Song' : 'Add Song';
		},
	},
	methods: {
		loadSongs() {
			this.$store.dispatch('songs/load');
		},
		async createSong() {
			const payload = pick(this.song, ['name', 'artist', 'album', 'genre', 'length']);
			await this.$store.dispatch('songs/create', payload);
			(this.$refs.editModal as any).hide();
		},
		async updateSong() {
			const payload = pick(this.song, ['id', 'name', 'artist', 'album', 'genre', 'length']);
			await this.$store.dispatch('songs/update', payload);
			(this.$refs.editModal as any).hide();
		},
		async deleteSong() {
			await this.$store.dispatch('songs/delete', this.song);
			(this.$refs.deleteModal as any).hide();
		},
		saveSong() {
			if (this.song.id) {
				this.updateSong();
			} else {
				this.createSong();
			}
		},
		add() {
			(this.$refs.editModal as any).show();
		},
		edit(index: number) {
			this.setSong(index);
			(this.$refs.editModal as any).show();
		},
		remove(index: number) {
			this.setSong(index);
			(this.$refs.deleteModal as any).show();
		},
		setSong(index: number) {
			const song = this.songs[index];
			this.song.id = song.id;
			this.song.name = song.name;
			this.song.artist = song.artist;
			this.song.album = song.album;
			this.song.genre = song.genre;
			this.song.length = song.length;
			this.song.index = index;
		},
		resetSong() {
			this.song.id = null,
			this.song.name = '';
			this.song.artist = '';
			this.song.album = '';
			this.song.genre = '';
			this.song.length = 0;
			this.song.index = null;
		},
		cancelEdit() {
			(this.$refs.editModal as any).hide();
		},
		cancelDelete() {
			(this.$refs.deleteModal as any).hide();
		},
		focusForm() {
			(this.$refs.songNameInput as HTMLElement).focus(); // focus first form input
		},
		focusDeleteButton() {
			(this.$refs.deleteButton as HTMLElement).focus(); // focus first form input
		},
	}
});
