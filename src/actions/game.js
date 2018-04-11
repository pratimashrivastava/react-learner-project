export const GET_GAMES = 'GET_GAMES';
export const SET_GAMES_ARRAY = 'SET_GAMES_ARRAY';

export const getGames = (token) => {
	return {
		type: GET_GAMES,
		token,
	};
}

export const setGamesArray = (gamesArray) => {
	return {
		type: SET_GAMES_ARRAY,
		gamesArray,
	};
}