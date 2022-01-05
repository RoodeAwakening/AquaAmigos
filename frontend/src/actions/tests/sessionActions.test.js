import fetchMock from 'fetch-mock';
import {
  setUser,
  removeUser,
} from '../sessionActions';

import * as types from '../actionTypes';

describe('sessionActions', () => {
  describe('setUser', () => {
    it('should dispatch SET_USER', () => {
      const user = {
        id: 1,
        email: 'demo@aa.io',
        username: 'Demo',
      };
      const expectedAction = {
        type: types.SET_USER,
        user,
      };
      expect(setUser(user)).toEqual(expectedAction);
    });
  });

  describe('removeUser', () => {
    it('should dispatch REMOVE_USER', () => {
      const expectedAction = {
        type: types.REMOVE_USER,
      };
      expect(removeUser()).toEqual(expectedAction);
    });
  });

  afterEach(() => {
    fetchMock.restore();
  });

  afterAll(() => {
    fetchMock.reset();
  });
});
