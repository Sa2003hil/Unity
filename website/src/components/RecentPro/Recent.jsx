import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";

const Recent = () => {
    const [recentpros, setRecentpros] = useState([]);
    useEffect(() => {
        axios.get('/api/recentpros')
            .then((response) => {
                setRecentpros(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <div className='text-white font-semibold text-2xl text-center mt-32 mb-6'>
                Recent Projects
            </div>

            {/* <div className=' overflow-hidden '>
                    <img src="https://cdn.wccftech.com/wp-content/uploads/2015/03/GTA-V-1-1030x579.jpg" height={600} className=' rounded-sm w-80 ml-4  cursor-pointer  duration-500 ease-in-out hover:scale-110 ' />
                </div>
                <div className='overflow-hidden '>
                    <img src="https://wallpapers.com/images/hd/4k-hd-valorant-1m8v8h6l10gnss81.jpg" height={600} className=' rounded-sm w-80 ml-4  cursor-pointer duration-500 ease-in-out hover:scale-110 ' />
                </div>
                <div className='overflow-hidden '>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnx9sirflzVGU0_ekU5RZyeZp9nqVaDCiToQ&usqp=CAU" height={600} className=' rounded-sm w-80 ml-4  cursor-pointer duration-500 ease-in-out hover:scale-110' />
                </div>
                <div className='overflow-hidden '>
                    <img src="https://wallpaperaccess.in/public/uploads/small/41663740971jwhdxxf8uymbuqlq29uhauvmbjtxgrsygh032hw6nvzojcwd3cyoslmp15hqwsiqui5zlsz9luykg3xx3seltjue1hu961yfxiqg.jpg" height={600} className=' rounded-sm w-80 ml-4  duration-500 ease-in-out hover:scale-110 cursor-pointer ' />
                </div>
                <div className=' overflow-hidden'>
                    <img src="https://c4.wallpaperflare.com/wallpaper/903/725/119/clash-of-clans-4k-full-hd-wallpaper-preview.jpg" height={600} className=' rounded-sm w-80 ml-4  cursor-pointer duration-500 ease-in-out hover:scale-110' />
                </div>
                <div className='overflow-hidden '>
                    <img src="https://images.hdqwalls.com/wallpapers/garena-free-fire-z4.jpg" height={600} className=' rounded-sm w-80 ml-4  cursor-pointer duration-500 ease-in-out hover:scale-110 ' />
                </div> */}
            <div className='flex justify-center  text-center align-middle flex-wrap gap-3'>
                {recentpros.map((recentpro, index) => (
                    <div key={recentpro.id} className='overflow-hidden'>
                        <img
                            src={recentpro.src}
                            height={600}
                            className=' rounded-sm w-80 ml-4  cursor-pointer duration-500 ease-in-out hover:scale-110' alt='recentpro'
                        />
                    </div>
                ))}
            </div>

            <div className=' text-center  mt-9'>
                <a href="#buttons-with-link">
                    <Button>See All</Button>
                </a>
            </div>
        </>
    )
}

export default Recent