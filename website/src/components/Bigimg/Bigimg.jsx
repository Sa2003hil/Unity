import React from 'react'
import remote from '../../assets/Logo.png'
import char from '../../assets/remote.png'


export function ImgWithRoundedCorners() {
    return (
        <div>
            <div className='text-white mt-2 font-bold text-xl mx-72 text-center'>
                Dive into the captivating world of BGmi, an anime-inspired game, as you embark on thrilling adventures, exclusively on our website
            </div>
            {/* <div className='flex justify-center align-middle gap-6'>
                <div className=' text-gray-600 ml-44 font-bold text-4xl text-center mb-12 w-96 '>
                    BGMI
                </div>
                <div>
                    <img src={char} alt="img" />
                </div>
            </div> */}



            <img
                className="h-96 m-auto rounded-lg object-cover object-center mt-10"
                src="https://wstatic-prod.pubg.com/web/live/main_e688ade/img/aeca002.jpg"
                alt="nature image"
            />
        </div>
    );
}

export default ImgWithRoundedCorners;