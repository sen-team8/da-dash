import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../app/redux/intranetActions';
import { expect } from 'chai';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async todo actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('get intranet', (done) => {
    nock('https://bangle.io/api')
      .get('/intranet')
      .reply(200, {
        Academic: {},
        Lecture: {},
        timeStamp: null,
      });

    const expectedActions = [
      { type: 'REQUEST_INTRANET_TREE' },
      { type: 'RECEIVE_INTRANET_TREE',
        tree: { Academic: {}, Lecture: {} },
        timeStamp: 'NaN hours ' },
    ];
    const store = mockStore({ reducer: { intranet: {} } });

    store.dispatch(actions.getIntranet())
     .then(() => { // return of async actions
       expect(store.getActions()).to.deep.equal(expectedActions);
     })
     .then(done) // test passed
     .catch(done); // test failed
  });
});
