export default async function getUserReview(id,page) {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/review/user/${id}?page=${page || 1}`, 
      {
        cache: "no-store",
      });
      const reviews = await response.json();
      return reviews;
    } catch (error) {
      console.log(error);
    }
  }