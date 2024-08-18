import React from 'react'

const TechStackHolder = ({Techname}:{Techname:string}) => {
  return (
    <div className='md:block hidden px-2 py-0.5 bg-black/60 rounded-xl border border-1 border-gray-400 overflow-auto'>
     <p className='text-xs lg:text-sm text-gray-300 '>{Techname}</p> 
    </div>
  )
}

export default TechStackHolder
