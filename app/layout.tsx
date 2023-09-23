import Navbar from '@/components/layouts/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import Footer from '@/components/layouts/Footer'

const kanit = Kanit({ subsets: ['latin'],  weight: ['100', '200', '300', '400','500','600','700','800','900'] })

export const metadata: Metadata = {
  title: 'Pandu Pangestu | Frontend Dev',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <div className="bg-theme-dark text-[#ffffff] overflow-hidden">
          <Navbar/>
            {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
