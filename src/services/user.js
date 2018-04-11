import { api } from './api';

export default {
	userLogin(credentials) {
		let endpoint = 'users/auth';
		return api('POST', endpoint, credentials);
	}
}