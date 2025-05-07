import { useState } from 'react';
import { ImageConverter, FinalConversion } from '../components';

export default function ImageFormatConvertPage() {
  const [convertedFiles, setConvertedFiles] = useState([]);
  const [convertingStatus, setConvertingStatus] = useState(null);
  const [filesStatus, setFilesStatus] = useState({});

  return (
    <section className='w-full h-dvh flex items-center justify-center absolute top-0'>
      <div className='flex flex-col items-center justify-center gap-8 w-full sm:px-4'>
        
        
        {(!convertingStatus) ? <ImageConverter setConvertedFiles={setConvertedFiles} setConvertingStatus={setConvertingStatus} setFilesStatus={setFilesStatus} filesStatus={filesStatus} /> :
          <FinalConversion files={convertedFiles} setFilesStatus={setFilesStatus} setConvertingStatus={setConvertingStatus} setConvertedFiles={setConvertedFiles} filesStatus={filesStatus} />
          }
      </div>
    </section>
  )
}
