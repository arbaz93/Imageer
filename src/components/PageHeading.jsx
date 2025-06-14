import React from 'react'

export default function PageHeading({ heading, description}) {
  return (
    <div className='flex flex-col items-center gap-2 w-full text-center'>
      <h1 className='text-2xl sm:text-3xl text-primary-100 uppercase '>{heading}</h1>
      <h2 className='text-md max-w-[40ch] text-clr-100 font-[400]'>{description}</h2>
    </div>
  )
}
