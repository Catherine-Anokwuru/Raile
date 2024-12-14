interface AddToWL {
  tmdbId: number;
  title: string;
  description: string;
  genres: string[] | string;
  poster_path: string;
  year: string;
}

export const handleAddToWatchlist = async (payload: AddToWL) => {
  const userId = localStorage.getItem("userId");
  try {
    const response = await fetch(
      `https://latin-adoree-raile-d2418ca2.koyeb.app/watchlist/${userId}/add-movie`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!userId) {
      console.error(
        "User ID is required to add a movie to the watchlist."
      );
      return;
    }
    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(
        `Failed to add movie to watchlist: ${response.status} ${response.statusText}. Details: ${errorDetails.message}`
      );
    }

    const data = await response.json();
    console.log("Movie added to watchlist", data);
    alert("Movie added to watchlist");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Add to watchlist failed:", error.message);
  }
};
