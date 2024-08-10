import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../Context/MoviesContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import PopularMovies from '../PopularMovies/PopularMovies';

export default function Home() {
  const [moviesTrendingDetails, setmoviesTrendingDetails] = useState([]);

  let {getTrendingMovies , addToWatchList} = useContext(MoviesContext);

  async function TrendingMovies(){
    let response = await getTrendingMovies();
    console.log(response);
    if(response){
      setmoviesTrendingDetails(response?.results);
    }
  }

  async function watchList(movieId) {
    let response = await addToWatchList(movieId);
    if(response.success == true){
      toast.success("Movie is added to wish list successfully",{
        duration: 2000,
        // position: "left-top"
      })
    }else{
      toast.error("Error Occur",{
        duration: 2000,
        // position: "left -top"
      })
    }
    console.log(response);
    
  }

  useEffect(()=>{
    TrendingMovies()
  },[]);

  return <>
  <div className="container">
    <h1 className='text-3xl mx-auto mb-8 font-semibold'>Trending Movies</h1>
  <div className="row">
    {
      moviesTrendingDetails?.map((trend , index)=>{ 
        return<>
        <div className="w-1/6" key={index}>
          <div className="px-4">
            <Link to={`/movieDetails/${trend.id}`}>
            {/* https://image.tmdb.org/t/p/w500 => base img url */}
              <img src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`} alt="" className='block w-full'/>
              <h2 className='font-semibold text-lg text-start h-[70px] my-2'>{trend.title}</h2>
            </Link>
            
            
            <button onClick={()=>{watchList(trend.id)}} className='bg-slate-400 w-full rounded-lg text-white px-2 py-3 my-6'>Add To WatchList</button>
          
          </div>
        </div>
        </>
      })
    }
  </div>

  <h2 className="text-2xl font-semibold my-5 text-start">Popular Movies</h2>
  <PopularMovies/>
  </div>


  </>
}
