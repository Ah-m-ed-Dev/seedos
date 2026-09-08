import './globals.css'
import { Cairo } from 'next/font/google'
import type { ReactNode } from 'react'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'SeedOS - إدارة الوكالة',
  description: 'نظام إدارة الوكالة الرقمية',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className={`${cairo.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}