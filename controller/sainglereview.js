export default async function getSingleReview(id) {
    try {
      const api = process.env.API_URL;

    //   const response = await fetch(`${api}/api/review/${id}`, 

      const response = await fetch(`http://localhost:3000/api/review/${id}`, 

      
      {
        cache: "no-store",
      });
      const review = await response.json();
      return review.data;
    } catch (error) {
      console.log(error);
    }
  }