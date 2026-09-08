// components/ui/Card.tsx
import { ReactNode } from 'react'
import { cn } from '@/lib/utils/helpers'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={cn('bg-white rounded-xl border border-gray-200 shadow-sm', className)}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: CardProps) {
  return <div className={cn('p-6 pb-3', className)}>{children}</div>
}

export function CardTitle({ children, className = '' }: CardProps) {
  return <h3 className={cn('text-lg font-semibold text-gray-900', className)}>{children}</h3>
}

export function CardDescription({ children, className = '' }: CardProps) {
  return <p className={cn('text-sm text-gray-500 mt-1', className)}>{children}</p>
}

export function CardContent({ children, className = '' }: CardProps) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>
}

export function CardFooter({ children, className = '' }: CardProps) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>
}