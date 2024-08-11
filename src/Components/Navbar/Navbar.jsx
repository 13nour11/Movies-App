import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return <>
    

<nav className="px-5 py-2 bg-slate-700 dark:bg-gray-800 dark:border-gray-700 lg:fixed top-0 right-0 left-0 z-50">
  <div className="container mx-auto max-w-screen-xl flex flex-wrap items-center justify-between  p-4 text-white">
    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Movies</span>
    </Link>
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <NavLink to={'/'} className="text-lg block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent  md:dark:bg-transparent" aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to={"/movies"} className="text-lg block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Movies</NavLink>
        </li>
        <li>
          <NavLink to={"/watchlist"} className="text-lg block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">WatchList</NavLink>
        </li>
      </ul>
    </div>

    
  </div>
</nav>



  </>
  
}
