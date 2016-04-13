import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import sinon from 'sinon';
import { mount } from 'enzyme';
import Navbar from '../../app/Components/Navbar';

describe('<Navbar />', () => {
  it('allows us to set props', () => {
    const toggleSpy = sinon.spy();
    const wrapper = mount(<Navbar sidebarOpen toggleSideBar={toggleSpy} />);
    expect(wrapper.props().sidebarOpen).to.equal(true);
    expect(wrapper.props().toggleSideBar).to.equal(toggleSpy);

    console.log('Expected: ', wrapper.props().sidebarOpen);
    console.log('Actual: ', true);

    console.log('Expected: ', wrapper.props().toggleSideBar);
    console.log('Actual: ', toggleSpy);
  });
});
