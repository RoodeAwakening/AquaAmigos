import React from 'react';
import i18next from 'i18next';
import styles from './AboutUs.module.css';

import Users from '../../../mocks/Users';
import verifyTeamMember from './helper/sortTeamMembers';

function AboutUs() {
  const leaders = verifyTeamMember(Users).map((user) => {
    return (

      <div className={styles.about_us__frame}>
        <img
          src={user.userIcon}
          alt="Team Members"
        />
        <div className={styles.about_us__in_out_alert}>
          <h3 className={styles.userTitle}>{user.title}</h3>
          <h3 className={styles.userName}>{`${user.first_name} ${user.last_name}`}</h3>
          <h3 className={styles.aboutMe}>{user.aboutMe}</h3>
        </div>
      </div>
    );
  });

  return (
    <section className={styles.about_us__container}>
      <div className={styles.about_us__titles}>
        <h1>{i18next.t('msg_team_members')}</h1>
        <h4>{i18next.t('msg_team_members_sub')}</h4>
      </div>
      <div className={styles.about_us__members}>
        <div className={styles.about_us__members_alignment}>
          {leaders}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
