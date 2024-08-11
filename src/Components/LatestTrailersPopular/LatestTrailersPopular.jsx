import React, { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../../Context/MoviesContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { PacmanLoader } from 'react-spinners';
import '@fortawesome/fontawesome-free'

export default function LatestTrailersPopular() {
    const [movies, setMovies] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const { getPopularMovies, getLatestTrailersPopular } = useContext(MoviesContext);
    const [isLoading, setisLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedTrailer, setSelectedTrailer] = useState(null);

    async function fetchMoviesAndTrailers() {
        setisLoading(true);

        const moviesResponse = await getPopularMovies();
        setMovies(moviesResponse.results);

        const trailerPromises = moviesResponse.results.map(movie => getLatestTrailersPopular(movie.id));
        const trailersResponses = await Promise.all(trailerPromises);
        setTrailers(trailersResponses);
        
        setisLoading(false);
    }

    useEffect(() => {
        fetchMoviesAndTrailers();
    }, [getPopularMovies, getLatestTrailersPopular]);

    const openPopup = (trailer) => {
        setSelectedTrailer(trailer);
        setOpen(true);
    };

    const closePopup = () => {
        setSelectedTrailer(null);
        setOpen(false);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center mx-auto h-screen">
                    <PacmanLoader color='#334155' />
                </div>
            ) : (
                <div className="slider-container">
                    <Slider {...settings}>
                        {movies.map((movie, index) => {
                            const trailer = trailers[index]?.results[0];
                            return trailer ? (
                                <div key={movie.id} className="relative cursor-pointer px-5" onClick={() => openPopup(trailer)}>
                                    <div className="relative">
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.title}
                                            className="w-full block movie-img"
                                        />
                                        <div className="bg-black bg-opacity-30 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                            <i className="fa-solid fa-play fa-3x text-white"></i>
                                        </div>
                                    </div>
                                    <h3 className='my-5 font-semibold text-lg text-center'>{movie.title}</h3>
                                </div>

                            ) : (
                                <div key={movie.id} className='flex justify-center items-center'>
                                    <p>No trailer available for {movie.title}</p>
                                </div>
                            );
                        })}
                    </Slider>

                    {selectedTrailer && (
                        <Popup open={open} closeOnDocumentClick onClose={closePopup}>
                            <div className="modal px-5">
                            <button className="close text-5xl font-bold mb-3" onClick={closePopup}>
                                    &times;
                                </button>
                                <video
                                className='mb-3'
                                    width="100%"
                                    height="400"
                                    src={`https://www.youtube.com/embed/${selectedTrailer.key}?autoplay=1`}
                                    title={selectedTrailer.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></video>
                                
                            </div>
                        </Popup>
                    )}


                </div>
            )}
        </>
    );
}
