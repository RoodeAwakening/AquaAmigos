import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState.session, action) {
  switch (action.type) {
    case types.SET_USER:
      return { user: action.user };
    case types.REMOVE_USER:
      return { user: null };
    default:
      return state;
  }
}
