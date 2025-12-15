import React from 'react'
import vid from "../images/video.mp4"

function Video() {
  return (
    <div className='h-full w-full'>
      <video src={vid} autoPlay loop muted className='h-full w-full object-cover'></video>
    </div>
  )
}

export default Video
