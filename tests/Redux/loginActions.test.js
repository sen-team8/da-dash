import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../app/redux/loginActions';
import { expect } from 'chai';
const user ={
  id: '201301030@daiict.ac.in',
  pass: 'dawebmailsucks',
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async login actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('Get login', function foo(done) {
    this.timeout(10000);

    const expectedActions = [
      { type: 'LOGGING' },
      { type: 'LOGGED_IN' },
    ];

    const store = mockStore({ reducer: { intranet: {} } });
    store.dispatch(actions.verifyUser(user))
     .then(() => { // return of async actions
       expect(store.getActions()).to.deep.equal(expectedActions);
     })
     .then(done)
     .catch(done);
  });
});
