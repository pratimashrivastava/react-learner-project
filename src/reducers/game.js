import { GameActions } from '../actions';
import Immutable from 'immutable';

const { Map, fromJS } = Immutable;

const initialState = Map({
	gamesArray: [],
	isLoading: false,
	gameDetails: null,
	categories: [],
});

export default function (state = initialState, action) {

	switch (action.type) {

		case GameActions.SET_GAMES_ARRAY:
			return state.set('gamesArray', fromJS(action.gamesArray))
				.set('isLoading', false);

		case GameActions.SET_GAME_DETAILS:
			return state.set('gameDetails', fromJS(action.gameDetails))
				.set('isLoading', false);

		case GameActions.SET_TOPICS:
			return state.set('categories', action.categories)
				.set('isLoading', false);

		default: return state;
	}
}
