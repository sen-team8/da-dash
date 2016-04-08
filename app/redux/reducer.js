import { combineReducers } from 'redux';
import Immutable from 'immutable';

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
  SET_CREDENTIALS,
} from './loginActions';

import {
  REQUEST_INTRANET_TREE,
  RECEIVE_INTRANET_TREE,
  RECEIVE_INTRANET_ERROR,
  GO_FORWARD,
  GOTO_STRINGPATH,
  ADD_FAV,
} from './intranetActions';

import { ALL_CHAT, UPDATE_CHAT } from './chatActions';

const initialLoginState = {
  STATUS: LOGGED_OUT,
  ERROR: '',
  ID: null,
  PASS: null,
};

const getId = (state) => {
  return state.todos.reduce((maxId, todoItem) => {
    return Math.max(todoItem.ID, maxId);
  }, -1) + 1;
};

const todoState = {
  todos: [{
    ID: 0,
    completed: false,
    TEXT: 'First Todo',
  }, {
    ID: 1,
    completed: false,
    TEXT: 'Second Todo',
  }],
};

const chatState = {
  chats: [{
    id: 'First',
    message: 'message',
    time: '01',
  },
  ],
};


export function todo(state = todoState, action) {
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

export function login(state = initialLoginState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        STATUS: action.type,
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        STATUS: action.type,
        ID: null,
        PASS: null,
      });
    case LOGGING:
      return Object.assign({}, state, {
        STATUS: action.type,
      });
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        STATUS: action.type,
        ERROR: action.error,
      });
    case SET_CREDENTIALS:
      return Object.assign({}, state, {
        STATUS: LOGGED_OUT,
        ID: action.id,
        PASS: action.pass,
      });
    default:
      return state;
  }
}

const initialIntranetState = {
  isFetching: false,
  path: [],
  pathString: [],
  tree: null,
  error: null,
  location: null,
  timeStamp: null,
  fav: [],
};

function traverseIntranet(tree, path) {
  // return tree;
  return path.reduce((prev, cur) => {
    return prev.get(cur);
  }, tree);
}

function intranet(state=initialIntranetState, action) {
  switch (action.type) {
    case REQUEST_INTRANET_TREE:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        location: null,
      });

    case RECEIVE_INTRANET_TREE:
      const tree = Immutable.fromJS(action.tree);
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        tree,
        timeStamp: action.timeStamp,
        location: Array.isArray(state.pathString) && state.pathString.length > 0 && state.pathString[0]
          ? traverseIntranet(tree, state.pathString) : tree,
      });

    case RECEIVE_INTRANET_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
        location: [],
        tree: null,
      });

    case GO_FORWARD:
      let pathString = state.pathString.concat(action.location);
      return Object.assign({}, state, {
        pathString,
        location: traverseIntranet(state.tree, pathString),
      });

    case GOTO_STRINGPATH:
      pathString = action.toPath;
      return Object.assign({}, state, {
        pathString,
        location: traverseIntranet(state.tree, pathString),
      });
    case ADD_FAV:
      return Object.assign({}, state, {
        fav: action.fav,
        location: traverseIntranet(state.tree, pathString),
      });
    default:
      return state;
  }
}

function chat(state = chatState, action) {
  switch (action.type) {
    case ALL_CHAT:
      return Object.assign({}, state, {
        chats: [...state.chats, ...action.chat],
      });
    case UPDATE_CHAT:
      return Object.assign({}, state, {
        chats: [...state.chats, action.chat],
      });
    default:
      return state;
  }
}

export default combineReducers({ todo, login, intranet, chat });
