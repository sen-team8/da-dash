import { combineReducers } from 'redux';
import {
  CREATE_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from './actions';

const getId = (state) => {
  return state.todos.reduce((maxId, todoItem) => {
    return Math.max(todoItem.ID, maxId);
  }, -1) + 1;
};

const todoState ={
  todos: [{
    ID: 0,
    completed: false,
    TEXT: "First Todo",
  }, {
    ID: 1,
    completed: false,
    TEXT: "Second Todo",
  }],
};


function todo(state = todoState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, {
          ID: getId(state),
          completed: false,
          TEXT: action.TEXT,
        }],
      });
    case DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter((todoItem) => {
          return todoItem.ID !== action.ID;
        }),
      });
    case COMPLETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todoItem) => {
          return todoItem.ID === action.ID ? Object.assign({}, todoItem, { completed: !todoItem.completed }) : todoItem;
        }),
      });
    default: {
      return state;
    }
  }
}
const reducer = combineReducers(todo);
export default reducer;
