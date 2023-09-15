import { Navbar } from '@/Components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/Context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gymate - Gym',
  description: " At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const scroll = window.scrollY;
  // console.log(scroll);
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <AuthProvider>
        <Navbar />
        {children}
        {/* <Footer /> */}
        </AuthProvider>
        </body>
    </html>
  )
}
