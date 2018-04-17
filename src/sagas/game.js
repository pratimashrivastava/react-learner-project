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
	while (IS_TRUE) {
		let action = yield take(GameActions.GET_GAME_DETAILS);
		let { json, response } = yield call(service.getDetails, action.participantId);
		if (response.ok && json) {
			yield put(GameActions.setDetails(json));
		}
	}
}

function* watchGetTopics() {
	while (IS_TRUE) {
		let action = yield take(GameActions.GET_TOPICS);
		let { json, response } = yield call(service.getTopics, action.participantId);
		if (response.ok && json) {
			yield put(GameActions.setTopics(json.topics));
		}
	}
}

export default function* root() {
	yield fork(watchGetGames);
	yield fork(watchGetDetails);
	yield fork(watchGetTopics);
}