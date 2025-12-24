import { useState } from 'react'
import './App.css'
import pic from "./maxresdefault.jpg"
import Sidebar from './Sidebar'
import {videos} from "./data"
import Navbar from './Navbar'

function App() {
  const [isPlaying, setIsPlaying] = useState(false) 
  return (
    <div>
      <Navbar/>
      {!isPlaying && (
        <div className="baba">
          {videos.map(video => (
            <div
              key={video.id}
              onClick={() => setIsPlaying(true)}
              className='video-container'
            >
              <img src={video.thumbnail} alt="video" />
              <h1>{video.title}</h1>
              <p>{video.author}</p>
            </div>
          ))}
        </div>
      )}

      {isPlaying && (
        <div className='videoplayer'>
          <iframe
            width="600"
            height="330"
            src={videos[0].url}
            title="YouTube video player"
            allow='fullscreen'
          ></iframe>
          <Sidebar />
        </div>
      )}
    </div>
  )
}

export default App
