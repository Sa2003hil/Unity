// import React from 'react'
import './Tetxtanim.css'
import videoFile from '../../assets/Apple.mp4'

const Textanim = () => {
    return (
        <div className='container'>
            <video className='video' autoPlay loop muted>
                <source src={videoFile} type='video/mp4' />
            </video>
            <div className='text-Box'>
                <h1>BGMI</h1>
                <div>Comming Soon</div>
            </div>

        </div>
    )
}

export default Textanim