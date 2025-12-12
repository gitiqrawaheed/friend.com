import React, { useEffect, useRef, useState } from 'react'
import { items } from '../../data/wordFrequency'
import './GraffitiScroller.css'

export default function GraffitiScroller({ children, highlightWords = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const wordListRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const observers = sectionsRef.current.map((ref, index) => {
      if (!ref) return null
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index)
            }
          })
        },
        { threshold: 0.5 }
      )
    })

    sectionsRef.current.forEach((ref, index) => {
      if (ref && observers[index]) {
        observers[index].observe(ref)
      }
    })

    return () => {
      sectionsRef.current.forEach((ref, index) => {
        if (ref && observers[index]) {
          observers[index].unobserve(ref)
        }
      })
    }
  }, [children])

  const isWordHighlighted = (word) => {
    return highlightWords.length > 0 && highlightWords.includes(word)
  }

  return (
    <div className="graffiti-scroller">
      <div className="graffiti-scroller-left">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="graffiti-scroller-section"
          >
            {child}
          </div>
        ))}
      </div>
      <div ref={wordListRef} className="graffiti-scroller-right">
        <div className="word-list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`word-item ${
                activeIndex === index || isWordHighlighted(item.word)
                  ? 'active'
                  : ''
              } ${isWordHighlighted(item.word) ? 'highlighted' : ''}`}
            >
              {item.word}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
