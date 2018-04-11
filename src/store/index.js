import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import Immutable from 'immutable';
import rootSaga from '../sagas/user';
// import screenTracking from './screen-tracking';

const localStorageMiddleware = ({getState}) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(
      { 
        user: getState().get('user'),
        party: getState().get('party'),
      }
    ));
    return result;
  };
};

export default function configureStore(initialState) {
  initialState = initialState ? Immutable.fromJS(initialState) : Immutable.Map();
  let sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(
    applyMiddleware(
      sagaMiddleware, 
      localStorageMiddleware,
      // screenTracking
    ),
    // global.reduxNativeDevTools ?
    //   global.reduxNativeDevTools(/*options*/) :
    //   noop => noop
  );
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );
  
  // if (global.reduxNativeDevTools){
  //   global.reduxNativeDevTools.updateStore(store);
  // }
  sagaMiddleware.run(rootSaga);
  return store;
}