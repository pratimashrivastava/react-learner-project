import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
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