import { api } from './api';

export default {
	getGames() {
		let endpoint = 'user/activities?version=' + 2;;
		return api('GET', endpoint);
	},

	getDetails(opts) {
		let endpoint = 'quiz/' + opts.participantId + '?offset=0';
		return api('GET', endpoint);
	}
}