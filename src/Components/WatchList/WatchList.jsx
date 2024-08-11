import React, { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../../Context/MoviesContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

// FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet';
import { PacmanLoader } from 'react-spinners';

export default function WatchList() {
  const [moviesWatchListDetails, setmoviesWatchListDetails] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isSpinner, setisSpinner] = useState(false);
  const [currMovie, setcurrMovie] = useState(0);

  const { getWatchList, removeFromWatchList } = useContext(MoviesContext);

  async function getMoviesWatchList() {
    setisLoading(true);
    let response = await getWatchList();
    console.log(response);
    setmoviesWatchListDetails(response.results);
    setisLoading(false);
  }

  async function removeMovieFromWatchList(movieId) {
    setisSpinner(true);
    setcurrMovie(movieId);

    let response = await removeFromWatchList(movieId);
    console.log(response);

    if (response.success === true) {
      setmoviesWatchListDetails(prevMovies =>
        prevMovies.filter(movie => movie.id !== movieId)
      );
      toast.success("The Movie is removed successfully", {
        duration: 2000,
      });
    } else {
      toast.error("Error Occurred", {
        duration: 2000,
      });
    }

    setisSpinner(false);
  }

  useEffect(() => {
    getMoviesWatchList();
  }, []);

  return (
    <>
      <Helmet>
        <title>Watchlist</title>
      </Helmet>
      <h1 className='font-semibold text-3xl mb-7 mt-5 text-blue-950'>WatchList</h1>

      <div className="row">

        {isLoading ? (
          <div className="flex justify-center items-center h-screen mx-auto text-center">
            <PacmanLoader color="#334155" />
          </div>
        ) : (
          <>
            {moviesWatchListDetails.length !== 0 ? (
              moviesWatchListDetails.map((movie, index) => (
                <div className="w-1/6" key={index}>
                  <div className="px-4">
                    <Link to={`/movieDetails/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt=""
                        className="block w-full"
                      />
                      <h2 className="font-semibold text-lg text-start h-[70px] my-2">
                        {movie.title}
                      </h2>
                    </Link>

                    <button
                      onClick={() => removeMovieFromWatchList(movie.id)}
                      className="bg-red-400 w-full rounded-lg text-white px-2 py-3 my-6 text-lg"
                    >
                      {isSpinner && currMovie === movie.id ? (
                        <i className="fa-solid fa-circle-notch fa-spin"></i>
                      ) : (
                        "Remove"
                      )}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-2xl mx-auto font-semibold py-5 text-red-400">
                <i className="fa-solid fa-circle-exclamation me-2"></i>
                There are no movies in your watchlist
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
}
