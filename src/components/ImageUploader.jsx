import { useState, useRef } from 'react'
import { uploadIcon, plusIcon } from '../utils/constants'
import UploadImage from './UploadImage'
export default function ImageUploader({ setImageIsUploading, setUrlImageData, setProgress, setLoadingStatus={setLoadingStatus} }) {
    const inputRef = useRef(null);
    const [dragActive, setDragActive] = useState(false);

    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const rect = e.currentTarget.getBoundingClientRect();
        const { clientX, clientY } = e;
    
        if (
            clientX <= rect.left ||
            clientX >= rect.right ||
            clientY <= rect.top ||
            clientY >= rect.bottom
        ) {
            setDragActive(false);
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        // Handle the dropped file
        const files = e.dataTransfer.files;
        if (files && files[0]) {
            // Update the file input's files (simulating a file drop)
            inputRef.current.files = files;
            // Trigger the file input's change handler
            const event = new Event('change', { bubbles: true });
            inputRef.current.dispatchEvent(event);
        }
    }
    return (
        <section className='relative overflow-hidden w-full m-auto sm:w-[540px] h-[332px] bg-clr-200 shadow-lg rounded-md p-2' onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            {dragActive && (
                <div className='absolute inset-2 rounded-lg bg-clr-300 flex flex-col gap-2 items-center justify-center'>
                    <div className='plus-icon w-6 h-6 rounded-md bg-primary-200 flex items-center justify-center'>
                        <img src={plusIcon} alt='add icon' className='w-4 h-4'/>
                    </div>
                    <p className='text-clr-300 text-sm font-bold text-center'>Drop image</p>
                </div>
            )}
            <div className='border-clr-100 p-4 h-full border-2 border-dotted rounded-lg flex flex-col gap-4 items-center justify-center'>
                <div>
                    <img src={uploadIcon} alt="upload icon" />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-clr-300 w-full text-sm font-semibold text-center'>Drag & drop a file or <UploadImage setImageIsUploading={setImageIsUploading} setProgress={setProgress} setUrlImageData={setUrlImageData} setLoadingStatus={setLoadingStatus} ref={inputRef} /></p>
                    <p className='text-center text-xs font-normal text-clr-300'>JPG, PNG or GIF - Max file size 2MB</p>
                </div>
            </div>
        </section>
    )
}
