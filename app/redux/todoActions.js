export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';


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
