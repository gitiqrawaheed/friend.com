import { useEffect, useRef, useState } from 'react'
import './Scene02b.css'

export default function Scene02b() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.3, rootMargin: '0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section className="scene02b">
      <div ref={ref} className={`scene02b-text ${isVisible ? 'visible' : ''}`}>
        <p>…they started writing back.</p>
      </div>
    </section>
  )
}
