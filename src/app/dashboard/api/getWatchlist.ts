interface IMovie {
  imdbId: string;
  title: string;
  year: number;
  rating?: string;
  description?: string;
  genre?: string[];
  image: string;
  imdb_link?: string;
}

export const getWatchListMovies = async (

) => {
  const userId = localStorage.getItem("userId");

  try {
    let watchlist: IMovie[] | null = null;
    let error: Error | null = null;

    const res = await fetch(
      `http://localhost:4000/api/watchlist/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await res.json();
    if (res.status == 200) {
      watchlist = data.watchlist.movies;
      return { watchlist, error };
    }
    error = new Error(data.message);
    return { watchlist, error };
  } catch (error: any) {
    return { watchlist: null, error };
  }
};
