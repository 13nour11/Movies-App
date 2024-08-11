import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Movies from './Components/Movies/Movies'
import Home from './Components/Home/Home'
import WatchList from './Components/WatchList/WatchList'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import MoviesContextProvider from './Context/MoviesContext'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import {Toaster} from 'react-hot-toast'
import LatestTrailersPopular from './Components/LatestTrailersPopular/LatestTrailersPopular'

let routing = createBrowserRouter([
  {path:"", element: <Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'movies', element:<Movies/>},
    {path:'movieDetails/:id' , element:<MovieDetails/>},
    {path:"watchlist" , element: <WatchList/>},
    {path:"latest" , element: <LatestTrailersPopular/>},
    {path:"register" , element: <Register/>},
    {path:"login",element:<Login/>},
    {path:"register",element:<Register/>}

  ]}
])
function App() {
  const [count, setCount] = useState(0)

  return <>
  <MoviesContextProvider>
    <RouterProvider router={routing}> </RouterProvider>
    <Toaster />

  </MoviesContextProvider>
  
  </>
}

export default App
