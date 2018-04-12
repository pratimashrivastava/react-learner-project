import { fork } from 'redux-saga/effects';
// import { UserActions } from '../actions';
// import { service } from '../services';
import userSagas from './user';
import gameSagas from './game';

export default function* root() {
	yield [
		fork(userSagas),
		fork(gameSagas),
	];
}