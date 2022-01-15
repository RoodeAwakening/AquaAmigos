import React from 'react';
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
    </div>
  );
}

export default Home;
