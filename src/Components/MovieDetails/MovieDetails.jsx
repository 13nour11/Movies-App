import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../Context/MoviesContext';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { PacmanLoader } from 'react-spinners';
import '@fortawesome/fontawesome-free';

export default function MovieDetails() {

    const [movieDetails, setmovieDetails] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [isSpinner, setisSpinner] = useState(false);
    const [currMovie, setcurrMovie] = useState(0);

    let {getMovieDetails , addToWatchList} = useContext(MoviesContext);


    let {id} = useParams();
    console.log(id);

    async function getDetails(id) {
        setisLoading(true)
        let response = await getMovieDetails(id);
        console.log(response);
        setmovieDetails(response)
        setisLoading(false)
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

    // component did mount
    useEffect(()=>{
        getDetails(id);
    },[]);

  return <>
  <Helmet>
    <title>
      Movie Details
    </title>
  </Helmet>
  
  {isLoading?<div className="flex justify-center items-center mx-auto  h-screen"><PacmanLoader color='#334155'/></div>

    :
    <div className="container mx-auto py-5">
    <div className="row justify-around">
        <div className="w-1/4">
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`} alt="" className='w-full block'/>
        </div>
        <div className="w-2/4 text-start">
            <h2 className='font-semibold text-2xl'>{movieDetails?.title}</h2>
            <p className='text-lg text-gray-500 my-5 '>{movieDetails?.overview}</p>

            <div className="flex  items-center my-5">
            <h3 className='font-semibold text-2xl me-5'>Released Date:</h3>
            <p className="text-gray-500 text-lg ">{movieDetails?.release_date}</p>
            </div>
    
            <h3 className='my-5 font-bold text-xl'>Production Companies: </h3>
            <ul className='flex'>
                {movieDetails?.production_companies.map((company)=>{
                    return<>
                    <li className='mr-5'>
                        <img src={`https://image.tmdb.org/t/p/w500${company?.logo_path}`} alt=""  className="w-[70px] h-[80px]"/>
                    </li>
                    </>
                })}
            </ul>

            <h3 className='my-5 font-bold text-xl'>Spoken Languages: </h3>
            <ul className="flex">
                {movieDetails?.spoken_languages.map((language)=>{
                    return<>
                    <li className='me-5'>{language.name}</li>
                    </>
                })}
            </ul>

            <div className="text-center">
            <button onClick={()=>{watchList(movieDetails.id)}} className='bg-blue-950 w-3/4 rounded-lg text-white px-2 py-3 my-6'>
              {isSpinner&& currMovie===movieDetails.id?  <i className="fa-solid fa-circle-notch fa-spin"></i>
              :"Add To WatchList"}
            </button>

            </div>
        </div>
    </div>
  </div>
  }
  </>
}
