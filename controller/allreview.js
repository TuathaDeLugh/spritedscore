export default async function getAllReviews() {
    try {
      const api = process.env.API_URL;
      console.log(api);
      // const response = await fetch(`${api}/api/review`, 
      // const response = await fetch(`https://spiritrdscore.vercel.app/api/review`, 

      const response = await fetch(`http://localhost:3000/api/review`, 

      {
        cache: "no-store",
      });
      const reviews = await response.json();
      return reviews.data;
    } catch (error) {
      console.log(error);
    }
  }