import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { MoviesContext } from '../../Context/MoviesContext';
import toast from 'react-hot-toast';
import { PacmanLoader } from 'react-spinners';

export default function TrendingMovies() {
    const [moviesTrendingDetails, setmoviesTrendingDetails] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isSpinner, setisSpinner] = useState(false);
    const [currMovie, setcurrMovie] = useState(0);

    let {getTrendingMovies , addToWatchList} = useContext(MoviesContext);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    async function TrendingMovies(){
      setisLoading(true)
        let response = await getTrendingMovies();
        console.log(response);
        if(response){
          setmoviesTrendingDetails(response?.results);
          setisLoading(false)
        }
      }
    
      async function watchList(movieId) {
        setisSpinner(true);
        setcurrMovie(movieId);
  
        let response = await addToWatchList(movieId);
        if(response.success == true){
          setisSpinner(false);
          toast.success("Movie is added to wish list successfully",{
            duration: 2000,
            // position: "right-top"
          })
        }else{
          setisSpinner(false)
  
          toast.error("Error Occur",{
            duration: 2000,
            // position: "right-top"
          })
        }
        console.log(response);
        
      }
      
      useEffect(()=>{
        TrendingMovies()
      },[]);
    return<>
        {isLoading?<div className="flex justify-center items-center mx-auto  h-screen"><PacmanLoader color='#334155'/></div>
:
    <Slider {...settings}>
        {
            moviesTrendingDetails?.map((trend)=>{return <div key={trend?.id} >
                <div className="px-4">
            <Link to={`/movieDetails/${trend.id}`}>
            {/* https://image.tmdb.org/t/p/w500 => base img url */}
              <img src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`} alt="" className='block w-full'/>
              <h2 className='font-semibold text-lg   my-2'>{trend.title}</h2>
              <p className="text-gray-500">{trend.release_date}</p>
            </Link>
            
            
            <button onClick={()=>{watchList(trend.id)}} className='bg-slate-400 w-full rounded-lg text-white px-2 py-3 my-6'>
              {isSpinner&& currMovie===trend.id?  <i className="fa-solid fa-circle-notch fa-spin"></i>
              :"Add To WatchList"}
            </button>
          
          </div>
                    
                </div>
            })
        }

    </Slider>
  }
    
    </>
}
