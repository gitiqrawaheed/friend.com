import { useState, useEffect, useRef } from 'react'
import './ScrollScene.css'

export default function ScrollScene({ 
  children, 
  threshold = 0.1,
  fadeIn = true,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sceneRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold }
    )

    const handleScroll = () => {
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const sceneHeight = rect.height
        
        // Calculate scroll progress through the scene
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight + sceneHeight)
        ))
        setScrollProgress(progress)
      }
    }

    if (sceneRef.current) {
      observer.observe(sceneRef.current)
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initial calculation
    }

    return () => {
      if (sceneRef.current) {
        observer.unobserve(sceneRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return (
    <div
      ref={sceneRef}
      className={`scroll-scene ${className} ${fadeIn && isVisible ? 'visible' : ''}`}
      data-scroll-progress={scrollProgress}
    >
      {children}
    </div>
  )
}

