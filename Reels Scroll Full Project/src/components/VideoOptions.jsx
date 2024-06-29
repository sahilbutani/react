import React from 'react'
import bookmark from '../images/videooptions/bookmark.svg'
import floorplan from '../images/videooptions/FloorPlan.png'
import messagingicon from '../images/videooptions/Messaging.png'
import mapicon from '../images/videooptions/map.svg'
import handleRedirect from '../common/handleRedirect'

const VideoOptions = () => {
  return (
    <div className='video-options'>
        <img src={messagingicon} alt="" onClick={handleRedirect}/>
        <img src={bookmark} alt="" onClick={handleRedirect}/>
        <img src={mapicon} alt="" onClick={handleRedirect}/>
        <img src={floorplan} alt="" onClick={handleRedirect}/>
    </div>
  )
}

export default VideoOptions