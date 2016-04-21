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
  searchForIntranet,
} from './intranetActions';

import {
  getInbox,
  getEmail,
  searchForWebmail,
  nullTheEmail,
} from './webmailActions';

import { sendChat, receivedChat, clearChat } from './chatActions';

import { addToWidgets } from './dashboardActions';

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
  searchForIntranet,
  sendChat,
  clearChat,
  receivedChat,

  getInbox,
  getEmail,
  searchForWebmail,
  nullTheEmail,

  getProfileName,
  setProfileName,
  setProfileId,

  addToWidgets,
};
