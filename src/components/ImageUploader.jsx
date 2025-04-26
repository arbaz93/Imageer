import { useRef } from 'react'
import { uploadIcon } from '../utils/constants'
import UploadImage from './UploadImage'
export default function ImageUploader({ setImageIsUploading, setUrlImageData, setProgress, setLoadingStatus={setLoadingStatus} }) {

    return (
        <section className='w-full m-auto sm:w-[540px] h-[332px] bg-clr-200 shadow-lg rounded-md p-2' >
            <div className='border-clr-100 p-4 h-full border-2 border-dotted rounded-lg flex flex-col gap-4 items-center justify-center'>
                <div>
                    <img src={uploadIcon} alt="upload icon" />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-clr-300 w-full text-sm font-semibold text-center'>Drag & drop a file or <UploadImage setImageIsUploading={setImageIsUploading} setProgress={setProgress} setUrlImageData={setUrlImageData} setLoadingStatus={setLoadingStatus} /></p>
                    <p className='text-center text-xs font-normal text-clr-300'>JPG, PNG or GIF - Max file size 2MB</p>
                </div>
            </div>
        </section>
    )
}
