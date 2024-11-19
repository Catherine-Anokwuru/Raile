import React from "react";
import styles from "./styles/Banner.module.css";
import Image from "next/image";
import sman from "../../../public/images/sman.webp";
import { nunito, ubuntu } from "app/fonts/fonts";
import Button from "components/Button";
import { IoPlay } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const Banner: React.FC = () => {
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
        <h1 className={ubuntu.className}> The Beanie Bubble</h1>
        <p className={`${nunito.className} ${styles.short}`}>
          2023 • Comedy • Movie
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Eius sint, placeat dolore quisquam expedita tempora maiores,
          dolorem impedit debitis nesciunt quidem quas cumque beatae
          ducimus suscipit illum vero ea distinctio veritatis autem,
          provident doloremque at.
        </p>
        <div className={styles.buttons}>
          <Button style={{ width: "50%", maxWidth: "120px" }}>
            <IoPlay /> Play
          </Button>
          <Button
            style={{ width: "50%", color: "#000", maxWidth: "120px" }}
            variant="secondary"
          >
            <FaPlus /> Watchlist
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Banner;
