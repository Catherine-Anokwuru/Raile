"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles/Banner.module.css";
import Image from "next/image";
import { nunito, ubuntu } from "app/fonts/fonts";
import Button from "components/Button";
import { IoPlay } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { fetchTrendingMovie } from "./api/fetchTrendingMovie";
import { handleAddToWatchlist } from "./api/AddToWatchlist";
import Link from "next/link";
import { handleAddToHistory } from "./api/AddToHistory";

// interface BannerProps {
//   id: number;
//   title: string;
//   backdrop_path: string;
//   overview: string
// }

const Banner: React.FC = () => {
  const [banner, setBanner] = useState({
    id: 1,
    title: "",
    backdrop_path: "",
    overview: "",
    media_type: "",
    release_date: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingMovie(1);
        setBanner(data[2]);
        console.log(data[2]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  // console.log(banner);

  const genre: string[] = [];
  genre.push(banner.media_type);

  return (
    <section className={styles.hero}>
      <div className={styles.imageBox}>
        <Image
          className={styles.background1}
          src={`https://image.tmdb.org/t/p/original/${banner.backdrop_path}`}
          alt={banner.title}
          width={100}
          height={100}
          sizes="100%"
          priority
        />
        <Image
          className={styles.background2}
          src={`https://image.tmdb.org/t/p/original/${banner.backdrop_path}`}
          alt="banner"
          sizes="100%"
          width={100}
          height={100}
          priority
        />
      </div>

      <div className={styles.overlay}>
        <h1 className={ubuntu.className}> {banner.title}</h1>
        <p className={`${nunito.className} ${styles.short}`}>
          {banner.release_date.slice(0, 4)} • {banner.media_type}
        </p>
        <p className={styles.description}>{banner.overview}</p>
        <div className={styles.buttons}>
          <Button
            style={{ width: "50%", maxWidth: "120px" }}
            onClick={() =>
              handleAddToHistory({
                tmdbId: banner.id,
                title: banner.title,
                description: banner.overview,
                genres: genre,
                year: banner.release_date.slice(0, 4),
              })
            }
          >
            <Link href={`/dashboard/${banner.id}`}>
              <IoPlay /> Play
            </Link>
          </Button>

          <Button
            style={{ width: "50%", color: "#000", maxWidth: "120px" }}
            variant="secondary"
            onClick={() => {
              handleAddToWatchlist({
                tmdbId: banner.id,
                title: banner.title,
                description: banner.overview,
                genres: genre,
                year: banner.release_date.slice(0, 4),
              });
            }}
          >
            <FaPlus /> Watchlist
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Banner;
