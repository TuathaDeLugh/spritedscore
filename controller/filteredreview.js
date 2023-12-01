export default async function getFilteredReview(category,page) {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/review/filter/${category}?page=${page || 1}`, 

      // const response = await fetch(`http://localhost:3000/api/review/user/${id}`, 

      
      {
        cache: "no-store",
      });
      const reviews = await response.json();
      return reviews;
    } catch (error) {
      console.log(error);
    }
  }