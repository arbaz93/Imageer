import { useState } from 'react';
import { ImageConverter, FinalConversion } from '../components';

export default function ImageFormatConvertPage() {
  const [convertedFiles, setConvertedFiles] = useState([]);
  const [convertingStatus, setConvertingStatus] = useState(null);

  return (
    <section className='w-full min-h-[80vh] flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-8 w-full px-4 py-12  sm:px-4'>
        
        
        {(!convertingStatus) ? <ImageConverter setConvertedFiles={setConvertedFiles} setConvertingStatus={setConvertingStatus} /> :
          <FinalConversion files={convertedFiles} setConvertingStatus={setConvertingStatus} setConvertedFiles={setConvertedFiles} />
          }
      </div>
    </section>
  )
}
