import React from 'react'

export const Landing = ({mainHeading}: {mainHeading: string}) => {
  return (
    <div className="landing relative -z-10 bg-right md:bg-center">
        <h1 className="text-xl md:text-3xl text-white font-bold absolute bottom-6 left-[50%] -translate-x-[50%]">{mainHeading}</h1>
    </div>
  )
}
