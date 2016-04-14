import {
  createTodo,
  deleteTodo,
  completeTodo,
  editTodo,
  getTodos,
  setTodos,
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

import {
  getInbox,
  getEmail,
} from './webmailActions';

import { sendChat, receivedChat, clearChat } from './chatActions';
import { getProfileName, setProfileName, setProfileId } from './profileActions';

export const actions = {
  createTodo,
  deleteTodo,
  completeTodo,
  editTodo,
  getTodos,
  setTodos,

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
  clearChat,
  receivedChat,

  getInbox,
  getEmail,

  getProfileName,
  setProfileName,
  setProfileId,
};
