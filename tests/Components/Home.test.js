import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import sinon from 'sinon';
import { mount } from 'enzyme';
import Home from '../../app/Components/Home';

describe('<Home />', () => {
  it('clicking overlay should change state', () => {
    const wrapper = mount(
      <Home />
    );
    wrapper.find('.overlay').simulate('click');
    expect(wrapper.state().sidebarOpen).to.equal(true);
    wrapper.find('.overlay').simulate('click');
    expect(wrapper.state().sidebarOpen).to.equal(false);
  });
});
