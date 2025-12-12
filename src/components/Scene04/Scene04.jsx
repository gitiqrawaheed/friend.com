import { useEffect, useRef, useState } from 'react'
import './Scene04.css'

export default function Scene04() {
  const [warningVisible, setWarningVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const warningRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const warningObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWarningVisible(true)
          } else {
            setWarningVisible(false)
          }
        })
      },
      { threshold: 0.3 }
    )

    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setTextVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.3, rootMargin: '0px' }
    )

    if (warningRef.current) warningObserver.observe(warningRef.current)
    if (textRef.current) textObserver.observe(textRef.current)

    return () => {
      if (warningRef.current) warningObserver.unobserve(warningRef.current)
      if (textRef.current) textObserver.unobserve(textRef.current)
    }
  }, [])

  return (
    <section className="scene04">
      <div className="scene04-background">
        <img src="/pictures/0019.png" alt="Subway station" />
        <div className="scene04-overlay"></div>
      </div>
      <div
        ref={warningRef}
        className={`scene04-warning ${warningVisible ? 'visible' : ''}`}
      >
        WARNING
      </div>
      <div ref={textRef} className={`scene04-text ${textVisible ? 'visible' : ''}`}>
        <p>Across the city, the white blank space on the ad were filled with warnings,</p>
      </div>
    </section>
  )
}
