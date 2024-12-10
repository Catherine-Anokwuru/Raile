export const fetchSearchResults = async (query: string) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=0e5fcb22f511960302347f8448364632&query=${query}`
    );
    const data = await response.json();
    return data.results;
}