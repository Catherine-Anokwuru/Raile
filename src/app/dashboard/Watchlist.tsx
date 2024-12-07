import React from "react";
import styles from "./styles/Recommended.module.css";
import sman from "../../../public/images/sman.webp";
import Image from "next/image";
import { inter, ubuntu } from "app/fonts/fonts";
import { IoIosArrowForward } from "react-icons/io";

const WatchList: React.FC = () => {

  return (
    <section className={styles.recommended}>
      <div className={styles.textBox}>
        <h2 className={ubuntu.className}>Watchlist</h2>
        <button className={inter.className}>
          See more <IoIosArrowForward />
        </button>
      </div>
      <div className={`${styles.movies} no-scrollbar`}>
        <div className={styles.movie}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
            src={sman}
            alt="movie"
          />
        </div>
        <div className={styles.movie}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
            src={sman}
            alt="movie 2"
          />
        </div>
        <div className={styles.movie}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
            src={sman}
            alt="movie 2"
          />
        </div>
      </div>
    </section>
  );
};
export default WatchList;
