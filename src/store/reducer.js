import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer }  from '../home/store/index.js';

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer