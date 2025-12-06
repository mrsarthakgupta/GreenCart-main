import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-16 sm:mt-24'>
      <img src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block'/>
      <img src={assets.bottom_banner_image_sm} alt="banner" className='w-full md:hidden'/>

      <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-10 sm:pt-16 md:pt-0 md:pr-24'>
        <div className="px-4 md:px-0">
            <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-4 md:mb-6 text-center md:text-right'>
              Why We Are the Best?
            </h1>
            {features.map((feature, index)=>(
                <div key={index} className='flex items-center gap-3 md:gap-4 mt-2'>
                    <img src={feature.icon} alt={feature.title} className='w-8 md:w-11' />
                    <div>
                       <h3 className='text-base md:text-xl font-semibold'>{feature.title}</h3>
                        <p className='text-gray-500/70 text-xs md:text-sm'>{feature.description}</p> 
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BottomBanner
