import { useEffect, useRef, useState } from 'react'
import TextBlock from '../TextBlock'
import './Scene09.css'

const blocks = [
  { type: 'text', content: "When the Friend.com campaign appeared in the subway system, I noticed the reactions before I noticed or knew the product, or even that this was supposed to be a physical, tangible product." },
  { type: 'text', content: "The ads contained enormous white spaces with short phrases. Within days, graffiti filled almost every…" },
  { type: 'image', src: '/pictures/0099.png', alt: 'Graffiti example 1' },
  { type: 'image', src: '/pictures/0102.png', alt: 'Graffiti example 2' },
  { type: 'image', src: '/pictures/0000.png', alt: 'Graffiti example 3' },
  { type: 'text', content: "Riders treated the ads as invitations for commentary. Words 'god,' 'souls,' 'sacred,' 'demon,' and 'idol' writing revealed anger, moral judgment, humor, and a vocabulary that reminded me of religious language (NYC Friends Graffiti Archive 2025)." }
]

export default function Scene09() {
  const [visibleBlocks, setVisibleBlocks] = useState(new Set())
  const blockRefs = useRef([])

  useEffect(() => {
    const observers = blocks.map((_, index) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setVisibleBlocks((prev) => {
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
        { threshold: 0.3, rootMargin: '0px' }
      )
    })

    blockRefs.current.forEach((ref, index) => {
      if (ref && observers[index]) {
        observers[index].observe(ref)
      }
    })

    return () => {
      blockRefs.current.forEach((ref, index) => {
        if (ref && observers[index]) {
          observers[index].unobserve(ref)
        }
      })
    }
  }, [])

  return (
    <section className="scene09">
      {blocks.map((block, index) => (
        <div
          key={index}
          ref={(el) => (blockRefs.current[index] = el)}
          className={`scene09-block ${visibleBlocks.has(index) ? 'visible' : ''}`}
        >
          {block.type === 'text' ? (
            <TextBlock>{block.content}</TextBlock>
          ) : (
            <div className="scene09-image">
              <img src={block.src} alt={block.alt} />
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
