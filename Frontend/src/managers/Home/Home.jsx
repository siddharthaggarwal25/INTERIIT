import React from 'react'
import Home1 from './Home1/Home1'
import Home2 from './Home2/Home2'
import Home3 from './Home3/Home3'
import Home4 from './Home4/Home4'
import Home5 from './Home5/Home5'
import Home6 from './Home6/Home6'
import Home7 from './Home7/Home7'

const Home = () => {
  return (
     <>
    <div className='mt-[160px] mx-24'>
      <Home1 />
      </div>
     <div className='mt-[70px]'>
      <Home2   />
      </div>
     <div className='mt-[130px]'>
      <Home3   />
      </div>
     <div className='mt-[100px]'>
      <Home4   />
      </div>
     <div className=' mt-[120px]'>
      <Home5   />
      </div>
     <div className=' mt-[650px]'>
      <Home6   />
      </div>
     <div className=' mt-[100px]'>
      <Home7   />
      </div>
    
    </>
  )
}

export default Home
