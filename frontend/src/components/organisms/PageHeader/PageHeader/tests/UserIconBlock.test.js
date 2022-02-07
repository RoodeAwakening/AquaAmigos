import React from 'react';
import { mount, configure } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UserIconBlock from '../../UserIconBlock/UserIconBlock';
import mockUser from '../../../../../mocks/User';

configure({ adapter: new Adapter() });

describe('User Icon Block in header', () => {
  let wrapper;
  let userIcon;
  let userName;
  let signupLoginBlock;

  beforeEach(() => {
    wrapper = mount(<UserIconBlock />);
    userIcon = wrapper.find('#userIconBlock_icon_user');
    userName = wrapper.find('#userIconBlock_name');
    signupLoginBlock = wrapper.find('#userIconBlock_signUp_signIn');
  });

  afterEach(() => {
    wrapper.unmount(<UserIconBlock />);
    wrapper.setProps({ });
  });

  it('Should render an image', () => {
    wrapper.setProps({ user: mockUser });
    expect(userIcon.find('img').length).toEqual(1);
    // user mock data to log user in and test
  });

  it('Should render user name', () => {
    expect(userName.length).toEqual(1);
  });

  it('Should render login and signup buttons when not logged in', () => {
    expect(signupLoginBlock.length).toEqual(1);
  });
});
