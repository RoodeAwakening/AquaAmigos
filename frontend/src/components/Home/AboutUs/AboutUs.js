import React from 'react';
import styles from './AboutUs.module.css';

import Users from '../../../mocks/Users';
import verifyTeamMember from './helper/sortTeamMembers';
import ContentHeader from '../../common/ContentHeader/ContentHeader';
import ResponsiveBlock from '../../common/ResponsiveBlock/ResponsiveBlock';
import ContentBlock from '../../common/ContentBlock/ContentBlock';

function AboutUs() {
  const leaders = verifyTeamMember(Users).map((user) => {
    return (
      <>
        <ContentBlock
          title={`${user.title} - ${user.first_name} ${user.last_name}`}
          description={`${user.aboutMe} `}
          articleImage={user.userIcon}
        />
      </>
    );
  });

  return (
    <div className={styles.about_us__container}>
      <ContentHeader header="msg_team_members" subHeader="msg_team_members_sub" />
      <ResponsiveBlock>
        {leaders}
      </ResponsiveBlock>
    </div>
  );
}

export default AboutUs;
