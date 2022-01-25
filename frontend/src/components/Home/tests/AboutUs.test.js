// test to see if the AboutUs component is rendering correctly
import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import AboutUs from '../AboutUs/AboutUs';
import Users from '../../../mocks/Users';

configure({ adapter: new Adapter() });
global.confirm = () => true;

describe('AboutUs Component', () => {
  let aboutUs;

  beforeEach(() => {
    aboutUs = shallow(<AboutUs />);
  });

  afterEach(() => {
    aboutUs.unmount();
  });

  it('Should render the AboutUs component to match the snapshot', () => {
    expect(toJson(aboutUs)).toMatchSnapshot();
  });

  it('Should render all Users that dont have a position number of 0', () => {
    const members = Users.filter(user => user.position > 0);
    // sort members from lowest to highest position number
    members.sort((a, b) => a.position - b.position);

    members.map((user) => {
      return (
        <div className="about_us__frame">
          <img
            src={user.userIcon}
            alt="Team Members"
          />
          <div className="about_us__in_out_alert">
            <h3 className="userTitle">{user.title}</h3>
            <h3 className="userName">{`${user.first_name} ${user.last_name}`}</h3>
            <h3 className="aboutMe">{user.aboutMe}</h3>
          </div>
        </div>
      );
    });

    expect(aboutUs.find('.about_us__members').children().length).toEqual(1);
  });
});
