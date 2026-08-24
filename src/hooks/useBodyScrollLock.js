import { useEffect } from 'react'

// Locks body scroll while `locked` is true (used by modals)
export function useBodyScrollLock(locked) {
  useEffect(() => {
    if (locked) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [locked])
}
