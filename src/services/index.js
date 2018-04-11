import user from './user';
import game from './game';

export const service = {
  userLogin: user.userLogin,
  getGames: game.getGames,
}