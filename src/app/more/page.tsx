import React from "react";
import sman from "../../../public/images/sman.webp";
import Image from "next/image";
import styles from "./more.module.css";
import Navbar from "components/Navbar";
import { inter } from "app/fonts/fonts";

const more: React.FC = () => {
  return (
    <div className={styles.card}>
      <Navbar />
      <div className={styles.gridBox}>
        <div className={inter.className}>
          <Image
            className={styles.moreImg}
            src={sman}
            alt="movie_title"
          />
          <h5 id={styles.title}>The beanie bubble</h5>
        </div>
        <div className={inter.className}>
          <Image
            className={styles.moreImg}
            src={sman}
            alt="movie_title"
          />
          <h5 id={styles.title}>The beanie bubble</h5>
        </div>
        <div className={inter.className}>
          <Image
            className={styles.moreImg}
            src={sman}
            alt="movie_title"
          />
          <h5 id={styles.title}>The beanie bubble</h5>
        </div>
        <div className={inter.className}>
          <Image
            className={styles.moreImg}
            src={sman}
            alt="movie_title"
          />
          <h5 id={styles.title}>The beanie bubble</h5>
        </div>
        <div className={inter.className}>
          <Image
            className={styles.moreImg}
            src={sman}
            alt="movie_title"
          />
          <h5 id={styles.title}>The beanie bubble</h5>
        </div>
      </div>
    </div>
  );
};
export default more;
