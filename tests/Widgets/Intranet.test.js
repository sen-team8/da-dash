import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
// import sinon from 'sinon';
import { mount } from 'enzyme';
import { Home } from '../../app/Components/Home';

describe('<Intranet />', () => {
  it('should call get intranet on mount');
  it('should show intranet-loading when a network request is in backgorund');
  it('should behave corrently if pathString prop is null or undefined');
  it('should behave corrently if location prop is null or undefined');
  it('should behave corrently if timeStamp prop is null or undefined');
  it('should behave correctly if search prop is null or undefined');
});
