import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'


export const metadata: Metadata = {
  title: 'Vitor Hadano',
  description: 'Portfólio Vitor Hadano',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-montserrat-alternates font normal">
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
