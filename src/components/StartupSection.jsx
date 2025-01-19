import React from 'react'
import mondey from '../assets/mondey.png'
import morpheus from '../assets/morpheus.png'
import samsung from '../assets/samsung.png'
import oracle from '../assets/oracle.png'
import segment from '../assets/segment.png'
const StartupSection = () => {
  return (
    <div className='bg-white flex flex-col justify-center items-center py-16 space-y-2 '>
        <h2 className='md:text-2xl font-semibold '>Trusted By Over 100+ Startups and freelance business</h2>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
            <img src={oracle} alt="" />
            <img src={morpheus} alt="" />
            <img src={morpheus} alt="" />
            <img src={samsung} alt="" />
            <img src={mondey} alt="" />
            <img src={segment} alt="" />

            
        </div>
      
    </div>
  )
}

export default StartupSection
