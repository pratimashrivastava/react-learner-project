import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { UserActions } from '../actions';
import user from './user';
import game from './game';

const appReducer = combineReducers({
  user,
  game
});

const rootReducer = (state, action) => {
  if (action.type === UserActions.LOGOUT) {
    state = Immutable.Map();
  }

  return appReducer(state, action)
};
export default rootReducer;
