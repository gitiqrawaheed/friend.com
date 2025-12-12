import { useState } from 'react'
import './FullscreenImage.css'

export default function FullscreenImage({ 
  src, 
  alt = '', 
  className = '',
  objectFit = 'cover'
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`fullscreen-image ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`fullscreen-image__img ${loaded ? 'loaded' : ''}`}
        style={{ objectFit }}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  )
}

