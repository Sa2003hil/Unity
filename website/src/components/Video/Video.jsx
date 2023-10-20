import React from 'react'
import './video.css'
import videoFile from '../../assets/video.mp4'

const video = () => {
    return (
        <div>
            <video src={videoFile} autoPlay muted loop className='video-bg' />
            <div className='bg-overlay' ></div>

        </div>
    )
}

export default video