export async function addToWatchlist(uid, rid) {
  try {
    const api = process.env.API_URL

    const response = await fetch(`/api/user/${uid}`, {
      method: 'PATCH',
      cache: 'no-store',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ type: 'addToWatchlist', id: rid }),
    })

    const reviews = await response.json()

    return reviews.data
  } catch (error) {
    console.log(error)
  }
}

export async function removeWatchlist(uid, rid) {
  try {
    const api = process.env.API_URL

    const response = await fetch(`/api/user/${uid}`, {
      method: 'PATCH',
      cache: 'no-store',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ type: 'removeWatchlist', id: rid }),
    })

    const reviews = await response.json()

    return reviews.data
  } catch (error) {
    console.log(error)
  }
}

export async function getReviews(uid) {
  try {
    const api = process.env.API_URL

    const response = await fetch(`${api}/api/user/${uid}/watchlist`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-type': 'application/json',
      },
    })

    const reviews = await response.json()

    return reviews.data
  } catch (error) {
    console.log(error)
  }
}
