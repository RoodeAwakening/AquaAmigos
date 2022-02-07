import React from 'react';
import styles from './ResponsiveBlock.module.css';

function ResponsiveBlock({ children }) {
  return (
    <div className={styles.ResponsiveBlock_container}>
      <div className={styles.ResponsiveBlock_container__alignment}>
        {children}
      </div>
    </div>
  );
}

export default ResponsiveBlock;
