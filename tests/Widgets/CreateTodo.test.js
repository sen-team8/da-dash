import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
// import sinon from 'sinon';
import { shallow } from 'enzyme';
import CreateTodo from '../../app/Widgets/Todo/CreateTodo';
import { actionHandler } from '../../app/Widgets/Todo/index';
// import Todo from '../../app/Widgets/Todo/index';
import { Button, Input } from 'react-bootstrap';

describe('Create todo component', () => {
  // it('adding todo on button click', () => {
  //   const wrapper = shallow(<CreateTodo actions = {Todo.WrappedComponent.propTypes.actions} />);
  //   const input = wrapper.find(Input);
  //   input.value = 'TODO testing';
  //   wrapper.shallow('Button').simulate('click'); // Button is not simulating
  //   expect(wrapper.state().text).to.equal('TODO testing');
  // });

  it('should have 2 division', () => {
    const wrapper = shallow(<CreateTodo actions = {actionHandler} />);
    expect(wrapper.find('div')).to.have.length(2);
    console.log('Expected: expected 2 division');
    console.log('Actual: 2 division present ');
  });

  it('should have 1 form', () => {
    const wrapper = shallow(<CreateTodo actions = {actionHandler} />);
    expect(wrapper.find('form')).to.have.length(1);
    console.log('Expected: expected 1 form');
    console.log('Actual: 1 form present ');
  });

  it('should have 1 inputbox', () => {
    const wrapper = shallow(<CreateTodo actions = {actionHandler} />);
    expect(wrapper.find(Input)).to.have.length(1);
    console.log('Expected: expected 1 Input');
    console.log('Actual: 1 Input present ');
  });

  it('should have 1 Button', () => {
    const wrapper = shallow(<CreateTodo actions = {actionHandler} />);
    expect(wrapper.find(Button)).to.have.length(1);
    console.log('Expected: expected 1 Button');
    console.log('Actual: 1 Button present ');
  });

  it('should have 1 Icon', () => {
    const wrapper = shallow(<CreateTodo actions = {actionHandler} />);
    expect(wrapper.find('Icon')).to.have.length(1);
    console.log('Expected: expected 1 Icon');
    console.log('Actual: 1 Icon present ');
  });
});
