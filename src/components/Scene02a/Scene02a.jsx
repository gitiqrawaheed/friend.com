import { useEffect, useRef, useState } from 'react'
import './Scene02a.css'

export default function Scene02a() {
  const [text1Visible, setText1Visible] = useState(false)
  const [text2Visible, setText2Visible] = useState(false)
  const [morphActive, setMorphActive] = useState(false)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const morphRef = useRef(null)

  useEffect(() => {
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
          const isVisible = entry.isIntersecting
          setText2Visible(isVisible)
          if (isVisible) {
            setTimeout(() => setMorphActive(true), 300)
          } else {
            setMorphActive(false)
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px' }
    )

    const morphObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setMorphActive(entry.isIntersecting && text2Visible)
        })
      },
      { threshold: 0.3, rootMargin: '0px' }
    )

    if (text1Ref.current) text1Observer.observe(text1Ref.current)
    if (text2Ref.current) text2Observer.observe(text2Ref.current)
    if (morphRef.current) morphObserver.observe(morphRef.current)

    return () => {
      if (text1Ref.current) text1Observer.unobserve(text1Ref.current)
      if (text2Ref.current) text2Observer.unobserve(text2Ref.current)
      if (morphRef.current) morphObserver.unobserve(morphRef.current)
    }
  }, [text2Visible])

  return (
    <section className="scene02a">
      <div
        ref={text1Ref}
        className={`scene02a-text ${text1Visible ? 'visible' : ''}`}
      >
        <p>No product description. No explanation.</p>
      </div>

      <div
        ref={text2Ref}
        className={`scene02a-text ${text2Visible ? 'visible' : ''}`}
      >
        <p>When riders learned more about what this ominous ad was trying to sell…</p>
      </div>

      <div ref={morphRef} className="scene02a-morph">
        <div className={`morph-image morph-a ${morphActive ? 'fade-out' : ''}`}>
          <img src="/pictures/without graffiti 1.png" alt="Without graffiti" />
        </div>
        <div className={`morph-image morph-b ${morphActive ? 'fade-in' : ''}`}>
          <img src="/pictures/with graffiti 1.PNG" alt="With graffiti" />
        </div>
      </div>
    </section>
  )
}
