import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../Context/MoviesContext'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
// go to the website and go to basics setion ( and i will get image) and get the suitable format 
// as the img at the response doesnot complete path as i will get the complete path frn section imagess


// i want when click on the button it will go to the details so that i will go to movies [details] section
export default function Movies() {
    const [moviesDetails, setmoviesDetails] = useState([]);

    let {getMovies , addToWatchList} = useContext(MoviesContext);
    
    async function dispalyMovies(){
        let res = await getMovies();
        console.log(res.results);
        // there is no message at response to make me know that it is success,
        // so that i make this condition 
        if(res){
          setmoviesDetails(res.results);
          
        }
        
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

    
    useEffect(()=>{
        dispalyMovies()
    },[])

  return <>
  <div className="row">
    {
      moviesDetails?.map((movie , index)=>{ 
        return<>
        <div className="w-1/6" key={index}>
          <div className="px-4">
            <Link to={`/movieDetails/${movie.id}`}>
            {/* https://image.tmdb.org/t/p/w500 => base img url */}
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='block w-full'/>
              <h2 className='font-semibold text-lg text-start h-[70px] my-2'>{movie.title}</h2>
            </Link>
            
            
            <button onClick={()=>{watchList(movie.id)}} className='bg-slate-400 w-full rounded-lg text-white px-2 py-3 my-6'>Add To WatchList</button>
          
          </div>
        </div>
        </>
      })
    }
  </div>
  </>
}
