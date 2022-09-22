import React, { useEffect, useState} from 'react';
import axios from 'axios';
import instance from './axios';
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const Row = ({title,fetchUrl,isLargeRow }) => {
const[movies,setMovies] = useState([])
const[trailerURL,setTrailerURL] = useState("")


const baseUrl = 'http://image.tmdb.org/t/p/original'

const urL =  "https://api.themoviedb.org/3"

useEffect(()=>{
   async function fetchData(){
    const request = await axios.get(urL+fetchUrl);
    setMovies(request.data.results)
  //  console.log(request.data.results)
   return request;
}
fetchData()
},[fetchUrl])

const opts = {
  height:'390',
  width:'100%',
  playerVars:{
    autoplay:1,
  }
};

// const handleClick =(movie)=>{
//  if(trailerURL){
//   setTrailerURL(" ");
//  }else{

  
//   movieTrailer(movie?.name || "")
//   .then((url)=>{
//     // const a = https://www.youtube.com/watch?v=
//     // console.log(new URL('https://www.youtube.com/watch?v='))
//     const urlParams = new URLSearchParams(new URL(url).search);
//     setTrailerURL(urlParams.get("v"))
//   }).catch((error)=>{
//     console.log(error)
//   })
//  }
// }

  // const handleClick = (movie) => {
  //   if (trailerURL) {
  //     setTrailerURL("");
  //   } else {
  //     movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerURL(urlParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };


  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };



// const handleClick = (movie)=>{

//  if(trailerURL){
//   setTrailerURL("");
//   }else{
//   movieTrailer(null ,{ tmdbId: movie.id })
//   .then((url)=>{
//     console.log("url is "+url);
//     const urlParams=new URLSearchParams(new URL(url).search);
//     console.log("urlParamsn"+urlParams);
//     setTrailerURL(urlParams.get("v"));
//   })
//   .catch((error)=> console.log(error));

// }
// }


  return (
    <div className='row'>
     
      <h2 className='row_title'>{title}</h2>
      <div className='row_posters'>
       {movies.map((movie)=>{
        return(
  <>
 
  <img key={movie.id}  
  onClick={()=>handleClick(movie)}
  className={ isLargeRow ? "row_posterLarge" : "row_poster"} 
  src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path  }`} 
  alt={movie.name} /> 
  
  </>
        )
     
       })}
      </div>
      {trailerURL  && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  )
}

export default Row
