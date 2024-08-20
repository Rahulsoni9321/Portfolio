"use client"
import React from 'react'

const MiniProject = ({title,description,url}:{title:string,description:string[],url:string}) => {
  return (
      <div  className='flex flex-col w-10/12 md:w-9/12 p-6 2xl:p-12 shadow-lg shadow-white/10 drop-shadow-2xl transform transition hover:scale-110 items-center duration-800  border border-gray-200 rounded-xl bg-black/70 text-white gap-6 2xl:gap-12  cursor-pointer '>
     <a href={url} target='_blank' className='text-2xl 2xl:text-4xl text-center cursor-pointer hover:text-gray-400'>{title}</a>
     <div className='flex flex-col gap-1'>
     {
      description.map((points:string,index:number)=>{
        return <p key={index} className='text-xs md:text-sm 2xl:text-lg font-medium'>&#xb7; {points}</p>
      })
     }
       </div>
      
    </div> 
  )
}

export default MiniProject
