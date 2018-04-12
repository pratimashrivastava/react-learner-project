import { take, call, put, fork } from 'redux-saga/effects';
import { GameActions } from '../actions';
import { service } from '../services';

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

function* watchGetDetails() {
	// while (IS_TRUE) {
	// 	let action = yield take(GameActions.GET_DETAILS);
	// 	let { json, response } = yield call(service.getDetails, action.participantId);
	// 	if (response.ok && json) {
	// 		yield put(GameActions.setDetails(json));
	// 	}
	// }
}

export default function* root() {
	yield fork(watchGetGames);
	yield fork(watchGetDetails);
}