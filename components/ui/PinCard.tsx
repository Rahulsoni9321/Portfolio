import React from 'react'
import { PinContainer } from './3d-pins'

const PinCard = ({title,bgurl}:{title:string,bgurl:string}) => {
    const containername = " rounded-xl  col-span-1 z-40 hidden md:block";
    const classname = " text-black  w-full h-full  rounded-lg hover:bg-black/40 hidden md:block";
    
  return (
    <PinContainer
              title={title}
              className={classname}
              containerClassName={containername}
              children={(<img src={bgurl} className=' w-full h-full rounded-lg hover:hidden'></img>)}
            ></PinContainer>
  )
}

export default PinCard
