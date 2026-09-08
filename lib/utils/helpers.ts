// lib/utils/helpers.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// دمج الكلاسات
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// تنسيق المبلغ
export function formatCurrency(amount: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount)
}

// تنسيق التاريخ
export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

// حساب النسبة المئوية
export function calculateProgress(completed: number, total: number) {
  if (total === 0) return 0
  return Math.round((completed / total) * 100)
}

// توليد رقم فاتورة
export function generateInvoiceNumber() {
  const date = new Date()
  const year = date.getFullYear().toString().slice(-2)
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const random = String(Math.floor(Math.random() * 10000)).padStart(4, '0')
  return `INV-${year}${month}-${random}`
}

// التحقق من تأخر الرد عن 24 ساعة
export function isOverdueReply(lastContact: string | null): 'red' | 'yellow' | 'green' {
  if (!lastContact) return 'red'
  
  const hours = (Date.now() - new Date(lastContact).getTime()) / (1000 * 60 * 60)
  
  if (hours > 24) return 'red'
  if (hours > 12) return 'yellow'
  return 'green'
}