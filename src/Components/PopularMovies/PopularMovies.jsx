import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../Context/MoviesContext'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export default function PopularMovies() {

    const [popularMoviesDetails, setpopularMoviesDetails] = useState([]);

    let {getPopularMovies } = useContext(MoviesContext);

    
    async function popularMovies() {
        let response = await getPopularMovies();
        console.log(response.results);
        if(response){
            setpopularMoviesDetails(response.results);

        }
    }


    // react-slick => as carsoul autoplay
    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay:true,
        autoplaySpeed:1200,
    };

    useEffect(()=>{
        popularMovies();
    },[])

  return <>
  <div className="slider-container">
  <Slider {...settings}>
        {
            popularMoviesDetails?.map((movie)=>{ 
              return <Link to={`/movieDetails/${movie.id}`}  key={movie?.id}>
                
             <div >
                    <div className="px-5">
                    <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" className='w-full block movie-img'/>
                    <h3 className='my-5 font-semibold text-lg'>{movie?.title}</h3>
                    <p className='text-gray-500'>{movie?.release_date}</p>
                    </div>
                </div>
              </Link>
            })
        }

    </Slider>
  </div>


    
  </>
}
