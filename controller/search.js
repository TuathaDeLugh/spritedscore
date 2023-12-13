export default async function getSearchedReview(title) {
    try {
      const api = process.env.API_URL;

      const response = await fetch(`api/search?query=${title}`,
      // const response = await fetch(`api/search?query=attack`, 


      
      {
        cache: "no-store",
      });
      const review = await response.json();
      return review.data;
    } catch (error) {
      console.log(error);
    }
  }