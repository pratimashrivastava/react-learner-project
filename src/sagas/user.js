import { take, call, put, fork } from 'redux-saga/effects';
import { UserActions } from '../actions';
import { service } from '../services';
import GLOBALS from '../components/globals'

const IS_TRUE = true;

function* watchUserLogin() {
	while (IS_TRUE) {
		let action = yield take(UserActions.USER_LOG_IN);
		let { json, response } = yield call(service.userLogin, action.credentials);
		if (response.ok && json) {
			localStorage.setItem('token', json.authorizeKey);
			yield put(UserActions.userLoggedin(json));
		}
	}
}


export default function* root() {
	yield fork(watchUserLogin);
}