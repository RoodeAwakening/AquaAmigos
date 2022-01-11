import React from 'react';
import Carousel from '../Carousel/Carousel';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.Carousel_container}>

        <Carousel />
      </div>
    </div>
  );
}

export default Home;
