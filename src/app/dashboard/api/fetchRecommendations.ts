export const fetchRecommendations = async () => {
  const userId = localStorage.getItem("userId");
  const response = await fetch(
    `https://movie-app-server-4bhs.onrender.com/user/${userId}/recommendations`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
