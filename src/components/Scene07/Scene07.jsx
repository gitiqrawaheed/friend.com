import { useEffect, useRef, useState } from 'react'
import './Scene07.css'

const images = [
  '0029.png',
  '0036.png',
  '0037.png',
  '0041.png',
  '0035.png',
  '0053.png',
  '0055.png',
  '0072.png'
]

export default function Scene07() {
  const [textVisible, setTextVisible] = useState(false)
  const [visibleImages, setVisibleImages] = useState(new Set())
  const textRef = useRef(null)
  const imageRefs = useRef([])

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setTextVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.3, rootMargin: '0px' }
    )

    const imageObservers = images.map((_, index) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setVisibleImages((prev) => {
              const newSet = new Set(prev)
              if (entry.isIntersecting) {
                newSet.add(index)
              } else {
                newSet.delete(index)
              }
              return newSet
            })
          })
        },
        { threshold: 0.2, rootMargin: '0px' }
      )
    })

    if (textRef.current) {
      textObserver.observe(textRef.current)
    }

    imageRefs.current.forEach((ref, index) => {
      if (ref && imageObservers[index]) {
        imageObservers[index].observe(ref)
      }
    })

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current)
      }
      imageRefs.current.forEach((ref, index) => {
        if (ref && imageObservers[index]) {
          imageObservers[index].unobserve(ref)
        }
      })
    }
  }, [])

  return (
    <section className="scene07">
      <div ref={textRef} className={`scene07-text ${textVisible ? 'visible' : ''}`}>
        <p>And a loud declaration of protest.</p>
      </div>
      <div className="scene07-images">
        {images.map((img, index) => (
          <div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className={`scene07-image ${visibleImages.has(index) ? 'visible' : ''}`}
            style={{
              transform: `translateX(${(index % 2 === 0 ? 1 : -1) * (index * 20)}px) rotate(${(index % 2 === 0 ? 1 : -1) * (index * 3)}deg)`
            }}
          >
            <img src={`/pictures/${img}`} alt={`Protest graffiti ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
