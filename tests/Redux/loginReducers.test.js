import { expect } from 'chai';
import { login } from '../../app/redux/reducer';

describe('logins reducer', () => {
  it('should return the initial login state', () => {
    expect(
     login(undefined, {})).to.deep.equal({
       STATUS: 'LOGGED_OUT',
       ERROR: '',
       ID: null,
       PASS: null,
     });
    console.log('Expected:initial login status: LOGGED_OUT is expected ');
    console.log('Actual: login status: LOGGED_OUT is received  ');
  });
  it('should return the LOGGED_IN', () => {
    expect(
     login(undefined, { type: 'LOGGED_IN', STATUS: 'LOGGED_IN' })).to.deep.equal({
       STATUS: 'LOGGED_IN',
       ERROR: '',
       ID: null,
       PASS: null,
     });
    console.log('Expected: login status: LOGGED_IN is expected ');
    console.log('Actual: login status: LOGGED_IN is received  ');
  });
  it('should return the LOGGING', () => {
    expect(
     login(undefined, { type: 'LOGGING', STATUS: 'LOGGING' })).to.deep.equal({
       STATUS: 'LOGGING',
       ERROR: '',
       ID: null,
       PASS: null,
     });
     console.log('Expected: login status: LOGGING is expected ');
     console.log('Actual: login status: LOGGING is received  ');
  });
  it('should return the LOGIN_ERROR', () => {
    expect(
     login(undefined, { type: 'LOGIN_ERROR', STATUS: 'LOGIN_ERROR', error: 'LOGIN_ERROR' })).to.deep.equal({
       STATUS: 'LOGIN_ERROR',
       ERROR: 'LOGIN_ERROR',
       ID: null,
       PASS: null,
     });
    console.log('Expected: login status: LOGGING_ERROR is expected ');
    console.log('Actual: login status: LOGGING_ERROR is received  ');
  });
  it('should return the SET_CREDENTIALS', () => {
    expect(
     login(undefined, { type: 'SET_CREDENTIALS', STATUS: 'LOGGED_OUT', error: '',
     id: 'Dushyant', pass: 'LetsLogin' })).to.deep.equal({
       STATUS: 'LOGGED_OUT',
       ERROR: '',
       ID: 'Dushyant',
       PASS: 'LetsLogin',
     });
    console.log('Expected: Expecting ID and PASS to be set with STATUS: LOGGED_OUT');
    console.log('Actual: Receiving ID and PASS is set with STATUS: LOGGED_OUT');
  });
});
