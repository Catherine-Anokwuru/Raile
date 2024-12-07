import axios from "axios";

export const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=0e5fcb22f511960302347f8448364632`;

export const fetchTrendingMovie = async (page: number) => {
  try {
    const response = await axios.get(`${url}&page=${page}`);
    const data = response.data.results;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
