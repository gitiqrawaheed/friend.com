import { useEffect, useRef, useState } from 'react'
import './Scene01.css'

export default function Scene01() {
  const [imageVisible, setImageVisible] = useState(false)
  const [morphActive, setMorphActive] = useState(false)
  const [text1Visible, setText1Visible] = useState(false)
  const [text2Visible, setText2Visible] = useState(false)
  const sectionRef = useRef(null)
  const morphRef = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)

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

    // Text observers
    const text1Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setText1Visible(entry.isIntersecting)
        })
      },
      { threshold: 0.3, rootMargin: '0px' }
    )

    const text2Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setText2Visible(entry.isIntersecting)
        })
      },
      { threshold: 0.3, rootMargin: '0px' }
    )

    if (sectionRef.current) {
      imageObserver.observe(sectionRef.current)
    }
    if (text1Ref.current) text1Observer.observe(text1Ref.current)
    if (text2Ref.current) text2Observer.observe(text2Ref.current)

    // Set up scroll listener for morph
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => {
      if (sectionRef.current) {
        imageObserver.unobserve(sectionRef.current)
      }
      if (text1Ref.current) text1Observer.unobserve(text1Ref.current)
      if (text2Ref.current) text2Observer.unobserve(text2Ref.current)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="scene01">
      <div className="scene01-image-container">
        <div
          ref={morphRef}
          className={`scene01-image ${imageVisible ? 'visible' : ''}`}
        >
          <div className={`morph-image morph-a ${morphActive ? 'fade-out' : ''}`}>
            <img
              src="/pictures/without graffiti 1.png"
              alt="Subway ad without graffiti"
            />
          </div>
          <div className={`morph-image morph-b ${morphActive ? 'fade-in' : ''}`}>
            <img
              src="/pictures/with graffiti 1.PNG"
              alt="Subway ad with graffiti"
            />
          </div>
        </div>
      </div>

      <div
        ref={text1Ref}
        className={`scene01-text ${text1Visible ? 'visible' : ''}`}
      >
        <p>A mysterious ad came to New York City riders.</p>
      </div>

      <div
        ref={text2Ref}
        className={`scene01-text scene01-text-2 ${text2Visible ? 'visible' : ''}`}
      >
        <p>No product description. No explanation.</p>
      </div>
    </section>
  )
}
