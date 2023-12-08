import React from 'react'


async function getStats() {
  try {
    const api = process.env.API_URL;
    const response = await fetch(`${api}/api/admindashbord`, {
      cache: "no-store",
    });
    const stats = await response.json();
    return {
      props: {
        stats,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error);
  }
}


export  default async function Admin() {
  const stats = await getStats()
  console.log(stats)
  return (
    <><span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
    Admin Panal
  </span>
  <h2 className="mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl]">
    Dashbord
  </h2>
  <div className="text-justify">
</div>
  </>
  )
  
}
