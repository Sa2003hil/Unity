/*
There are two ways to import file in node js
1. Common JS
2. ES6 modules js


-> syntax for common js (jab code synchronously chlana ho)

const express = require('express')

-> syntax for ES6 modules js (jab code asynchronously chlana ho)

import express from 'express'


*/

import express from 'express'
const app = express()

// Making a server with express : yhaan par humne slash route pe callback fire kiya hai jisme humne request aur response ko pass kiya hai aur response ko send kar diya hai
// app.get('/', (req, res) => {
//   res.send('Server is ready!')
// })

// This is the preocess of making route in express
app.get('/api/products', (req, res) => {
  const products = [
    {
      id: '1',
      name: 'Gaming Mouse',
      src: 'https://assets-prd.ignimgs.com/2022/09/23/top25modernpcgames-blogroll-1663951042311.jpg',
      followers: 1200
    },
    {
      id: '2',
      name: 'Gaming Keyboard',
      src: 'https://cdn.mos.cms.futurecdn.net/GTvQDMxXZ89cgMShEMETGg.jpg',
      followers: 1500
    },
    {
      id: '3',
      name: 'Gaming Headphones',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_pQaQEEnu__MOBETfFztxFq3gL5fTb1s0Q&usqp=CAU',
      followers: 2000
    },
    {
      id: '4',
      name: 'Gaming Headphones',
      src: 'https://media.istockphoto.com/id/1290727524/photo/young-man-wearing-headset-and-play-computer-video-games-online-home-isolated-for-coronavirus.jpg?s=612x612&w=0&k=20&c=L7rFTMWnyh3O5iokwdoBJbyzzvcBd_RS3fLnc-6yQzQ=',
      followers: 2000
    }
  ]
  res.send(products)
})

app.get('/api/recentpros', (req, res) => {
  const recentpros = [
    {
      id: '1',
      src: 'https://cdn.wccftech.com/wp-content/uploads/2015/03/GTA-V-1-1030x579.jpg'
    },
    {
      id: '2',
      src: 'https://wallpapers.com/images/hd/4k-hd-valorant-1m8v8h6l10gnss81.jpg'
    },
    {
      id: '3',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnx9sirflzVGU0_ekU5RZyeZp9nqVaDCiToQ&usqp=CAU'
    },
    {
      id: '4',
      src: 'https://www.pixground.com/wp-content/uploads/2023/06/Metal-Gear-Solid-Delta-Snake-Eater-4K-Wallpaper-1024x576.webp'
    },
    {
      id: '5',
      src: 'https://c4.wallpaperflare.com/wallpaper/903/725/119/clash-of-clans-4k-full-hd-wallpaper-preview.jpg'
    },
    {
      id: '6',
      src: 'https://images.hdqwalls.com/wallpapers/garena-free-fire-z4.jpg'
    }
  ]
  res.send(recentpros)
})

// Making a port for the server
const port = process.env.PORT || 3000

// Listening to the port

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`)
})
