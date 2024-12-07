"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./styles/Recommended.module.css";
import Image from "next/image";
import { ubuntu } from "app/fonts/fonts";
import { fetchTrendingMovie } from "./api/fetchTrendingMovie";
import { toast, ToastContainer } from "react-toastify";
import { throttle } from "lodash";
import Link from "next/link";

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
}

const TrendingMovie: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchTrendingMovie(currentPage);
        setMovies((prevMovies) => [...prevMovies, ...data]);
        console.log(currentPage);
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

  const handleScroll = useCallback(
    throttle(() => {
      const container = containerRef.current;

      if (
        container &&
        container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 150 &&
        !loading
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
        console.log(movies);
        console.log(
          container.scrollLeft + container.clientWidth >=
            container.scrollWidth - 150
        );
      }
    }, 300),
    [loading]
  );

  return (
    <section className={styles.recommended}>
      <ToastContainer />
      <div className={styles.textBox}>
        <h2 className={ubuntu.className}>Trending</h2>
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
      </div>
    </section>
  );
};
export default TrendingMovie;
