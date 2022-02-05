import * as actionTypes from './actionTypes';

const defaultState = {
  todoList: [],
};

export default (state = defaultState, action) => {
  if(action.type === actionTypes.UPDATE_TODO_LIST){
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList = action.newData
    return newState
  }
  return state;
};