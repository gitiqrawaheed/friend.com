import { useState } from 'react'
import ScrollScene from './components/ScrollScene'
import FullscreenImage from './components/FullscreenImage'
import TextOverlay from './components/TextOverlay'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Opening Scene */}
      <ScrollScene>
        <div className="scene">
          <FullscreenImage 
            src="/pictures/0000.png" 
            alt="Subway car interior"
          />
          <TextOverlay position="center">
            <h1 className="title">friend.com</h1>
          </TextOverlay>
        </div>
      </ScrollScene>

      {/* Scene 1 */}
      <ScrollScene>
        <div className="scene">
          <FullscreenImage 
            src="/pictures/0001.png" 
            alt="Subway advertisement"
          />
          <TextOverlay position="bottom">
            <p>Something appeared in the subway.</p>
          </TextOverlay>
        </div>
      </ScrollScene>

      {/* Scene 2 */}
      <ScrollScene>
        <div className="scene">
          <FullscreenImage 
            src="/pictures/0002.png" 
            alt="Subway advertisement"
          />
        </div>
      </ScrollScene>

      {/* Scene 3 */}
      <ScrollScene>
        <div className="scene">
          <FullscreenImage 
            src="/pictures/0003.png" 
            alt="Subway advertisement"
          />
          <TextOverlay position="left">
            <p>No one knew who put it there.</p>
          </TextOverlay>
        </div>
      </ScrollScene>

      {/* Scene 4 */}
      <ScrollScene>
        <div className="scene">
          <FullscreenImage 
            src="/pictures/0004.png" 
            alt="Subway advertisement"
          />
        </div>
      </ScrollScene>

      {/* Scene 5 */}
      <ScrollScene>
        <div className="scene">
          <FullscreenImage 
            src="/pictures/0005.png" 
            alt="Subway advertisement"
          />
          <TextOverlay position="right">
            <p>Or why.</p>
          </TextOverlay>
        </div>
      </ScrollScene>

      {/* Word Cloud Scene */}
      <ScrollScene>
        <div className="scene">
          <FullscreenImage 
            src="/graffiti_wordcloud.png" 
            alt="Word cloud"
            objectFit="contain"
          />
          <TextOverlay position="bottom">
            <p>The words began to accumulate.</p>
          </TextOverlay>
        </div>
      </ScrollScene>

      {/* More scenes - you can add as many as needed */}
      {Array.from({ length: 20 }, (_, i) => i + 6).map((num) => (
        <ScrollScene key={num}>
          <div className="scene">
            <FullscreenImage 
              src={`/pictures/${String(num).padStart(4, '0')}.png`} 
              alt={`Scene ${num}`}
            />
          </div>
        </ScrollScene>
      ))}

      {/* Final Scene */}
      <ScrollScene>
        <div className="scene">
          <FullscreenImage 
            src="/pictures/0113.png" 
            alt="Final scene"
          />
          <TextOverlay position="center">
            <p>friend.com</p>
          </TextOverlay>
        </div>
      </ScrollScene>
    </div>
  )
}

export default App

