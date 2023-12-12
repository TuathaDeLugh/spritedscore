'use client'

import { removeWatchlist } from '@/controller/watchlist'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const RemoveFromWatchListBtn = ({ uid, rid, page = 'read_review' }) => {
  const router = useRouter()

  const classes = {
    read_review:
      'inline-block text-white w-full text-center mt-5 py-2 px-5 rounded-full border text-lg bg-purple-500 dark:bg-purple-400 hover:text-purple-400 hover:border-purple-400 hover:bg-transparent dark:hover:bg-transparent  font-medium',
    watchlist:
      'inline-block mr-2 px-2 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-purple-500/80 rounded dark:bg-purple-400/80 hover:bg-purple-700 dark:hover:bg-purple-600 focus:outline-none ',
  }

  const handleWatchlist = async () => {
    await removeWatchlist(uid, rid)
    toast.success('Removed from the Watchlist')
    router.refresh()
  }
  return (
    <button className={classes[page]} onClick={handleWatchlist}>
      Remove from Watchlist
    </button>
  )
}

export default RemoveFromWatchListBtn
