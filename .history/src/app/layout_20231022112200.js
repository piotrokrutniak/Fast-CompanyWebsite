import FootBar from './components/footbar/footbar'
import Navbar from './components/navbar/navbar'
import QuickContact from './components/quickContact'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fast - Klimatyzacje Kraków',
  description: 'F.U.H. Fast Jacek Stawowy - Klimatyzacje',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="!scroll-smooth">
      <body className='bg-black'>
        <div className='bg-slate-500/10 min-h-screen min-w-mobile relative overflow-x-clip'> 
          <Navbar/>
          {children}
          <QuickContact/>
          <FootBar/>
        </div>
      </body>
    </html>
  )
}