import { api } from './api';

export default {
	userLogin(credentials) {
    console.log('USER_LOG_IN',credentials );
		let endpoint = 'users/auth';
		return api('POST', endpoint, credentials);
	}
}