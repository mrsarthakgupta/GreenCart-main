import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

    const {navigate} = useAppContext()

  return (
    <div className='mt-10 sm:mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-4 sm:mt-6 gap-4 sm:gap-6'>

        {categories.map((category, index)=>(
            <div
              key={index}
              className='group cursor-pointer py-4 px-2 sm:py-5 sm:px-3 gap-2 rounded-lg flex flex-col justify-center items-center text-center'
              style={{backgroundColor: category.bgColor}}
              onClick={()=>{
                navigate(`/products/${category.path.toLowerCase()}`);
                scrollTo(0,0)
              }}
            >
                <img
                  src={category.image}
                  alt={category.text}
                  className='group-hover:scale-105 transition w-14 sm:w-20 md:w-24'
                />
                <p className='text-xs sm:text-sm font-medium mt-1'>{category.text}</p>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Categories
