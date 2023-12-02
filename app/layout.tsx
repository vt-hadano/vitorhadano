import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Suspense } from 'react'
import LoadingPage from './components/LoadingPage'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-montserrat-alternates bg-white-100">
        <Navbar />
        <Suspense fallback={<LoadingPage/>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
