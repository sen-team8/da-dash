import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import sinon from 'sinon';
import { shallow } from 'enzyme';
import TodoItem from '../../app/Widgets/Todo/TodoItem';
import { Button } from 'react-bootstrap';
describe('Todo Item component', () => {
  it('should have 3 division', () => {
    const wrapper = shallow(<TodoItem todo={ { ID: 1, TEXT: '', completed: 'false' } }
      actions={ sinon.spy() } showCompleted
    />);
    expect(wrapper.find('div')).to.have.length(3);
    console.log('Expected: expected 3 division');
    console.log('Actual: 3 division present ');
  });

  it('should have 2 Button', () => {
    const wrapper = shallow(<TodoItem todo={ { ID: 1, TEXT: '', completed: 'false' } }
      actions={ sinon.spy() } showCompleted
    />);
    expect(wrapper.find(Button)).to.have.length(2);
    console.log('Expected: expected 2 Button');
    console.log('Actual: 2 Button present ');
  });
  it('should have 2 Icon', () => {
    const wrapper = shallow(<TodoItem todo={ { ID: 1, TEXT: '', completed: 'false' } }
      actions={ sinon.spy() } showCompleted
    />);
    expect(wrapper.find('Icon')).to.have.length(2);
    console.log('Expected: expected 2 Icon');
    console.log('Actual: 2 Icon present ');
  });
  it('should have ListGroupItem', () => {
    const wrapper = shallow(<TodoItem todo={ { ID: 1, TEXT: '', completed: 'false' } }
      actions={ sinon.spy() } showCompleted
    />);
    expect(wrapper.find('ListGroupItem')).to.have.length(1);
    console.log('Expected: expected 1 ListGroupItem');
    console.log('Actual: 1 ListGroupItem present ');
  });
});
