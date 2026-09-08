// app/(auth)/layout.tsx
import { Cairo } from 'next/font/google'
import '../globals.css'

const cairo = Cairo({ 
  subsets: ['arabic'],
  weight: ['400', '600', '700']
})

export const metadata = {
  title: 'SeedOS - تسجيل الدخول',
  description: 'نظام إدارة DevSeed',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      {children}
    </div>
  )
}