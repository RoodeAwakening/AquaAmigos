import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import i18next from 'i18next';
import styles from './AboutUs.module.css';

import Users from '../../../mocks/Users';

function AboutUs() {
//  only display the members with a position number grate than 0
  const members = Users.filter(user => user.position > 0);
  // sort members from lowest to highest position number
  members.sort((a, b) => a.position - b.position);

  const leaders = members.map((user) => {
    return (
      <Col md="6" lg="3">
        <div className={styles.s6__frame}>
          <img
            src={user.userIcon}
            alt="Team Members"
          />
          <div className={styles.s6__in_out_alert}>
            <h3>{user.title}</h3>
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <h4 className={styles.aboutMe}>{user.aboutMe}</h4>
          </div>
        </div>
      </Col>
    );
  });

  return (
    <section className={styles.s6}>
      <Container>
        <div className={styles.s6__titles}>
          <h1>{i18next.t('msg_team_members')}</h1>
          <h4>{i18next.t('msg_team_members_sub')}</h4>
        </div>
        <Row>
          {leaders}
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
