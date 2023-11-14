export default async function getUserReview(id) {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`/api/review/user/${id}`, 

      // const response = await fetch(`http://localhost:3000/api/review/user/${id}`, 

      
      {
        cache: "no-store",
      });
      const reviews = await response.json();
      return reviews.data;
    } catch (error) {
      console.log(error);
    }
  }