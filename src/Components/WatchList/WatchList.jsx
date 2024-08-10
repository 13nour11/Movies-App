import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../Context/MoviesContext'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

// fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function WatchList() {

  const [moviesWatchListDetails, setmoviesWatchListDetails] = useState([]);

  let {getWatchList , removeFromWatchList} = useContext(MoviesContext);

  async function getMoviesWatchList() {
    let response = await getWatchList();
    console.log(response);
    setmoviesWatchListDetails(response.results)
  }

  async function removeMovieFromWatchList(movieId){
    let response = await removeFromWatchList(movieId);
    console.log(response);
    let filteredMovied = [...moviesWatchListDetails];
    

    if(response.success == true){
      filteredMovied.filter((movie)=>{movie.id !== movieId});
    setmoviesWatchListDetails(filteredMovied);

      toast.success("The Movie is removed successfully",{
        duration:2000
      })
    }else{
      toast.error("Error Occured",{
        duration:2000
      })
    }
  }

  useEffect(()=>{
    getMoviesWatchList()
  },[moviesWatchListDetails])

  return <>
  <div className="row">
    {
      moviesWatchListDetails?.length !== 0 ?(
      moviesWatchListDetails?.map((movie , index)=>{ 
        return<>
        <div className="w-1/6" key={index}>
          <div className="px-4">
            <Link to={`/movieDetails/${movie.id}`}>
            {/* https://image.tmdb.org/t/p/w500 => base img url */}
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='block w-full'/>
              <h2 className='font-semibold text-lg text-start h-[70px] my-2'>{movie.title}</h2>
            </Link>
            
            
            <button onClick={()=>{removeMovieFromWatchList(movie.id)}} className='bg-red-400 w-full rounded-lg text-white px-2 py-3 my-6 text-lg'>Remove</button>
          
          </div>
        </div>
        </>
      })
    ): <p className='text-2xl mx-auto font-semibold py-5 text-red-400'>
      {/* <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon> */}
      <i className="fa-solid fa-circle-exclamation me-2"></i>
      There is no movies at your watchlist
      </p>
    }
  </div>
  </>
}
