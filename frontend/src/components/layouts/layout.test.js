import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Layout from './Layout';

configure({ adapter: new Adapter() });
global.confirm = () => true;

function setup() {
  return shallow(<Layout />);
}

describe(' Layout via Enzyme', () => {
  let layout;

  beforeEach(() => {
    layout = setup();
  });

  afterEach(() => {
    layout.unmount();
  });

  it(' Should render layout', () => {
    expect(toJson(layout)).toMatchSnapshot();
  });
});
