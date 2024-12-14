interface AddToHistory {
  tmdbId: number;
  title: string;
  description: string;
  genres: string[] ;
  year: string;
}

export const handleAddToHistory = async (payload: AddToHistory) => {
  const userId = localStorage.getItem("userId");
  try {
    const response = await fetch(
      `https://latin-adoree-raile-d2418ca2.koyeb.app/history/${userId}/add-movie`,
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
        "User ID is required to add a movie to the history."
      );
      return;
    }
    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(
        `Failed to add movie to history: ${response.status} ${response.statusText}. Details: ${errorDetails.message}`
      );
    }

    const data = await response.json();
    console.log("Movie added to history", data);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Add to history failed:", error.message);
  }
};
