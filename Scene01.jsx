import { useState, useEffect, useRef } from 'react'
import './Scene01.css'

export default function Scene01() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [text1Visible, setText1Visible] = useState(false)
  const [text2Visible, setText2Visible] = useState(false)
  const [text3Visible, setText3Visible] = useState(false)
  const sceneRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const sceneHeight = rect.height
        
        // Calculate scroll progress: 0 at top, 1 at bottom of scene
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight + sceneHeight)
        ))
        setScrollProgress(progress)

        // Text reveals based on scroll progress
        // Adjust these thresholds (0.1, 0.3, 0.5) to change when text appears
        setText1Visible(progress > 0.1)
        setText2Visible(progress > 0.3)
        setText3Visible(progress > 0.5)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Calculate opacity for graffiti image based on scroll progress
  // Graffiti image starts fading in at 60% scroll, fully visible at 90%
  const graffitiOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.6) / 0.3))

  return (
    <div ref={sceneRef} className="scene01">
      {/* Fullscreen background - without-graffiti-1.png */}
      <div className="scene01__background">
        <img 
          src="pictures/without graffiti 1.png" 
          alt="Subway car without graffiti"
          className="scene01__bg-image"
        />
      </div>

      {/* Graffiti overlay - with-graffiti-1.png fades in on scroll */}
      {/* To swap background images, change the src and adjust opacity transition timing */}
      <div 
        className="scene01__graffiti-overlay"
        style={{ opacity: graffitiOpacity }}
      >
        <img 
          src="pictures/with graffiti 1.PNG" 
          alt="Subway car with graffiti"
          className="scene01__bg-image"
        />
      </div>

      {/* Text Overlay 1 */}
      <div className={`scene01__text scene01__text--1 ${text1Visible ? 'visible' : ''}`}>
        <p>A mysterious ad came to New York City riders.</p>
      </div>

      {/* Text Overlay 2 */}
      <div className={`scene01__text scene01__text--2 ${text2Visible ? 'visible' : ''}`}>
        <p>No product description. No explanation.</p>
      </div>

      {/* Text Overlay 3 */}
      <div className={`scene01__text scene01__text--3 ${text3Visible ? 'visible' : ''}`}>
        <p>When riders learned more about what this ominous ad was trying to sell…</p>
      </div>
    </div>
  )
}

