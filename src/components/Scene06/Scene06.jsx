import { useEffect, useRef, useState } from 'react'
import './Scene06.css'

export default function Scene06() {
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
    <section className="scene06">
      <div className="scene06-background">
        <img src="/pictures/0070.png" alt="Subway ad" />
        <div className="scene06-overlay"></div>
      </div>
      <div ref={ref} className={`scene06-text ${isVisible ? 'visible' : ''}`}>
        <p>Social critique,</p>
      </div>
    </section>
  )
}
