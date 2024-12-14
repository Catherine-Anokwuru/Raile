interface IMovie {
  tmdbId: string;
  title: string;
  year: number;
  poster_path: string;
  description?: string;
  genre?: string[];
  image?: string;
  imdb_link?: string;
}

export const getWatchListMovies = async () => {
  const userId = localStorage.getItem("userId");

  try {
    let watchlist: IMovie[] = [];
    let error: Error | null = null;

    const res = await fetch(
      `https://latin-adoree-raile-d2418ca2.koyeb.app/watchlist/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (res.status == 200) {
      watchlist = data.watchlistMovies;
      return { watchlist, error };
    }
    error = new Error(data.message);
    return { watchlist, error };
  } catch (error) {
    return { watchlist: [], error };
  }
};
