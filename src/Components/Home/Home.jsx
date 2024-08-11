import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../Context/MoviesContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import PopularMovies from '../PopularMovies/PopularMovies';
import FreeToWatch from '../FreeToWatch/FreeToWatch';
import LatestTrailersPopular from '../LatestTrailersPopular/LatestTrailersPopular';
import TrendingMovies from '../TrendingMovies/TrendingMovies';


{/* https://image.tmdb.org/t/p/w500 => base img url */}
export default function Home() {

  return <>
  <div className="container">
    <h1 className='text-2xl mb-8 mt-3 font-semibold text-start'>Trending Movies</h1>
    <TrendingMovies/>

  <h2 className="text-2xl font-semibold my-5 text-start">Popular Movies:</h2>
  <PopularMovies/>
  <h2 className="text-2xl font-semibold my-5 text-start">Latest Trailers Popular Movies:</h2>
  <LatestTrailersPopular/>
 

  <h2 className="text-2xl font-semibold my-5 text-start">Free To Watch Movies:</h2>
  <FreeToWatch/>
  </div>




  </>
}
