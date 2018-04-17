import { api } from './api';

export default {
	getGames() {
		let endpoint = 'user/activities?version=' + 2;;
		return api('GET', endpoint);
	},

	getDetails(participantId) {
		let endpoint = 'quiz/' + participantId + '?offset=0&limit=5&ignoreUpdate=false';
		return api('GET', endpoint);
	},

	getTopics(userparam) {
		let endpoint = 'topics?'  + 'participantId=' + userparam + '&filterLocked=true&customQuestions=false';
    return api('GET', endpoint);
	}
}