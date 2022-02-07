import React from 'react';
import styles from './AboutUs.module.css';

import Users from '../../../mocks/Users';
import verifyTeamMember from '../../../helpers/sortTeamMembers';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import ResponsiveBlock from '../../atoms/ResponsiveBlock/ResponsiveBlock';
import ContentBlock from '../../molecules/ContentBlock/ContentBlock';

function AboutUs() {
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

  return (
    <div className={styles.about_us__container}>
      <SectionTitle header="msg_team_members" subHeader="msg_team_members_sub" />
      <ResponsiveBlock>
        {leaders}
      </ResponsiveBlock>
    </div>
  );
}

export default AboutUs;
