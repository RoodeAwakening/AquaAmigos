import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import PageHeader from './PageHeader';

configure({ adapter: new Adapter() });
global.confirm = () => true;

function setup() {
  return shallow(<PageHeader />);
}

describe(' Page Header Snapshot', () => {
  let pageHeader;

  beforeEach(() => {
    pageHeader = setup();
  });

  afterEach(() => {
    pageHeader.unmount();
  });

  it(' Should render the page header and should match snapshot', () => {
    expect(toJson(PageHeader)).toMatchSnapshot();
  });
});
