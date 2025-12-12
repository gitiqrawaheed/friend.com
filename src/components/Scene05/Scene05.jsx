import { useEffect, useRef, useState } from 'react'
import './Scene05.css'

export default function Scene05() {
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
    <section className="scene05">
      <div className="scene05-background">
        <img src="/pictures/0006.png" alt="Subway ad" />
        <div className="scene05-overlay"></div>
      </div>
      <div ref={ref} className={`scene05-text ${isVisible ? 'visible' : ''}`}>
        <p>Silly quips,</p>
      </div>
    </section>
  )
}
