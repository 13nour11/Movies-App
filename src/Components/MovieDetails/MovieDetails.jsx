import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../Context/MoviesContext';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function MovieDetails() {
    // const [movieId, setmovieId] = useState(null);

    const [movieDetails, setmovieDetails] = useState(null)

    let {getMovieDetails , addToWatchList} = useContext(MoviesContext);


    let {id} = useParams();
    console.log(id);

    async function getDetails(id) {
        let response = await getMovieDetails(id);
        console.log(response);
        setmovieDetails(response)
    }

    async function watchList(movieId) {
        let response = await addToWatchList(movieId);
        if(response.success == true){
          toast.success("Movie is added to wish list successfully",{
            duration: 2000,
            // position: "right-top"
          })
        }else{
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
  <div className="container mx-auto">
    <div className="row justify-around">
        <div className="w-1/4">
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`} alt="" className='w-full block'/>
        </div>
        <div className="w-2/4 text-start">
            <h2 className='font-semibold text-2xl'>{movieDetails?.title}</h2>
            <p className='text-lg text-gray-500 my-5 '>{movieDetails?.overview}</p>

            <h3 className='my-5 font-bold text-xl'>Production Companies: </h3>
            <ul className='flex'>
                {movieDetails?.production_companies.map((company)=>{
                    return<>
                    <li className='mr-4'>
                        <img src={`https://image.tmdb.org/t/p/w500${company?.logo_path}`} alt=""  className="w-[70px]"/>
                    </li>
                    </>
                })}
            </ul>

            <h3 className='my-5 font-bold text-xl'>Spoken Languages: </h3>
            <ul className="flex">
                {movieDetails?.spoken_languages.map((language)=>{
                    return<>
                    <li>{language.name}</li>
                    </>
                })}
            </ul>

            <button onClick={()=>{watchList(movieDetails?.id)}} className='bg-blue-500 rounded-lg py-2 px-3 text-white my-4 w-2/3'>Add To Watch List</button>
        </div>
    </div>
  </div>
  </>
}
