/* global define, it, describe, wrapper */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Button } from 'react-bootstrap';
import TodoItem from '../app/Widgets/ToDo/TodoItem';
describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(shallow(<TodoItem todo={{ TEXT: 'Something' }} actions={function() {return null; }} showCompleted />).contains(<div className="yolo"></div>)).to.equal(true);
  });
});
