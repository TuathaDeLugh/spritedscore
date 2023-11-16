export default async function getAllReview() {
  try {
    const api = process.env.API_URL;
    const response = await fetch(`${api}/api/review/`, 

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