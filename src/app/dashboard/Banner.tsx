import React from 'react';
import styles from './styles/Banner.module.css'
import Image from 'next/image';
import sman from '../../../public/images/sman.webp'

const Banner:React.FC = () => {

return (
  <section className={styles.hero}>
    <div className={styles.imageBox}>
      <Image
        className={styles.background1}
        src={sman}
        alt="banner"
        // sizes="50%"
      />
      <Image
        className={styles.background2}
        src={sman}
        alt="banner"
        // sizes="50%"
      />
    </div>

    <div className={styles.overlay}>
      <h1>The Beanie Bubble</h1>
      <p>NEW • Comedy • 2023 • Movie</p>
      <div className={styles.buttons}>
        <button className={styles.playButton}>Play</button>
        <button className={styles.moreButton}>+</button>
      </div>
    </div>
  </section>
);
}
export default Banner;