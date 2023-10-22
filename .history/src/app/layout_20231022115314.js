import FootBar from './components/footbar/footbar'
import Navbar from './components/navbar/navbar'
import QuickContact from './components/quickContact'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fast - Klimatyzacje Kraków',
  description: 'F.U.H. Fast Jacek Stawowy - Klimatyzacje Kraków-Niepołomice',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="!scroll-smooth">
      
        
          <Navbar/>
          {children}
          <QuickContact/>
          <FootBar/>
        
      
    </html>
  )
}