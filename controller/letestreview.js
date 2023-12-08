export default async function getLetestReview() {
    try {
      const api = process.env.API_URL;
      const timestamp = new Date().getTime();
      const response = await fetch(`${api}/api/homepage?timestamp=${timestamp}`,      
      {
        cache: "no-store",
      });
      
      const reviews = await response.json();
      return reviews.data;
    } catch (error) {
      console.log(error);
    }
  }