import { expect } from 'chai';
import { todo } from '../../app/redux/reducer';

const testState = {
  todos: [{
    ID: 0,
    completed: false,
    TEXT: 'This is a TODO!',
  },
    {
      ID: 1,
      completed: true,
      TEXT: 'This is another TODO!',
    },
],
};

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      todo(undefined, {}).todos
    ).to.deep.equal([
      {
        ID: 0,
        completed: false,
        TEXT: 'First Todo',
      }, {
        ID: 1,
        completed: false,
        TEXT: 'Second Todo',
      },
    ]);
    console.log('Expected: initial state is expected');
    console.log('Actual: initial state is received');
  });

  it('should add and return an appended list', () => {
    expect(
      todo({ todos: [] }, { type: 'CREATE_TODO', TEXT: 'NEW TODO' }).todos
    ).to.deep.equal([
      {
        ID: 0,
        completed: false,
        TEXT: 'NEW TODO',
      },
    ]);
    console.log('Expected: NEW TODO is expected to be appednded to present todos');
    console.log('Actual: NEW TODO is  appednded to present todos');
  });

  it('should delete the item from the list', () => {
    expect(
      todo(undefined, { type: 'DELETE_TODO', ID: 1 }).todos
    ).to.deep.equal([
      {
        ID: 0,
        completed: false,
        TEXT: 'First Todo',
      },
    ]);
    console.log('Expected: First Todo is expected to be deleted from present todos');
    console.log('Actual: First Todo is deleted from present todos');
  });

  it('It should mark the TODO as completed', () => {
    expect(
      todo(undefined, { type: 'COMPLETE_TODO', ID: 1 }).todos
    ).to.deep.equal([
      {
        ID: 0,
        completed: false,
        TEXT: 'First Todo',
      }, {
        ID: 1,
        completed: true,
        TEXT: 'Second Todo',
      },
    ]);
    console.log('Expected:Second Todo is expected to be marked completed');
    console.log('Actual: Second Todo is marked completed');
  });

  it('Test case executing Delete and Create', () => {
    expect(
    todo(todo(testState, { type: 'CREATE_TODO', TEXT: 'Yahoo!' }), { type: 'DELETE_TODO', ID: 1 }).todos
  ).to.deep.equal([{
    ID: 0,
    completed: false,
    TEXT: 'This is a TODO!',
  },
  {
    ID: 2,
    completed: false,
    TEXT: 'Yahoo!',
  },
]);
    console.log('Expected: Yahoo! is expected to be added and delete Second Todo ');
    console.log('Actual: Yahoo! is expected to be added and delete Second Todo ');
  });
});
