import React, { useState, useRef } from 'react';
import { uploadImageToCloudinary } from '../js/cloudinary/cloudinaryFunctions';

export default function UploadImage({ setImageIsUploading, setUrlImageData, setProgress }) {

    const inputRef = useRef(null);

    function openFileBrowser() {
        inputRef.current.click();
    }
    function handleFileUpload(event) {
        const file = event.target.files[0];
        // If file is null
        if (!file) return;

        // If file is not .jpg, .png, .gif
        if (!['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Only JPG, PNG, and GIF files are allowed');
            return;
        }

        const imageData = {
            image: file,
        }
        setImageIsUploading(true);
        uploadImageToCloudinary(imageData, (progressPercentage) => { setProgress(progressPercentage)})
            .then(res => {
                if(res.status == 200) {
                    setImageIsUploading(false);
                    setUrlImageData(res.data)
                } else {
                    console.log('err')
                    window.location.href = '/oops';
                }
            });
    }

    return (
        <>
            <input ref={inputRef} hidden onChange={handleFileUpload} type='file' name='file' id='file' accept=".jpg,.jpeg,.png,.gif" /> <button onClick={openFileBrowser} className='text-primary-100 cursor-pointer'>browse files</button>
        </>
    )
}
