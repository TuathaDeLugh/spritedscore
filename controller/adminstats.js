export async function getStats() {
    try {
        const api = process.env.API_URL;
        const response = await fetch(`${api}/api/admindashbord?sort=-1`,
            {
                cache: "no-store",
            });
        const stats = await response.json();
        return stats;
    } catch (error) {
        console.log(error);
    }
}