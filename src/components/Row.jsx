import React,{ useState,useEffect } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import './row.css'


function Row({title,fetchUrl}){


    const [allMovies,setAllMovies]=useState([])


    const base_Url_img='https://image.tmdb.org/t/p/original'

    const fetchData=async()=>{
        const response=await tmdbAxiosInstance.get(fetchUrl)
        setAllMovies(response.data.results)
    }
    useEffect(()=>{
      fetchData()},[])
    console.log(allMovies)
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='movies-row'>
          { 
            allMovies?.map((item)=>(
           <img  className='movie' src={`${base_Url_img}${item.backdrop_path}`} alt="no image" />
           ))
          }
        </div>
    </div>
    
  )
}

export default Row