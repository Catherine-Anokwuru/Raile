import React from "react";
import styles from "./styles/Recommended.module.css";
import sman from "../../../public/images/sman.webp";
import Image from "next/image";
import { ubuntu } from "app/fonts/fonts";

const Watching: React.FC = () => {
  return (
    <section className={styles.recommended}>
      <div className={styles.textBox}>
        <h2 className={ubuntu.className}>Continue Watching</h2>
      </div>
      <div className={`${styles.movies} no-scrollbar`}>
        <div>
          <Image
            style={{
              objectFit: "contain",
              borderRadius: "10px",
            }}
            width={180}
            height={250}
            src={sman}
            alt="movie"
          />
        </div>
        <div>
          <Image
            style={{
              objectFit: "contain",
              borderRadius: "10px",
            }}
            width={180}
            height={250}
            src={sman}
            alt="movie 2"
          />
        </div>

      </div>
    </section>
  );
};
export default Watching;
