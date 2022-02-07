// test to see if the AboutUs component is rendering correctly
import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AboutUs from './AboutUs';
import Users from '../../../mocks/Users';
import verifyTeamMember from '../../../helpers/sortTeamMembers';
import ContentBlock from '../../molecules/ContentBlock/ContentBlock';

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
    const leaders = verifyTeamMember(Users).map((user) => {
      return (
        <>
          <ContentBlock
            key={user.id}
            title={`${user.title} - ${user.first_name} ${user.last_name}`}
            description={`${user.aboutMe} `}
            articleImage={user.userIcon}
          />
        </>
      );
    });

    expect(leaders.length).toEqual(7);
  });
});
