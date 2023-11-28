export default async function getAllUsers() {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/user`, {
        cache: "no-store",
      });
      const user = await response.json();
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }