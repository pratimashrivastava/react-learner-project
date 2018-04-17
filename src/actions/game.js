export const GET_GAMES = 'GET_GAMES';
export const SET_GAMES_ARRAY = 'SET_GAMES_ARRAY';
export const GET_GAME_DETAILS = 'GET_GAME_DETAILS';
export const SET_GAME_DETAILS ='SET_GAME_DETAILS';
export const GET_TOPICS = 'GET_TOPICS';
export const SET_TOPICS = 'SET_TOPICS';

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

export const getDetails = (participantId) => {
	return {
		type: GET_GAME_DETAILS,
		participantId,
	};
}

export const setDetails = (gameDetails) => {
	return {
		type: SET_GAME_DETAILS,
		gameDetails,
	};
}

export const getTopics = (participantId) => {
	return {
		type: GET_TOPICS,
		participantId
	}
}

export const setTopics = (categories) => {
	return {
		type: SET_TOPICS,
		categories
	}
}