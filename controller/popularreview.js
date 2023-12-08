export default async function getPopularReview() {
    try {
      const api = process.env.API_URL;
      const timestamp = new Date().getTime();
      const response = await fetch(`${api}/api/homepage/category?timestamp=${timestamp}`,      
      {
        cache: "no-store",
      });
      const reviews = await response.json();
      return reviews.data;
    } catch (error) {
      console.log(error);
    }
  }