import { useEffect, useRef, useState } from 'react'
import './WordCloudScene.css'

export default function WordCloudScene() {
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
    <section className="wordcloud-scene">
      <div ref={ref} className={`wordcloud-container ${isVisible ? 'visible' : ''}`}>
        <img src="/pictures/graffiti_wordcloud.png" alt="Word cloud of graffiti" />
        <p className="wordcloud-citation">
          Data scraped from{' '}
          <a href="https://nyc-friends.vercel.app" target="_blank" rel="noopener noreferrer">
            https://nyc-friends.vercel.app
          </a>
        </p>
      </div>
    </section>
  )
}
