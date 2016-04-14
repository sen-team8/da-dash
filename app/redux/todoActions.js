import { receiveTodos, saveTodos } from '../network/todo';

export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const FILL_TODOS = 'FILL_TODOS';
export const GETTING_TODOS = 'GETTING_TODOS';

export function createTodo(text) {
  return {
    type: CREATE_TODO,
    TEXT: text,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    ID: id,
  };
}
export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    ID: id,
  };
}

export function editTodo(text, id) {
  return {
    type: EDIT_TODO,
    TODO: { TEXT: text, ID: id },
  };
}

function fillTodos(todos) {
  return {
    type: FILL_TODOS,
    todos,
  };
}
function gettingTodos() {
  return {
    type: GETTING_TODOS,
  };
}

export function getTodos() {
  return dispatch => {
    dispatch(gettingTodos);
    return receiveTodos()
      .then((todos) => dispatch(fillTodos(todos)));
  };
}

export function setTodos(todos) {
  return dispatch => {
    return saveTodos(todos)
      .then((todo) => dispatch(getTodos));
  };
}
