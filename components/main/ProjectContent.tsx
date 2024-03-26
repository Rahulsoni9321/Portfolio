import React from 'react'

const ProjectContent = ({title,description}:{title:string,description:string}) => {
  return (
    <>
    <div className='text-xl font-semibold'>{title}</div>
              <div className=" text-xs font-normal text-white/80">
               {description}
              </div>
              </>
  )
}

export default ProjectContent
