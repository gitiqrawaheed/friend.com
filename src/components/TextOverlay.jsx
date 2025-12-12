import './TextOverlay.css'

export default function TextOverlay({ 
  children, 
  position = 'center',
  className = ''
}) {
  return (
    <div className={`text-overlay text-overlay--${position} ${className}`}>
      {children}
    </div>
  )
}

