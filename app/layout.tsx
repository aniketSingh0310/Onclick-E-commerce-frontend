import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/provider/modal-provider'

const inter = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OnClick Online Store',
  description: 'store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
