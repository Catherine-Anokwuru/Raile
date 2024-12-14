/* eslint-disable @next/next/no-async-client-component */
"use client";

import React from "react";
import styles from "./details.module.css";
import { inter, nunito, ubuntu } from "app/fonts/fonts";
import Button from "components/Button";
// import { IoPlay } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { handleAddToWatchlist } from "../api/AddToWatchlist";
// import { handleAddToHistory } from "../api/AddToHistory";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=0e5fcb22f511960302347f8448364632`
  );
  if (!response.ok) {
    return <div>Movie not found</div>;
  }
  const movie = await response.json();
  const genre = movie.genres.map((data: { type: object }) => {
    return data;
  });

  const recommendationsRes = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0e5fcb22f511960302347f8448364632
`
  );
  const recommendations = await recommendationsRes.json();

  const castResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0e5fcb22f511960302347f8448364632`
  );
  const casting = await castResponse.json();
  const people = casting.cast.map((data: { type: object }) => {
    return data;
  });
  const ProductionNames = () => {
    const people = casting.crew.filter(
      (dir: { job: string }) => dir.job === "Producer"
    );
    return people
      .slice(0, 2)
      .map((person: { name: string }) => person.name);
  };
  const DirectorNames = () => {
    const people = casting.crew.filter(
      (dir: { job: string }) => dir.job === "Director"
    );
    return people
      .slice(0, 2)
      .map((person: { name: string }) => person.name);
  };

  const videoResponse =
    await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=0e5fcb22f511960302347f8448364632
`);
  const video = await videoResponse.json();
  const trailerVideo = video.results.find(
    (video: { type: string }) => video.type === "Trailer"
  );

  // const [playMovie, setPlayMovie] = useState(false)

  console.log(trailerVideo);

    // handleAddToHistory({
    //   tmdbId: movie.id,
    //   title: movie.title,
    //   description: movie.overview,
    //   genres: movie.media_type,
    //   year: movie.release_date.slice(0, 4),
    // });

  return (
    <div style={{ background: "#15141F" }}>
      <section className={styles.hero}>
        <div className={styles.imageBox}>
          <iframe
            width={"100%"}
            height={"100%"}
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1`}
            title={movie.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          {/* // <Image
          //   src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          //   alt={movie.title}
          //   width={100}
          //   height={100}
          //   sizes="100%"
          //   className={styles.background2}
          //   priority
          // /> */}
          {/* <Image
            className={styles.background2}
            src={movie.}
            alt="banner"
            priority
          /> */}
        </div>

        <div className={styles.overlay}>
          <h1 className={ubuntu.className}>{movie.title}</h1>

          <div className={styles.buttons}>
            {/* <Button style={{ maxWidth: "120px" }} size="small">
              <IoPlay /> Play
            </Button> */}
            <Button
              style={{ color: "#000", maxWidth: "120px" }}
              variant="secondary"
              size="small"
              onClick={() =>
                handleAddToWatchlist({
                  tmdbId: movie.id,
                  title: movie.title,
                  description: movie.overview,
                  genres: movie.media_type,
                  year: movie.release_date.slice(0, 4),
                })
              }
            >
              <FaPlus /> Watchlist
            </Button>
          </div>
        </div>
      </section>
      <div className={`${nunito.className} ${styles.descriptionBox}`}>
        <p className={`${nunito.className} ${styles.short}`}>
          {movie.release_date.slice(0, 4)} •{" "}
          {Math.floor(movie.runtime / 60)}hr{movie.runtime % 60}mins •{" "}
          {genre[0]?.name} • {genre[1]?.name} • {genre[2]?.name}
        </p>
        <div
          className={styles.divider}
          style={{ marginLeft: 0, marginRight: 0 }}
        />

        <h5 className={inter.className}>Synopsis</h5>
        <p className={styles.description}>{movie.overview}</p>
      </div>
      <div className={styles.divider} />
      <div className={styles.about}>
        <h5 className={inter.className}>About {movie.title}</h5>
        <p>
          Producers: <span>{ProductionNames()}</span>
        </p>
        <p>
          Directors: <span>{DirectorNames()}</span>
        </p>
        <p>
          Cast:{" "}
          <span>
            {people[0]?.name}, {people[1]?.name}, {people[2]?.name}
          </span>
        </p>
        <p>
          Genres:{" "}
          <span>
            {" "}
            {genre[0]?.name} • {genre[1]?.name} • {genre[2]?.name}
          </span>
        </p>
        {/* <p>
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
        </p> */}
      </div>
      <div className={styles.divider} />
      <div className={styles.more}>
        <h5 className={inter.className}>More like this</h5>
        <div className={styles.moreGrid}>
          {recommendations.results.slice(0, 6).map(
            (
              data: {
                backdrop_path: string;
                title: string;
                id: number;
              },
              idx: number
            ) => {
              const { backdrop_path, title, id } = data;

              return (
                <Link href={`/dashboard/${id}`} key={idx}>
                  <div className={inter.className}>
                    <Image
                      className={styles.moreImg}
                      src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                      alt="movie_title"
                      height={100}
                      width={100}
                      sizes="100%"
                    />
                    <h5 id={styles.title}>{title}</h5>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
