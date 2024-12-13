export const fetchRecommendations = async () => {
  const userId = localStorage.getItem("userId");
  const response = await fetch(
    `https://latin-adoree-raile-d2418ca2.koyeb.app/user/${userId}/recommendations`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
