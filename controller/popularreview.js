let cachedData = null;
let lastFetchTime = 0;
const refreshInterval = 2 * 60 * 1000; 

export default async function getPopularReview() {
  try {
    const currentTime = new Date().getTime();

    
    if (cachedData && currentTime - lastFetchTime < refreshInterval) {
      return cachedData;
    }

    const api = process.env.API_URL;
    const response = await fetch(`${api}/api/homepage/category?sort=1`, {
      cache: "no-store",
    });

    const reviews = await response.json();
    cachedData = reviews.data;
    lastFetchTime = currentTime;

    return cachedData;
  } catch (error) {
    console.log(error);
  }
}