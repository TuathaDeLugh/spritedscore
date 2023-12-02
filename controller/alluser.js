export default async function getAllUsers(page) {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/user/?page=${page || 1}`, {
        cache: "no-store",
      });
      const user = await response.json();
      return user;
    } catch (error) {
      console.log(error);
    }
  }