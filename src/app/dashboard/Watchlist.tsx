"use client"

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/Recommended.module.css";
import Image from "next/image";
import { inter, ubuntu } from "app/fonts/fonts";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { toast } from "react-toastify";
import { handleAddToWatchlist } from "./api/AddToWatchlist";
import { fetchTrendingMovie } from "./api/fetchTrendingMovie";
import { getWatchListMovies } from "./api/getWatchlist";

const WatchList: React.FC = () => {


    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await getWatchListMovies();
          setMovies((prevMovies) => [...prevMovies, ...(data.watchlist ?? [])]);
          console.log(movies);

        } catch (error) {
          console.log(error);
          setLoading(false);

          toast.error("Unable to fetch trending movies", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [currentPage]);
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
