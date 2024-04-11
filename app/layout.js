
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import SessionProvider from '@/components/logic/SessionProvider'
import Toast from '@/components/layout/Toast'
import SessionUpdate from '@/components/logic/SessionUpdatecheck'
import { Rubik } from 'next/font/google'
import Footer from '@/components/layout/Footer'

const font = Rubik({
  subsets:['latin'],
  weight:['400','300','500','700','900','600'],
})

export const metadata = {
  title: 'Spirited Score',
  description: 'Dive into the captivating world of anime with Spirited Score, your ultimate destination for insightful and engaging anime reviews. Discover in-depth analyses of your favorite series, uncover hidden gems, and explore the vibrant realm of Japanese animation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white dark:bg-gray-800 text-black dark:text-white`}>
        <SessionProvider>
          <SessionUpdate/>
          <Toast/>
          <Navbar/>
        <main className='min-h-screen'>
          {children}
          </main>
          </SessionProvider>
        <Footer/>
      </body>
      </html>
  )
}
