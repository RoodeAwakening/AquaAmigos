import React from 'react';
import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import UserIconBlock from '../../UserIconBlock/UserIconBlock';

configure({ adapter: new Adapter() });

describe('User Icon Block in header', () => {
  let wrapper;
  let userIconBlock;
  let userIcon;
  let userName;
  let logoutButton;

  beforeEach(() => {
    wrapper = mount(<UserIconBlock />);
    userIconBlock = wrapper.find('#userIconBlock_container');
    userIcon = wrapper.find('#userIconBlock_icon');
    userName = wrapper.find('#userIconBlock_name');
    logoutButton = wrapper.find('#userIconBlock_logout_button');
  });

  afterEach(() => {
    wrapper.unmount(<UserIconBlock />);
  });

  it('Should render user icon block', () => {
    expect(userIconBlock.length).toEqual(1);
  });

  it('Should render user icon', () => {
    expect(userIcon.length).toEqual(1);
  });

  it('Should render user name', () => {
    expect(userName.length).toEqual(1);
  });

  it('Should render logout button', () => {
    expect(logoutButton.length).toEqual(1);
  });
});
