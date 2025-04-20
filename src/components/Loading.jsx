import React from 'react'

export default function Loading({ text, progress }) {
  return (
    <div className='w-full m-auto sm:w-[540px] h-[102px] bg-clr-200 shadow-lg rounded-md p-4 flex flex-col gap-4 items-center justify-center' >
        <p className='text-xs text-clr-100 text-center font-light'><span className='font-semibold'>{text}</span>, please wait.. {progress}%</p>
        <div className="loading-bar w-full">
          <div className='outerbar w-2/3 m-auto h-1.5 bg-clr-300 rounded-lg relative overflow-hidden'>
            <div className="innerbar bg-primary-100 w-1/6 rounded-lg h-full absolute"></div>
          </div>
        </div>
    </div>
  )
}
