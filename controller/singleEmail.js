export default async function getSingleEmail(id) {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/email/${id}`, 
      {
        cache: "no-store",
      });
      const email = await response.json();
      return email.data;
    } catch (error) {
      console.log(error);
    }
  }