export default async function getSearchedReview(title) {
    try {

      const response = await fetch(`api/search?query=${title}`,


      
      {
        cache: "no-store",
      });
      const review = await response.json();
      return review.data;
    } catch (error) {
      console.log(error);
    }
  }