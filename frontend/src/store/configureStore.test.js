import configureStore from './index';
import initialState from '../reducers/initialState';

test('configureStore Snapshot', () => {
  expect(configureStore(initialState)).toMatchSnapshot();
});
