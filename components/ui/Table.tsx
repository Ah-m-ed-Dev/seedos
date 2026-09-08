// components/ui/Table.tsx
import { ReactNode } from 'react'
import { cn } from '@/lib/utils/helpers'

export function Table({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn('w-full text-sm', className)}>
        {children}
      </table>
    </div>
  )
}

export function TableHead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <thead className={cn('bg-gray-50 border-b border-gray-200', className)}>
      <tr>{children}</tr>
    </thead>
  )
}

export function TableHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <th className={cn('px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider', className)}>
      {children}
    </th>
  )
}

export function TableBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <tbody className={cn('divide-y divide-gray-200', className)}>{children}</tbody>
}

export function TableRow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <tr className={cn('hover:bg-gray-50 transition-colors', className)}>{children}</tr>
}

export function TableCell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <td className={cn('px-4 py-3 whitespace-nowrap', className)}>{children}</td>
}