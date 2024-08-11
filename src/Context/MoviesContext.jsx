import { createContext, useState } from "react";

export let MoviesContext = createContext();
export default function MoviesContextProvider(props){
    // const [movieId, setmovieId] = useState(0);
    
    function getMovies(){
        
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I2MDNjNzg1OWEzM2MxNTMwMjc1NzZiZDlhMjA5ZSIsIm5iZiI6MTcyMzIxMDQ4Ny43NjE1NCwic3ViIjoiNjZiMWZmZjJlYmZjMjZiOTE5YzYyMDNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3wOLhZNPSJ5uqQ67FZqO0mA0OVVGDYs5QoyCI5tf1Ms'
        }
        };
        
        return  fetch('https://api.themoviedb.org/3//discover/movie', options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);
    }

    function getMovieDetails(movieId){
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I2MDNjNzg1OWEzM2MxNTMwMjc1NzZiZDlhMjA5ZSIsIm5iZiI6MTcyMzIxMDQ4Ny43NjE1NCwic3ViIjoiNjZiMWZmZjJlYmZjMjZiOTE5YzYyMDNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3wOLhZNPSJ5uqQ67FZqO0mA0OVVGDYs5QoyCI5tf1Ms'
            }
        };
        
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);
    }

    function addToWatchList(movieId){
        const options = {
            method: 'POST',
            // to know what things to put in body search on stackoverflow as add to watch list TMDB
            // body at the TMDB must be json so that i use JSON.stringfy() => to turn js into json
            body: JSON.stringify({
                media_type:'movie',
                media_id: movieId,
                watchlist: true
            }),
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I2MDNjNzg1OWEzM2MxNTMwMjc1NzZiZDlhMjA5ZSIsIm5iZiI6MTcyMzIxMDQ4Ny43NjE1NCwic3ViIjoiNjZiMWZmZjJlYmZjMjZiOTE5YzYyMDNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3wOLhZNPSJ5uqQ67FZqO0mA0OVVGDYs5QoyCI5tf1Ms'
            }
          };
          
        return fetch('https://api.themoviedb.org/3/account/21426275/watchlist', options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);
    }

    function getWatchList(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I2MDNjNzg1OWEzM2MxNTMwMjc1NzZiZDlhMjA5ZSIsIm5iZiI6MTcyMzIxMDQ4Ny43NjE1NCwic3ViIjoiNjZiMWZmZjJlYmZjMjZiOTE5YzYyMDNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3wOLhZNPSJ5uqQ67FZqO0mA0OVVGDYs5QoyCI5tf1Ms'
            }
          };
          
        return  fetch('https://api.themoviedb.org/3/account/21426275/watchlist/movies', options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);
    }

    // note that: i make removeFromWatchList by myself like addTWatchList but instead of 'watchlist: true' , make 'watxhlist:false'
    function removeFromWatchList(movieId){
        const options = {
            method: 'POST',
            // to know what things to put in body search on stackoverflow as add to watch list TMDB
            // body at the TMDB must be json so that i use JSON.stringfy() => to turn js into json
            body: JSON.stringify({
                media_type:'movie',
                media_id: movieId,
                watchlist: false
            }),
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I2MDNjNzg1OWEzM2MxNTMwMjc1NzZiZDlhMjA5ZSIsIm5iZiI6MTcyMzIxMDQ4Ny43NjE1NCwic3ViIjoiNjZiMWZmZjJlYmZjMjZiOTE5YzYyMDNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3wOLhZNPSJ5uqQ67FZqO0mA0OVVGDYs5QoyCI5tf1Ms'
            }
          };
          
        return fetch('https://api.themoviedb.org/3/account/21426275/watchlist', options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);
    }

    function getTrendingMovies(){
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I2MDNjNzg1OWEzM2MxNTMwMjc1NzZiZDlhMjA5ZSIsIm5iZiI6MTcyMzIxMDQ4Ny43NjE1NCwic3ViIjoiNjZiMWZmZjJlYmZjMjZiOTE5YzYyMDNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3wOLhZNPSJ5uqQ67FZqO0mA0OVVGDYs5QoyCI5tf1Ms'
            }
        };
        
        return  fetch('https://api.themoviedb.org/3/trending/movie/day', options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);
    }

    function getPopularMovies(){
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I2MDNjNzg1OWEzM2MxNTMwMjc1NzZiZDlhMjA5ZSIsIm5iZiI6MTcyMzIxMDQ4Ny43NjE1NCwic3ViIjoiNjZiMWZmZjJlYmZjMjZiOTE5YzYyMDNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3wOLhZNPSJ5uqQ67FZqO0mA0OVVGDYs5QoyCI5tf1Ms'
            }
        };
          
        return  fetch('https://api.themoviedb.org/3/movie/popular', options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);
    }

    // get the latest trailers for popular movies
    // function getLatestTrailersPopular(movieId) {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             accept: 'application/json',
    //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I2MDNjNzg1OWEzM2MxNTMwMjc1NzZiZDlhMjA5ZSIsIm5iZiI6MTcyMzIxMDQ4Ny43NjE1NCwic3ViIjoiNjZiMWZmZjJlYmZjMjZiOTE5YzYyMDNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3wOLhZNPSJ5uqQ67FZqO0mA0OVVGDYs5QoyCI5tf1Ms'
    //         }
    //     };

    //     return fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
    //         .then(response => response.json())
    //         .then(response => response)
    //         .catch(err => err);
    // }

    // function getPopularMoviesAndTrailers() {
    //     return getPopularMovies()
    //         .then(response => {
    //             const popularMovies = response.results;
    //             const trailerPromises = popularMovies.map(movie =>
    //                 getLatestTrailersPopular(movie.id)
    //             );
    //             return Promise.all(trailerPromises)
    //                 .then(trailersResponses => ({
    //                     movies: popularMovies,
    //                     trailers: trailersResponses
    //                 }));
    //         })
    //         .catch(err => err);
    // }

    function getLatestTrailersPopular(movie_id){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I2MDNjNzg1OWEzM2MxNTMwMjc1NzZiZDlhMjA5ZSIsIm5iZiI6MTcyMzM3MDczMS42NjQxODQsInN1YiI6IjY2YjFmZmYyZWJmYzI2YjkxOWM2MjAzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bf-Q2AKcWrRcvslD-1Xr6C1y646ZqM6ebzzfKJgyG8k'
            }
          };
          
        return  fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err =>err);
    }

    // get free to watch movies
    function getMoviesFreeToWatch() {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I2MDNjNzg1OWEzM2MxNTMwMjc1NzZiZDlhMjA5ZSIsIm5iZiI6MTcyMzM3MDczMS42NjQxODQsInN1YiI6IjY2YjFmZmYyZWJmYzI2YjkxOWM2MjAzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bf-Q2AKcWrRcvslD-1Xr6C1y646ZqM6ebzzfKJgyG8k'
            }
          };
        //   
        return  fetch('https://api.themoviedb.org/3/discover/movie?page=2&sort_by=revenue.desc&with_watch_monetization_types=free', options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);
      }
    
    
    return <>
    <MoviesContext.Provider value={{getMovies , getMovieDetails , addToWatchList , getWatchList , removeFromWatchList , getTrendingMovies , getPopularMovies  , getMoviesFreeToWatch ,getLatestTrailersPopular}}>
        {props.children}
    </MoviesContext.Provider>
    </>

}