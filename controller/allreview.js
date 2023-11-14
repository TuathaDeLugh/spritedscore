export default async function getAllReviews() {
    try {
      const url = process.env.API_URL;
      console.log(url);
      const response = await fetch(`/api/review`, 

      // const response = await fetch(`http://localhost:3000/api/review`, 

      {
        cache: "no-store",
      });
      const reviews = await response.json();
      return reviews.data;
    } catch (error) {
      console.log(error);
    }
  }