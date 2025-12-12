import { useEffect, useRef, useState } from 'react'
import './Scene08.css'

const titleText = "NYC, God, and Unwanted Friends: An Analysis of Graffiti Responding to Friend.com Subway Ads"

export default function Scene08() {
  const [phase, setPhase] = useState(0) // 0: behind, 1: front, 2: fade to black
  const sectionRef = useRef(null)
  const behindTitleRef = useRef(null)
  const frontTitleRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const sectionHeight = rect.height
        const sectionTop = rect.top
        
        // Calculate how far through the section we've scrolled
        // When section top is at viewport top, progress is 0
        // When section top is at -sectionHeight, progress is 1
        const totalScroll = sectionHeight + viewportHeight
        const scrolled = viewportHeight - sectionTop
        const scrollProgress = Math.max(0, Math.min(1, scrolled / totalScroll))
        
        if (scrollProgress < 0.2) {
          setPhase(0) // Behind image
        } else if (scrollProgress < 0.6) {
          setPhase(1) // Front of image
        } else {
          setPhase(2) // Fade to black
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="scene08">
      <div className={`scene08-background ${phase === 2 ? 'fade-out' : ''}`}>
        <img src="/pictures/background for title.png" alt="Background" />
        <div className={`scene08-fade-overlay ${phase === 2 ? 'active' : ''}`}></div>
      </div>
      <div
        ref={behindTitleRef}
        className={`scene08-title scene08-title-behind ${phase === 0 ? 'active' : ''}`}
      >
        {titleText}
      </div>
      <div
        ref={frontTitleRef}
        className={`scene08-title scene08-title-front ${phase >= 1 ? 'active' : ''}`}
      >
        {titleText}
      </div>
    </section>
  )
}
