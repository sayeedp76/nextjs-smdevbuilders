import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './_Components/Navbar'
import Footer from './_Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sai Manjunath Builders and Developers',
  description: 'Your trusted construction partner',
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