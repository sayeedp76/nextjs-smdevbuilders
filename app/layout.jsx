import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './_Components/Navbar'
import Footer from './_Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JKM Builders - Your Trusted Construction Partner',
  description: 'JKM Builders - Building dreams into reality with quality construction and professional service.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 