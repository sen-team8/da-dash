
import { expect } from 'chai';
import { intranet, processLocation, traverseIntranet } from '../../app/redux/reducer';
import Immutable from 'immutable';


const initialState = {
  isFetching: false,
  path: [],
  pathString: [],
  tree: null,
  error: null,
  location: null,
  timeStamp: null,
  fav: [],
};

describe('intranet actions', () => {
  it('should request a tree', () => {
    expect(
    intranet(initialState, { type: 'REQUEST_INTRANET_TREE' })).to.deep.equal(
      {
        isFetching: true,
        error: null,
        location: null,
        timeStamp: null,
        fav: [],
        path: [],
        pathString: [],
        tree: null,
      }
    );
  });


  it('should receive an error', () => {
    expect(
    intranet(initialState, { type: 'RECEIVE_INTRANET_ERROR',
    error: 'There was an error due to something' })).to.deep.equal(
      {
        isFetching: false,
        error: 'There was an error due to something',
        location: [],
        tree: null,
        timeStamp: null,
        fav: [],
        path: [],
        pathString: [],
      }
    );
  });

  it('should perform a search error', () => {
    const previousstate = {
      isSearching: false,
      search: null,
      searchError: null,
      isFetching: false,
      quickSearch: null,
      path: [],
      pathString: [],
      tree: null,
      error: null,
      location: null,
      timeStamp: null,
      fav: [],
    };
    expect(
    intranet(previousstate, { type: 'SEARCH_ERROR',
    error: 'There was an error due to search' })).to.deep.equal(
      {
        isSearching: false,
        search: null,
        searchError: 'There was an error due to search',
        isFetching: false,
        quickSearch: null,
        path: [],
        pathString: [],
        tree: null,
        error: null,
        location: null,
        timeStamp: null,
        fav: [],
      }
    );
  });
  it('go to a path on a tree', () => {
    const tree = { Academic: {}, Lecture: { 'Aditi Nath Sarkar': {} } };
    const pathString = ['Lecture', 'Aditi Nath Sarkar'];
    const newLocation = processLocation(
      traverseIntranet(
        Immutable.fromJS(tree), pathString
      ),
         pathString
     );
    const previousLocation = processLocation(
      traverseIntranet(
        Immutable.fromJS(tree), []
      ),
        []
     );
    const teststate = {
      isFetching: false,
      path: [],
      pathString: [],
      tree: Immutable.fromJS(tree),
      error: null,
      search: null,
      location: previousLocation,
      timeStamp: null,
      fav: [],
      isSearching: false,
      quickSearch: null,
    };
    expect(
    intranet(teststate, { type: 'GO_TO_PATH', toPath: pathString })).to.deep.equal(
      {
        isFetching: false,
        isSearching: false,
        quickSearch: null,
        path: [],
        tree: Immutable.fromJS(tree),
        error: null,
        timeStamp: null,
        fav: [],
        search: null,
        pathString,
        location: newLocation,
      });
  });
  it('should recieve the intranet tree', () => {
    const tree = { Academic: {}, Lecture: { 'Aditi Nath Sarkar': {} } };
    const pathString = [];
    expect(
      intranet(initialState, { type: 'RECEIVE_INTRANET_TREE', timeStamp: '23 minutes',
      tree: Immutable.fromJS(tree) })).to.deep.equal(
      {
        isFetching: false,
        path: [],
        tree: Immutable.fromJS(tree),
        error: null,
        timeStamp: '23 minutes',
        fav: [],
          // search: null,
        pathString: [],
        location: processLocation(Immutable.fromJS(tree), pathString),
      });
    console.log('Expected: intranet state reflects that intranet tree is recieved.');
    console.log('Actual: intranet state reflects that intranet tree is recieved.');
  });
/**  it('should perform a long search', () => {
    const testState = {
      isSearching: false,
      search: null,
      searchError: null,
      isFetching: false,
      path: [],
      pathString: [],
      tree: null,
      error: null,
      location: null,
      timeStamp: null,
      fav: [],
    };
    expect(
    intranet(testState, { type: 'LONG_SEARCH',
    searchResults: [{ name: 'Academic Calendar 2015-16R.pdf', path: {}, isFile: true },{}] })).to.deep.equal(
      {
        isSearching: false,
        search: [{ name: 'Academic Calendar 2015-16R.pdf', path: {}, isFile: true },{}],
        searchError: null,
        isFetching: false,
        path: [],
        pathString: [],
        tree: null,
        error: null,
        location: null,
        timeStamp: null,
        fav: [],
      }
    );
  });**/
});
