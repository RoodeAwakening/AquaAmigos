import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Carousel from '../Carousel/Carousel';
import RecentNews from '../RecentNews/RecentNews';
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
      <div className={styles.AboutUs_container}>
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
