import React from 'react'
import herosec from "../assets/video/herosec.mp4"

function HomeheroBG() {
  return (
    
     <div className='video-bg'>
         <video  className='background-video' autoPlay loop muted src={herosec} ></video>
    </div>
  )
}

export default HomeheroBG