import React from 'react';
import AboutUs from '../../organisms/AboutUs/AboutUs';
import Carousel from '../../organisms/Carousel/Carousel';
import RecentNews from '../../organisms/RecentNews/RecentNews';
import UpcomingEvents from '../../organisms/UpcomingEvents/UpcomingEvents';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.Carousel_container}>
        <Carousel />
      </div>
      <div className={styles.RecentNews_container}>
        <RecentNews />
      </div>
      <div className={styles.UpcomingEvents_container}>
        <UpcomingEvents />
      </div>
      <div className={styles.AboutUs_container}>
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
