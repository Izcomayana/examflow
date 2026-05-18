'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(options: {
  threshold?: number
  once?: boolean
} = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const threshold = options.threshold ?? 0.1
  const once = options.once ?? true

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, isVisible }
}
