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
  goToStringPath,
}from './intranetActions';

import { getChat, sendChat, getUpdatedChat } from './chatActions';

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
  goToStringPath,
  getChat,
  sendChat,
  getUpdatedChat,
};
