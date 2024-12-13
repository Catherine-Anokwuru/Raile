"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "../../dashboard/styles/Recommended.module.css";
import Image from "next/image";
import { ubuntu } from "app/fonts/fonts";
import { fetchSearchResults } from "../../dashboard/api/fetchSearchResults";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";

const SearchPage = () => {
  const params = useParams();
  const query = params.query as string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchSearchResults(query);
        setSearchResults((prevMovies) => [...prevMovies, ...data]);
      } catch (error) {
        console.log(error);
        setLoading(false);

        toast.error("Unable to fetch movies", {
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
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
    <section className={styles.recommended}>
      <ToastContainer />
      <div className={styles.textHeaader}>
        <h2 className={ubuntu.className}>Search Results for {query}</h2>
      </div>
      <div
        className={`${styles.movies} no-scrollbar`}
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {searchResults.map((item, idx) => {
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
    </div>
  );
};

export default SearchPage;
