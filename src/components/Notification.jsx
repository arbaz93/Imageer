import React from 'react'

export default function Notification({ notification: {message, type }, colorScheme, i }) {

  const successClr = colorScheme === 'dark' ? ' bg-teal-600 ' : ' bg-teal-200 ';
  const errorClr = colorScheme === 'dark' ? ' bg-red-600 ' : ' bg-red-100 ';
  const successTextClr = colorScheme === 'dark' ? ' text-teal-100 fill-teal-100 ' : ' text-teal-800 fill-teal-800 ';
  const errorTextClr = colorScheme === 'dark' ? ' text-red-100 fill-red-100 ' : ' text-red-800 fill-red-800 ';
  
  return (
    <div className={'flex gap-2 items-center justify-center rounded-sm px-4 py-3 ' + ((type === 'error') ? errorClr : successClr)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20} className={(type === 'error' ? errorTextClr : successTextClr)}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
      <p className={'font-semibold ' + (type === 'error' ? errorTextClr : successTextClr)}>{message}</p>
    </div>
  )
} 
