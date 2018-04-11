export const USER_LOG_IN = 'USER_LOG_IN';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const LOGOUT = 'LOGOUT';

export const userLogin = (credentials) => {
	return {
		type: USER_LOG_IN,
		credentials
	};
}

export const userLoggedin = (loggedinUserData) => {
	return {
		type: USER_LOGGED_IN,
		loggedinUserData
	};
}

export const logout = () => {
	return {
		type: LOGOUT,
	};
}
