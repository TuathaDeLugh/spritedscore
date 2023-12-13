export default async function getSingleReview(title) {
    try {
      const api = process.env.API_URL;

      const response = await fetch(`${api}/api/search?query=${title}`, 

      
      {
        cache: "no-store",
      });
      const review = await response.json();
      return review.data;
    } catch (error) {
      console.log(error);
    }
  }