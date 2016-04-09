import {
  createTodo,
  deleteTodo,
  completeTodo,
  editTodo,
} from './todoActions';

import {
  setLogging,
  setLogout,
  setLoggedIn,
  setLoginError,
  verifyUser,
  setCredentials,
} from './loginActions';

import {
  requestIntranetTree,
  receiveIntranetTree,
  receiveIntranetError,
  getIntranet,
  goForward,
  goToPath,
  addToFav,
  searchFor,
} from './intranetActions';

import { sendChat, getUpdatedChat, clearChat } from './chatActions';

export const actions = {
  createTodo,
  deleteTodo,
  completeTodo,
  editTodo,

  setLogging,
  setLogout,
  setLoggedIn,
  setLoginError,
  verifyUser,
  setCredentials,

  requestIntranetTree,
  receiveIntranetTree,
  receiveIntranetError,
  getIntranet,
  goForward,
  goToPath,
  addToFav,
  searchFor,

  sendChat,
  getUpdatedChat,
  clearChat,
};
