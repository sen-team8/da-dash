import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import sinon from 'sinon';
import { shallow } from 'enzyme';
import TodoItem from '../../app/Widgets/Todo/TodoItem';
import TodoList from '../../app/Widgets/Todo/TodoList';
import { Button, Input } from 'react-bootstrap';
import CreateTodo from '../../app/Widgets/Todo/CreateTodo';
import { actionHandler } from '../../app/Widgets/Todo/index';
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

describe('Todo Component Tests', () => {
  it('TodoItem should have 3 divisions on mount.', () => {
    const wrapper = shallow(<TodoItem todo={ { ID: 1, TEXT: '', completed: 'false' } }
      actions={ sinon.spy() } showCompleted
    />);
    expect(wrapper.find('div')).to.have.length(3);
  });

  it('TodoItem on mount should have 2 Button', () => {
    const wrapper = shallow(<TodoItem todo={ { ID: 1, TEXT: '', completed: 'false' } }
      actions={ sinon.spy() } showCompleted
    />);
    expect(wrapper.find(Button)).to.have.length(2);
  });
  it('TodoItem on mount should have 2 Icon', () => {
    const wrapper = shallow(<TodoItem todo={ { ID: 1, TEXT: '', completed: 'false' } }
      actions={ sinon.spy() } showCompleted
    />);
    expect(wrapper.find('Icon')).to.have.length(2);
  });
  it('TodoItem on mount should have ListGroupItem', () => {
    const wrapper = shallow(<TodoItem todo={ { ID: 1, TEXT: '', completed: 'false' } }
      actions={ sinon.spy() } showCompleted
    />);
    expect(wrapper.find('ListGroupItem')).to.have.length(1);
  });

  it('CreateTodo on mount should have 2 division', () => {
    const wrapper = shallow(<CreateTodo actions = {actionHandler} />);
    expect(wrapper.find('div')).to.have.length(2);
  });

  it('CreateTodo on mount should have 1 form', () => {
    const wrapper = shallow(<CreateTodo actions = {actionHandler} />);
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('CreateTodo on mount should have 1 inputbox', () => {
    const wrapper = shallow(<CreateTodo actions = {actionHandler} />);
    expect(wrapper.find(Input)).to.have.length(1);
  });

  it('CreateTodo on mount should have 1 button', () => {
    const wrapper = shallow(<CreateTodo actions = {actionHandler} />);
    expect(wrapper.find(Button)).to.have.length(1);
  });

  it('CreateTodo on mount should have 1 Icon', () => {
    const wrapper = shallow(<CreateTodo actions = {actionHandler} />);
    expect(wrapper.find('Icon')).to.have.length(1);
  });

  it('CreateTodo on mount should have 1 ListGroup', () => {
    const wrapper = shallow(<TodoList todos={ testState.todos }
      actions={ sinon.spy() } showCompleted
    />);
    expect(wrapper.find('ListGroup')).to.have.length(1);
  });
});
