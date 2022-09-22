import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header className="text-gray-600 body-font sticky top-0 z-30 bg-white">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" bis_skin_checked="1">
    <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/logo.png" className='w-14 h-14 object-contain' alt="" />
    </NavLink>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-6">
      <NavLink to="/" className="mr-5 font-serif  text-black font-bold hover:text-gray-700">Home</NavLink>
      <NavLink to="/pricelist" className="mr-5 font-serif  text-black font-bold hover:text-gray-700">Price List</NavLink>
      <NavLink to="/gallary" className="mr-5 font-serif  text-black font-bold hover:text-gray-700">Gallary</NavLink>
      <NavLink to="/graphics" className="mr-5 font-serif  text-black font-bold hover:text-gray-700">Graphics</NavLink>
      <NavLink to="/ourteam" className="mr-5 font-serif  text-black font-bold hover:text-gray-700">Our Team</NavLink>
      <NavLink to="/about" className="mr-5 font-serif  text-black font-bold hover:text-gray-700">About</NavLink>
      <NavLink to="/contact" className="mr-5 font-serif  text-black font-bold hover:text-gray-700">Contact</NavLink>
      
    </nav>



    <form>   
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
  <div className="relative" bis_skin_checked={1}>
    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none" bis_skin_checked={1}>
      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
    <input type="search" id="default-search" className="block p-2.5 pl-10 pr-24 w-[17em] text-sm text-gray-900 bg-gray-50 rounded-lg  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here" required />
    
  </div>
</form>




  </div>
</header>
    </>
  )
}

export default Navbar