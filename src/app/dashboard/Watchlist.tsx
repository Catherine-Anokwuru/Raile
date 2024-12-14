"use client"

import React, { useEffect, useState } from "react";
import styles from "./styles/Recommended.module.css";
import { getWatchListMovies } from "./api/getWatchlist";

interface IMovies {
  imdbId: string;
  title: string;
  year: number;
  rating?: string;
  description?: string;
  genre?: string[];
  image: string;
  imdb_link?: string;
}

const WatchList: React.FC = () => {


    const [, setLoading] = useState(true);
    const [movies, setMovies] = useState<IMovies[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await getWatchListMovies();
          setMovies((prevMovies) => [...prevMovies, ...data.watchlist]);
          console.log(data.watchlist);
          // setMovies(data.watchlist)
          console.log(movies);

        } catch (error) {
          console.log(error);
          setLoading(false);


        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);
  return (
    <section className={styles.recommended}>
      {/* <ToastContainer />
      <div className={styles.textBox}>
        <h2 className={ubuntu.className}>Popular</h2>
      </div>
      <div
        className={`${styles.movies} no-scrollbar`}
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
        }}
      >
        {movies.map((item, idx) => {
          const { title, poster_path, id } = item;
          return (
            <Link href={`/dashboard/${id}`} key={idx}>
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
      </div> */}
    </section>
  );
};
export default WatchList;
