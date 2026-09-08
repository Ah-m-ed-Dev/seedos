// app/(auth)/login/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ email: '', password: '' })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      
      router.push('/dashboard')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="text-4xl mb-2">🌱</div>
          <CardTitle className="text-2xl">تسجيل الدخول</CardTitle>
          <CardDescription>
            SeedOS - نظام إدارة DevSeed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="البريد الإلكتروني"
              type="email"
              placeholder="example@devseed.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              dir="ltr"
            />
            <Input
              label="كلمة المرور"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              dir="ltr"
            />
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            <Button type="submit" className="w-full" loading={loading}>
              تسجيل الدخول
            </Button>
            <p className="text-center text-sm text-gray-500">
              ليس لديك حساب؟{' '}
              <Link href="/register" className="text-blue-600 hover:underline">
                إنشاء حساب جديد
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}