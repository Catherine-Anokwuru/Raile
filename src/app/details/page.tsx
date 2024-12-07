import React from "react";
import styles from "./details.module.css";
import sman from "../../../public/images/sman.webp";
import { inter, nunito, ubuntu } from "app/fonts/fonts";
import Button from "components/Button";
import { IoPlay } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";

const details: React.FC = ({title, release_date, overiew, poster_path, }) => {
  return (
    <div style={{ background: "#15141F" }}>
      <section className={styles.hero}>
        <div className={styles.imageBox}>
          <Image
            className={styles.background2}
            src={sman}
            alt="banner"
            priority
          />
        </div>

        <div className={styles.overlay}>
          <h1 className={ubuntu.className}> The Beanie Bubble</h1>

          <div className={styles.buttons}>
            <Button style={{ maxWidth: "120px" }} size="small">
              <IoPlay /> Play
            </Button>
            <Button
              style={{ color: "#000", maxWidth: "120px" }}
              variant="secondary"
              size="small"
            >
              <FaPlus /> Watchlist
            </Button>
          </div>
        </div>
      </section>
      <div className={`${nunito.className} ${styles.descriptionBox}`}>
        <p className={`${nunito.className} ${styles.short}`}>
          2023 • 1hr24mins • Comedy • Movie
        </p>
        <div
          className={styles.divider}
          style={{ marginLeft: 0, marginRight: 0 }}
        />

        <h5 className={inter.className}>Synopsis</h5>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Eius sint, placeat dolore quisquam expedita tempora maiores,
          dolorem impedit debitis nesciunt quidem quas cumque beatae
          ducimus suscipit illum vero ea distinctio veritatis autem,
          provident doloremque at.
        </p>
      </div>
      <div className={styles.divider} />
      <div className={styles.about}>
        <h5 className={inter.className}>About the Beanie Bubble</h5>
        <p>
          Creators: <span>David Crane, Martha Kauffman</span>
        </p>
        <p>
          Directors: <span>Bob Matthew, Larry Styles</span>
        </p>
        <p>
          Cast:{" "}
          <span>Jennifer Aniston, Courtney Cox, Lisa Kudrow</span>
        </p>
        <p>
          Genres: <span>Comedy, Movie</span>
        </p>
        <p>
          Maturity rating:{" "}
          <span
            style={{
              border: "1px solid #fff",
              padding: "2px",
              marginRight: "2px",
            }}
          >
            13+
          </span>{" "}
          <span>Recommended for ages 13 and up</span>
        </p>
      </div>
      <div className={styles.divider} />
      <div className={styles.more}>
        <h5 className={inter.className}>More like this</h5>
        <div className={styles.moreGrid}>
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
    </div>
  );
};
export default details;
