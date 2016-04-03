/* global define, it, describe */
import expect from 'expect';
import * as actions from '../app/redux/todoActions';
describe('todo actions', () => {
  it('createTodo should create ADD_TODO action', () => {
    expect(actions.createTodo('Use Redux')).toEqual({
      type: actions.CREATE_TODO,
      TEXT: 'Use Redux',
    });
  });

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(actions.deleteTodo(1)).toEqual({
      type: actions.DELETE_TODO,
      ID: 1,
    });
  });

  it('editTodo should create EDIT_TODO action', () => {
    expect(actions.editTodo('Use Redux everywhere', 1)).toEqual({
      type: actions.EDIT_TODO,
      TODO: { TEXT: 'Use Redux everywhere', ID: 1 },
    });
  });

  it('completeTodo should create COMPLETE_TODO action', () => {
    expect(actions.completeTodo(1)).toEqual({
      type: actions.COMPLETE_TODO,
      ID: 1,
    });
  });
});
