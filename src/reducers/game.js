import { UserActions, GameActions } from '../actions';
import Immutable from 'immutable';

const { Map, fromJS, List } = Immutable;

const initialState = Map({
	gamesArray: [],
	isLoading: false,
});

export default function (state = initialState, action) {

	switch (action.type) {

		case GameActions.SET_GAMES_ARRAY:
			return state.set('gamesArray', fromJS(action.gamesArray))
				.set('isLoading', false);

		default: return state;
	}
}
