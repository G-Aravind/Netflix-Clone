import React, { useEffect,useState } from 'react';
import requests from './requests';
import axios from 'axios';
import './Banner.css'

const Banner = () => {

    const[movie,setMovie] = useState([])
    const baseUrl = 'http://image.tmdb.org/t/p/original'

    const url =  "https://api.themoviedb.org/3"

   useEffect(()=>{
    async function fetchData(){
    const request = await axios.get(url+requests.fetchNetflixOriginals);
    setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)+1]);
    //  console.log(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
     return request;
    }
    fetchData()
   },[])

   console.log(movie)

function truncate(str,n){
return str?.length > n ? str.substr(0,n-1) + "..." : str;
}


  return (
    <header className='banner'
     style={{
     
     backgroundSize:'cover',
     backgroundImage:`url(${baseUrl}${movie?.backdrop_path})`,
     backgroundPosition:"center"
     }} >
    
    
    <div className='banner_content'>
       <h1 className='banner_title'> {movie?.title || movie?.name || movie?.original_name}</h1>
       <div className='banner_buttons'>
         <button className='banner_btn'>Play</button>
         <button className='banner_btn'>My List</button>
       </div>
       <h5 className='banner_description'>{truncate(movie?.overview,150)}</h5>
    </div>
    <div className='banner_fadeBottom'/>
    </header>
  )
}

export default Banner
