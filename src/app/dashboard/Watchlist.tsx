"use client"

import React, { useEffect, useState } from "react";
import styles from "./styles/Recommended.module.css";
import { getWatchListMovies } from "./api/getWatchlist";
import Image from "next/image";
import { ubuntu } from "app/fonts/fonts";
import Link from "next/link";
// import { throttle } from "lodash";
interface IMovies {
  tmdbId: string;
  title: string;
  year: number;
  description?: string;
  genres?: string[];
  poster_path: string;
  // tmdb_link?: string;
}

const WatchList: React.FC = () => {


    const [, setLoading] = useState(true);
    const [movies, setMovies] = useState<IMovies[]>([]);
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getWatchListMovies();
      console.log("Fetched data:", data);

      // setMovies((prevMovies) => [...prevMovies, ...data.watchlist]);
      setMovies(data.watchlist)

    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

  return (
    <>
      {movies.length > 0 && (
        <section className={styles.recommended}>
          <div className={styles.textBox}>
            <h2 className={ubuntu.className}>Watchlist</h2>
          </div>
          <div
            className={`${styles.movies} no-scrollbar`}
            // ref={containerRef}
            // onScroll={handleScroll}
            style={{
              display: "flex",
              overflowX: "auto",
              whiteSpace: "nowrap",
              scrollbarWidth: "none",
            }}
          >
            {movies.map((item, idx) => {
              const { title, poster_path, tmdbId } = item;
              return (
                <Link href={`/dashboard/${tmdbId}`} key={idx}>
                  <div>
                    <Image
                      style={{
                        objectFit: "contain",
                        borderRadius: "10px",
                      }}
                      width={180}
                      height={250}
                      sizes="100%"
                      // src={`https://api.themoviedb.org/3/movie/${id}/images`}
                      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                      alt={title}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};
export default WatchList;
