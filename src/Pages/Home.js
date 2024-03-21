import React from 'react'
import Banner from '../Components/Banner'
import Popular from '../Components/Popular'
import Review from '../Components/Review'
import Offer from '../Components/Offer'


const Home = () => {
  return (
    <div className='m-6'>
      <Banner />
      <Popular/>
      <Offer/>
      <hr  className='h-0.5 bg-blue-400 w-[70%] m-auto'/>
      <Review/>
    
    </div>
  )
}

export default Home