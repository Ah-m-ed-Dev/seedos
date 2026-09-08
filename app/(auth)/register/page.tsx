// app/(auth)/register/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'

export default function RegisterPage() {
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('كلمة المرور غير متطابقة')
      setLoading(false)
      return
    }

    if (form.password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل')
      setLoading(false)
      return
    }

    try {
      // 1. إنشاء المستخدم في Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            full_name: form.fullName,
          },
        },
      })

      if (authError) {
        setError(authError.message)
        setLoading(false)
        return
      }

      if (!authData.user) {
        setError('لم يتم إنشاء المستخدم')
        setLoading(false)
        return
      }

      // 2. إضافة المستخدم في جدول users
      const { error: userError } = await supabase
        .from('users')
        .insert([
          {
            id: authData.user.id,
            full_name: form.fullName,
            email: form.email,
            role: 'developer',
            is_active: true,
          },
        ])

      if (userError) {
        console.error('User Insert Error:', userError)
        setError('حدث خطأ أثناء إنشاء المستخدم')
        setLoading(false)
        return
      }

      // ✅ 3. انتظر قليلاً ثم اذهب للـ Dashboard
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // ✅ 4. استخدم window.location بدل router.push
      window.location.href = '/'
      
    } catch (err) {
      console.error('Unexpected Error:', err)
      setError('حدث خطأ غير متوقع')
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="text-4xl mb-2">🌱</div>
        <CardTitle className="text-2xl">إنشاء حساب جديد</CardTitle>
        <CardDescription>
          انضم إلى SeedOS - نظام إدارة DevSeed
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister} className="space-y-4">
          <Input
            label="الاسم الكامل"
            type="text"
            placeholder="أحمد محمد"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            required
          />
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
            placeholder="•••••••• (6 أحرف على الأقل)"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            dir="ltr"
          />
          <Input
            label="تأكيد كلمة المرور"
            type="password"
            placeholder="••••••••"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            required
            dir="ltr"
          />
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
          <Button type="submit" className="w-full" loading={loading}>
            إنشاء حساب
          </Button>
          <p className="text-center text-sm text-gray-500">
            لديك حساب بالفعل؟{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              تسجيل الدخول
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}