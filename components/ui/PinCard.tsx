import React from 'react'
import { PinContainer } from './3d-pins'

const PinCard = ({title,children}:{title:string,children:string}) => {
    const containername = " rounded-xl  col-span-1 z-40";
    const classname = " text-black bg-[url('/Screenshot 2024-03-25 043349.png')] bg-cover bg-center bg-no-repeat w-full h-full  rounded-lg ";
    const width="62"
    const height="60"
  return (
    <PinContainer
              href="https://facebook.com"
              children={children}
              title={title}
              className={classname}
              containerClassName={containername}
              width={width}
              height={height}
            ></PinContainer>
  )
}

export default PinCard
