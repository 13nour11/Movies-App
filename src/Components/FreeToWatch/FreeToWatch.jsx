import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../Context/MoviesContext'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PacmanLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

export default function FreeToWatch() {
    const [freeMoviesDetails, setfreeMoviesDetails] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    let {getMoviesFreeToWatch} = useContext(MoviesContext);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay:true,
        autoplaySpeed:1200,
    };

    async function freeToWatchMovies(){
        setisLoading(true);
        let response = await getMoviesFreeToWatch();
        console.log(response);
        if(response){
            setfreeMoviesDetails(response?.results)
        }
        setisLoading(false);
    }
    useEffect(()=>{
        freeToWatchMovies()
    },[])
    return <>


    {isLoading?<div className="flex justify-center items-center mx-auto  h-screen"><PacmanLoader color='#334155'/></div>
    :
    <div className="slider-container">
  <Slider {...settings}>
        {
            freeMoviesDetails?.map((movie)=>{return <div key={movie?.id} >
                <Link to={`/movieDetails/${movie.id}`}>
                <div className="px-5">
                    <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" className='w-full block movie-img'/>
                    <h3 className='my-2 font-semibold text-lg'>{movie?.title}</h3>
                    <p className='text-gray-500'>{movie?.release_date}</p>
                    </div>
                </Link>
                    
                </div>
            })
        }

    </Slider>
  </div>

    
    }
    </>
}
