import React from 'react'

const TechStackHolder = ({Techname}:{Techname:string}) => {
  return (
    <div className='px-1.5 py-0.5 bg-gray-600/60 rounded-lg border border-1 border-gray-400'>
     <p className='text-xs text-violet-500'>{Techname}</p> 
    </div>
  )
}

export default TechStackHolder
