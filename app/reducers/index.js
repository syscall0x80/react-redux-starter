import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import counter from './counter';
import github from './github';

const rootReducer = combineReducers({
  router,
  counter,
  github,
});

export default rootReducer;
