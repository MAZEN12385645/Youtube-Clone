import { useState } from 'react'
import './App.css'  

import {videos} from "./data"




function Sidebar() {
  return (
    <div className='sidebar'>
      {videos.map(video => (
        <div key={video.id} className='sidebar-video'>
          <div className='photo'>
            <img src={video.thumbnail} alt="video" />
          </div>
          <div className="text">
            <h1>{video.title}</h1>
            <p>{video.author}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Sidebar