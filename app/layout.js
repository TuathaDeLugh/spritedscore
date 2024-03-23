
import './globals.css'
import Darkmode from '@/components/layout/Darkmode'
import Navbar from '@/components/layout/Navbar'
import SessionProvider from '@/components/logic/SessionProvider'
import Toast from '@/components/layout/Toast'



export const metadata = {
  title: 'Spirited Score',
  description: 'Dive into the captivating world of anime with Spirited Score, your ultimate destination for insightful and engaging anime reviews. Discover in-depth analyses of your favorite series, uncover hidden gems, and explore the vibrant realm of Japanese animation.',
}

export default function RootLayout({ children }) {
  return (
    
        <Darkmode>
        <SessionProvider>
          <Toast/>
          <Navbar/>
        <main className='min-h-screen'>
          {children}
          </main>
          </SessionProvider>
        </Darkmode>
  )
}
