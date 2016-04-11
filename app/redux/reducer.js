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
  GO_TO_PATH,
  ADD_FAV,
  QUICK_SEARCH,
  LONG_SEARCH,
  SEARCH_ERROR,
} from './intranetActions';

import { CLEAR_CHAT, RECEIVED_CHAT } from './chatActions';

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

export function traverseIntranet(tree, path) {
  return path.reduce((prev, cur) => {
    return prev.get(cur);
  }, tree);
}
export function processLocation(loc, path) {
  return Immutable.fromJS(Array.from(loc.keys()).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).map(key => {
    return {
      isFile: loc.get(key) === 'file',
      data: loc.get(key),
      name: key,
      path: path.concat(key),
    };
  }));
}
export function intranet(state=initialIntranetState, action) {
  let newSearchObj;
  let tree;
  let location;
  let pathString;

  switch (action.type) {
    case REQUEST_INTRANET_TREE:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        location: null,
      });

    case RECEIVE_INTRANET_TREE:
      tree = Immutable.fromJS(action.tree);
      location = traverseIntranet(tree, state.pathString);
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        tree,
        timeStamp: action.timeStamp,
        location: processLocation(location, state.pathString),
      });

    case RECEIVE_INTRANET_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
        location: [],
        tree: null,
      });

    case GO_FORWARD:
      pathString = state.pathString.concat(action.location);
      return Object.assign({}, state, {
        pathString,
        location: traverseIntranet(state.tree, pathString),
      });
    case GO_TO_PATH:
      pathString = action.toPath || [];
      return Object.assign({}, state, {
        pathString,
        search: null,
        quickSearch: null,
        isSearching: false,
        location: processLocation(traverseIntranet(state.tree, pathString), pathString),
      });
    case ADD_FAV:
      return Object.assign({}, state, {
        fav: action.fav,
        location: traverseIntranet(state.tree, pathString),
      });
    case QUICK_SEARCH:
      newSearchObj = new Immutable.List();
      state.location.forEach(v => {
        if (v.get('name').toLowerCase().indexOf(action.searchToken.toLowerCase()) > -1) {
          newSearchObj = newSearchObj.push(v);
        }
      });
      return Object.assign({}, state, {
        quickSearch: newSearchObj,
        isSearching: true,
        searchError: null,
      });
    case LONG_SEARCH:
      // console.log(action.searchResults);
      return Object.assign({}, state, {
        search: state.isSearching ? action.searchResults : null,
        isSearching: false,
        searchError: null,
      });
    case SEARCH_ERROR:
      return Object.assign({}, state, {
        isSearching: false,
        search: null,
        quickSearch: null,
        searchError: action.error,
      });
    default:
      return state;
  }
}

function chat(state = chatState, action) {
  switch (action.type) {
    case RECEIVED_CHAT:
      return Object.assign({}, { chats: [...action.chatArray] });
    case CLEAR_CHAT:
      return Object.assign({}, {
        chats: [],
      });
    default:
      return state;
  }
}

export default combineReducers({ todo, login, intranet, chat });
