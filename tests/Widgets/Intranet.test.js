import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { mount } from 'enzyme';
import { IntranetWidget } from '../../app/Widgets/Intranet';
import sinon from 'sinon';
import { Link } from 'react-router';
import Immutable from 'immutable';
import { traverseIntranet, processLocation } from '../../app/redux/reducer';
import Folder from '../../app/Widgets/Intranet/Folder';
import ListItem from '../../app/Widgets/Intranet/ListItem';
describe('<Intranet />', () => {
  const funcToGive = {
    getIntranet: sinon.spy(),
    goToPath: sinon.spy(),
    goForward: sinon.spy(),
    addToFav: sinon.spy(),
    searchFor: sinon.spy(),
  };
  const objToGive = {
    location: null,
    pathString: ['Academic'],
    timeStamp: '',
    fav: new Immutable.List([]),
    isDashboard: false,
    search: null,
  };
  const stateToGiveFolder = {
    goForward: sinon.spy(),
    showAttachment: sinon.spy(),
    goToPath: sinon.spy(),
    setSearch: sinon.spy(),
    dashboard: true,
    fav: new Immutable.List([]),
  };
  const Location = traverseIntranet(Immutable.fromJS({ Academic: {}, Lecture: {} }), ['Academic']);

  it('should call get intranet on mount', () => {
    const foo = mount(<IntranetWidget {...funcToGive} {...objToGive} />);
    expect(funcToGive.getIntranet.calledOnce).to.equal(true);
  });

  it('should show intranet-loading when a network request is in background', () => {
    objToGive.location = null;
    const foo = mount(<IntranetWidget {...funcToGive} {...objToGive} />);
    expect(foo.find('.intranet-loading')).to.have.length(1);
  });

  it('should behave correctly if pathString prop is null or undefined', () => {
    objToGive.pathString = null;
    const foo = mount(<IntranetWidget {...funcToGive} {...objToGive} />);
    expect(foo.find('.intranet-loading')).to.have.length(1);
  });

  it('should behave correctly if location prop is null or undefined', () => {
    objToGive.location = undefined;
    const foo = mount(<IntranetWidget {...funcToGive} {...objToGive} />);
    expect(foo.find('.intranet-loading')).to.have.length(1);
  });

  it('should behave correctly if timeStamp prop is null or undefined and location not null', () => {
    objToGive.timeStamp = null;
    objToGive.isDashboard = false;
    objToGive.pathString = ['Academic'];
    objToGive.location = processLocation(traverseIntranet(Immutable.fromJS({ Academic: { MSC: {} }, Lecture: {} }), ['Academic']), ['Academic']);
    const foo = mount(<IntranetWidget {...funcToGive} {...objToGive} />);
    expect(foo.find(Folder)).to.have.length(1);
  });

  it('<Folder /> should not show  ListItem component at Folder.js:65 when search prop is null or undefined', () => {
    objToGive.location = Location;
    stateToGiveFolder.location = processLocation(Location, objToGive.pathString);
    objToGive.pathString = ['Academic'];
    const foo = mount(<Folder {...stateToGiveFolder} />);
    expect(foo.find(ListItem)).to.have.length(1);
  });
});
