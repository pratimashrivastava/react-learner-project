import { take, call, put, fork } from 'redux-saga/effects';
import { GameActions } from '../actions';
import { service } from '../services';
import GLOBALS from '../components/globals'

const IS_TRUE = true;

function* watchGetGames() {
	while (IS_TRUE) {
		let action = yield take(GameActions.GET_GAMES);
		let { json, response } = yield call(service.getGames, action.token);
		if (response.ok && json) {
			yield put(GameActions.setGamesArray(json.doc));
		}
	}
}


export default function* root() {
	yield fork(watchGetGames);
}