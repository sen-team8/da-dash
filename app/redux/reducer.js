import { combineReducers } from 'redux';

import {
  CREATE_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
} from './todoActions';

import {
  LOGGED_IN,
  LOGGED_OUT,
  LOGGING,
  LOGIN_ERROR,
} from './loginActions';

const initialLoginState = {
  STATUS: LOGGED_OUT,
  ID: null,
  PASS: null,
};

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

    case EDIT_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todoItem) => {
          return todoItem.ID === action.TODO.ID ? Object.assign({}, todoItem, { TEXT: action.TODO.TEXT }) : todoItem;
        }),
      });

    default: {
      return state;
    }
  }
}

function login(state = initialLoginState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        STATUS: action.type,
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        STATUS: action.type,
      });
    case LOGGING:
      return Object.assign({}, state, {
        STATUS: action.type,
        ID: action.id,
        PASS: action.pass,
      });
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        STATUS: action.type,
      });
    default:
      return state;
  }
}

// const reducer= combineReducers({ todo });
export default combineReducers({ todo, login });
