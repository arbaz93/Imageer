import { useEffect, useState } from 'react';
import { PageHeading, ImageConverter, FinalConversion, Loading } from '../components';

export default function ImageFormatConvertPage() {
  const [convertedFiles, setConvertedFiles] = useState([]);
  const [convertingStatus, setConvertingStatus] = useState(null);
  const [conversionStatusPercentage, setConversionStatusPercentage] = useState(0);

  return (
    <section className='w-full h-dvh flex items-center justify-center absolute top-0'>
      <div className='flex flex-col items-center justify-center gap-8 w-full sm:px-4'>
        <PageHeading heading={'Image Converter'} description={'Convert your images to any format'} />
        
        {(!convertingStatus) ? <ImageConverter setConvertedFiles={setConvertedFiles} setConvertingStatus={setConvertingStatus} setConversionStatusPercentage={setConversionStatusPercentage}/> :
          (convertingStatus === 'success') ? <FinalConversion files={convertedFiles} /> :
          (convertingStatus === 'converting') && <Loading text={'converting images'} progress={conversionStatusPercentage}/>
          }
      </div>
    </section>
  )
}
