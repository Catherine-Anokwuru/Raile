export const fetchRecommendations = async () => {
    const userId = localStorage.get("userId")
    const response = await fetch(
        `http://localhost:5000/user/${userId}/recommendations`
    );
    const data = await response.json();
    console.log(data)
    return data;
}