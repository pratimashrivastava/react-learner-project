import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { UserActions } from '../actions';
import user from './user';

const appReducer = combineReducers({
  user,
});

const rootReducer = (state, action) => {
  if (action.type === UserActions.LOGOUT) {
    state = Immutable.Map();
  }

  return appReducer(state, action)
};
export default rootReducer;
