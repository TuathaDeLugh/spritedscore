export default async function getPopularReview() {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/homepage/category`,      
      {
        cache: "no-store",
      });
      const reviews = await response.json();
      return reviews.data;
    } catch (error) {
      console.log(error);
    }
  }