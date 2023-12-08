import React,{ useState,useEffect } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import './row.css'
import './Banner.css'


function Banner({fetchUrl}) {
    const [allMovies,setAllMovies]=useState([])


    const base_Url_img='https://image.tmdb.org/t/p/original'

    const fetchData=async()=>{
        const response=await tmdbAxiosInstance.get(fetchUrl)

        setAllMovies(response.data.results[Math.floor(Math.random()*response.data.results.length)])
        console.log(Math.floor(Math.random()*response.data.results.length))
    }
    useEffect(()=>{
      fetchData()},[])
    console.log(allMovies)
  return (
    <div style={{
        height:'600px', width:'100%',
        backgroundImage:`url(${base_Url_img}${allMovies.backdrop_path})`,backgroundSize:'cover',
        backgroundAttachment:'fixed'
    }}>
        <div className='banner_content'>
            <h1>{allMovies?.name}</h1>
            <h2>{allMovies?.overview}...</h2>
        </div>

    </div>
  )
}

export default Banner