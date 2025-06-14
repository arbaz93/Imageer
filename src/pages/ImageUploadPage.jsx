import { useState } from 'react';
import { ImageUploader, FinalUpload, Loading } from '../components';

export default function ImageUploadPage() {
  const [urlImageData, setUrlImageData] = useState(null)
  const [imageIsUploading, setImageIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingStatus, setLoadingStatus] = useState('Uploading');

  return (
    <section className='w-full min-h-[80vh] flex items-center justify-center'>
      <div className='grid gap-8 w-full px-8 py-12'>
        
        {
          urlImageData ? 
            <FinalUpload urlImageData={urlImageData} /> :
              !imageIsUploading ? 
              <ImageUploader setImageIsUploading={setImageIsUploading} setUrlImageData={setUrlImageData} setProgress={setProgress} setLoadingStatus={setLoadingStatus}/> :
              <Loading text={loadingStatus} progress={progress}/>
        }
      </div>
    </section>
  )
}
