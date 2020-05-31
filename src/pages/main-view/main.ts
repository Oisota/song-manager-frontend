import Vue from 'vue';

import SongTable from '../../components/song-table';

export default Vue.extend({
	name: 'main-view',
	components: {
		'song-table': SongTable,
	},
});
