import React, { useEffect, useState, useRef } from 'react'
import ConvertFile from './ConvertFile';
import { nanoid } from 'nanoid';
import conversionFormats from '../utils/conversionFormats';
import { validateImagesForConversion, sendImagesForConversion } from '../js/image-conversion/imageConversion';
import { useNotificationStore } from '../zustand/store'

export default function ImageConverter({ setConvertedFiles, setConvertingStatus, setConversionStatusPercentage }) {
    const [files, setFiles] = useState([]);
    const [filesStatus, setFilesStatus] = useState({});
    const inputRef = useRef(null);
    const formatRef = useRef(null);
    const setNotifications = useNotificationStore(state => state.setNotifications);
    

    function openFileBrowser() {
        inputRef.current.click();
    }
    function handleFile(e) {
        const inFiles = Array.from(e.target.files);

        const newFilesWithIds = inFiles.map(file => {
            const id = nanoid();
            file.id = id
            
            return file;
        });
        setFiles(prevFiles => [...prevFiles, ...newFilesWithIds])

    }

    function handleSelectAllButton(e) {
        const selectedFormat = e.target.value;
        setFiles(allFiles => {
            const updatedFiles = allFiles.map(file => {
                file.convertTo = selectedFormat;
                return file;
            })
            return updatedFiles;
        })
    
    }

    async function handleConversion() {
        if (!files || files.length === 0) {
            setNotifications({ message: 'No image detected!', type: 'error' })
            return;
        }


        // Handle Images validation
        const isValid = validateImagesForConversion(files);
        if (!isValid.bool) {
            setNotifications({ message: isValid.message, type: 'error' })
            return
        }
        setNotifications({ message: isValid.message, type: 'success' })




        // Sending files to server for conversion
        setNotifications({ message: 'Uploading files for conversion', type: 'success' });
        setConvertingStatus('converting');
        
        // Send images for conversion to server
        const res = await sendImagesForConversion(files, setConversionStatusPercentage);
 
        // Handle error from server
        if (!res.success) {
            setConvertingStatus('error');

            setNotifications({ message: 'Something went wrong!!!', type: 'error' });
            return res.error;
        }

        // Handle success from server
        setConvertingStatus('success');
        setNotifications({ message: 'Images converted successfully!!!', type: 'success' });
        setConvertedFiles(prevFiles => [...prevFiles, ...res.convertedFiles]);
    }

    function handleFileStatus() {
        const statuses = {};
        files.forEach(file => {
            if(!file?.convertTo || file?.convertTo === '...') {
                statuses[file.id] = false;
            } else {
                statuses[file.id] = true;
            }
        });
        setFilesStatus(statuses);
    }

    useEffect(() => {
        handleFileStatus();
    }, [files])
    return (
        <div className=' max-w-5xl w-full shadow-2xl rounded-lg overflow-hidden'>
            <div className={'shadow-md bg-clr-200 rounded-md max-h-[40vh] overflow-auto'}>
                <input ref={inputRef} multiple max={10} maxLength={10} type='file' onChange={handleFile} className='hidden text-clr-100 text-2xl' placeholder='Input' id='convert-files' />
                {files.map((file, i) => <ConvertFile setFiles={setFiles} fileStatus={filesStatus[file.id]} file={file} key={i} />)}
            </div>
            <div className='flex items-center justify-center gap-2 py-4'>
                <span onClick={handleSelectAllButton} className='text-clr-100'>Convert all to:</span>
                <select ref={formatRef} onChange={handleSelectAllButton} defaultValue={'...'} className='rounded-sm text-clr-100 px-1.5 py-1.5 outline outline-clr-100 focus:outline-2 focus-within:outline-2'>
                    {conversionFormats.map((format, i) => <option key={i} className='px-1.5 py-2'>{format}</option>)}
                </select>
            </div>
            <div>
                <div className='bg-clr-200 sm:pl-6 flex flex-col sm:flex-row justify-between'>
                    <button onClick={openFileBrowser} className='text-clr-100 rounded-sm px-8 my-4 py-1.5 bg-clr-100 flex items-center justify-center gap-4 w-full sm:w-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={'1rem'} viewBox="0 0 448 512" fill="#3662E3"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                        <span>Add more files</span>
                    </button>
                    <button onClick={() => handleConversion(files)} className='group flex items-center justify-between bg-primary-100 w-full duration-200 sm:max-w-60 px-6 py-4 sm:py-0' >
                        <span className='font-bold text-lg text-clr-400'>Convert</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 fill-[#F9FAFB] group-hover:translate-x-2 group-focus:translate-x-2 group-focus-within:translate-x-2 group-hover:scale-150 group-focus:scale-150 group-focus-within:scale-150 duration-200' viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
