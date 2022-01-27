import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import NavBar from '../NavBar';

configure({ adapter: new Adapter() });
global.confirm = () => true;

function setup() {
  return shallow(<NavBar />);
}

describe('Navbar Snapshot', () => {
  let navbar;

  beforeEach(() => {
    navbar = setup();
  });

  afterEach(() => {
    navbar.unmount();
  });

  it('Should render the navbar to match the snapshot', () => {
    expect(toJson(navbar)).toMatchSnapshot();
  });
});
