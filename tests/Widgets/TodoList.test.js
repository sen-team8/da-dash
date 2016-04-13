import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import sinon from 'sinon';
import { shallow } from 'enzyme';
import TodoList from '../../app/Widgets/Todo/TodoList';

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

describe('Todo List component', () => {
  it('should have 1 ListGroup', () => {
    const wrapper = shallow(<TodoList todos={ testState.todos }
      actions={ sinon.spy() } showCompleted
    />);
    expect(wrapper.find('ListGroup')).to.have.length(1);
    console.log('Expected: expected 1 ListGroup');
    console.log('Actual: 1 ListGroup present ');
  });
});
