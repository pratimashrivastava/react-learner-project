import { UserActions } from '../actions';
import Immutable from 'immutable';

const { Map, fromJS, List } = Immutable;

const initialState = Map({
  currentUser: null,
  isLoading: false,
});

export default function (state = initialState, action) {

    switch(action.type){
        case UserActions.USER_LOG_IN:
        return state.set('isLoading', true);

        case UserActions.USER_LOGGED_IN:
        return state.set('currentUser', action.loggedinUserData)
        .set('isLoading', false);

        default: return state;
    }
}
