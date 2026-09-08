// components/ui/Modal.tsx
import { ReactNode, useEffect } from 'react'
import { cn } from '@/lib/utils/helpers'
import { Button } from './Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Modal({ isOpen, onClose, children, title, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className={cn('bg-white rounded-xl shadow-xl w-full', sizes[size])}>
        {title && (
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}