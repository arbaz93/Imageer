import { useState } from 'react';
import { ImageUploader, ImageUploadSuccess, Loading } from '../components';

export default function imageUploadPage() {
  // const [file, setFile] = useState(null);
  const [urlImageData, setUrlImageData] = useState(null)
  const [imageIsUploading, setImageIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingStatus, setLoadingStatus] = useState('Uploading');

  return (
    <section className='w-full h-dvh flex items-center justify-center absolute top-0'>
      <div className='w-full px-8'>
        {
          urlImageData ? 
            <ImageUploadSuccess urlImageData={urlImageData} /> :
              !imageIsUploading ? 
              <ImageUploader setImageIsUploading={setImageIsUploading} setUrlImageData={setUrlImageData} setProgress={setProgress} setLoadingStatus={setLoadingStatus}/> :
              <Loading text={loadingStatus} progress={progress}/>

        }
      </div>
    </section>
  )
}
