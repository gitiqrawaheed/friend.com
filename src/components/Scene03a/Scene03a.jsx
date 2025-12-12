import { useEffect, useRef, useState } from 'react'
import './Scene03a.css'

export default function Scene03a() {
  const [imageVisible, setImageVisible] = useState(false)
  const [morphActive, setMorphActive] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Image fade-in observer
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setImageVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1, rootMargin: '0px' }
    )

    // Scroll handler for morph - triggers based on scroll position
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const sectionTop = rect.top
        
        // Only start morphing when section is well into viewport and user has scrolled
        // Wait until section top is at least 30% down the viewport before starting morph
        const scrollThreshold = viewportHeight * 0.3
        
        if (sectionTop < scrollThreshold && sectionTop > -viewportHeight) {
          // Calculate progress: 0 when at threshold, 1 when scrolled past
          const progress = Math.max(0, Math.min(1, (scrollThreshold - sectionTop) / (viewportHeight * 0.6)))
          if (progress > 0.5) {
            setMorphActive(true)
          } else {
            setMorphActive(false)
          }
        } else {
          setMorphActive(false)
        }
      }
    }

    if (sectionRef.current) {
      imageObserver.observe(sectionRef.current)
    }

    // Set up scroll listener for morph
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => {
      if (sectionRef.current) {
        imageObserver.unobserve(sectionRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="scene03a">
      <div className="scene03a-image-container">
        <div className={`scene03a-image ${imageVisible ? 'visible' : ''}`}>
          <div className={`morph-image morph-a ${morphActive ? 'fade-out' : ''}`}>
            <img src="/pictures/without graffiti 2.png" alt="Without graffiti" />
          </div>
          <div className={`morph-image morph-b ${morphActive ? 'fade-in' : ''}`}>
            <img src="/pictures/with graffiti 2.PNG" alt="With graffiti" />
          </div>
        </div>
      </div>
    </section>
  )
}
