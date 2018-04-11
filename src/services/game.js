import { api } from './api';

export default {
	getGames() {
		let endpoint = 'user/activities?version=' + 2;;
		return api('GET', endpoint);
	}
}