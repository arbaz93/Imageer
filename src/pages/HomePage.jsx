import React from 'react'
import { ImageConverter, PageHeading } from '../components'

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center gap-8 h-dvh w-full absolute top-0 left-0 sm:px-4'>        
      <PageHeading heading={'Image Upload'} description={'Upload image to cloud'}/>
      <ImageConverter />
    </div>
  )
}
