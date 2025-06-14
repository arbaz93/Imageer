import React, { useEffect, useState, useRef } from 'react'
import ConvertFile from './ConvertFile';
import { nanoid } from 'nanoid';
import conversionFormats from '../utils/conversionFormats';
import { validateImagesForConversion, sendAnImageForConversion } from '../js/image-conversion/imageConversion';
import { useColorSchemeStore, useFilesStatusStore, useNotificationStore } from '../zustand/store'
import { PageHeading } from './';
import { formatBytes } from '../utils/miscFunctions';
import { compressionStartSize, maxImageConverterUploadSize, maxFilesAllowedForConversion, uploadIcon } from '../utils/constants';
import { compressImage } from '../js/image-compressor/imageCompressor';

export default function ImageConverter({ setConvertedFiles, setConvertingStatus }) {
    const [files, setFiles] = useState([]);
    const inputRef = useRef(null);
    const formatRef = useRef(null);
    const setNotifications = useNotificationStore(state => state.setNotifications);
    const colorScheme = useColorSchemeStore(state => state.colorScheme);
    const filesStatus = useFilesStatusStore(state => state.filesStatus);
    const setFilesStatus = useFilesStatusStore(state => state.setFilesStatus);
    function openFileBrowser() {
        inputRef.current.click();
    }
    function handleFile(e) {

        const inFiles = Array.from(e.target.files);
        if (files.length + inFiles.length > maxFilesAllowedForConversion) {
            setNotifications({ message: `Only ${maxFilesAllowedForConversion} images are allowed at a time for conversion.`, type: 'error' })
            return false;
        }
        const newFilesWithIds = inFiles.map(file => {
            if (file.size > maxImageConverterUploadSize) {
                setNotifications({ message: `${file.name} size is more than ${formatBytes(maxImageConverterUploadSize, 0)}.`, type: 'error' })
                return false;
            }

            const id = nanoid();
            file.id = id

            return file;
        }).filter(file => file);

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

        // set files status to waiting/queue
        files.forEach(file => {
            const id = file.id;
            handleFileStatus(id, { convertingStatus: 'waiting'})
        });
        
        // Sending files to server for conversion
        setNotifications({ message: 'Uploading files for conversion', type: 'success' });
        setConvertingStatus('converting');

        // Set empty files as a placeholder for FinalUpload.jsx component
        setConvertedFiles(files.map(file => ({ id: file?.id, url: null, filename: file?.name, size: '0' })))
        // Send images for conversion to server
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Compress image when size > 4MB
            let compressedFile = null;
            if (file.size > compressionStartSize) {
                handleFileStatus(file.id, { convertingStatus: 'compressing' })
                compressedFile = await compressImage(file, (prog) => trackCompressionProgress(file.id, prog));
                compressedFile.convertTo = file.convertTo;
            }
            const res = await sendAnImageForConversion(compressedFile ?? file, (prog) => trackUploadProgress(file.id, prog));

            if (!res.success) {
                setConvertingStatus('error');
                setNotifications({ message: 'Something went wrong!!!', type: 'error' });
                handleFileStatus(file.id, { convertingStatus: 'error'})
                continue;
            }
            
            handleFileStatus(file.id, { progress: 100, convertingStatus: 'finished'})
            setConvertedFiles(prevFiles => {
                const updated = [...prevFiles];
                updated[i] = {
                    id: file.id,
                    url: res.convertedFile.url,
                    filename: res.convertedFile.filename,
                    size: res.convertedFile.size,
                    format: res.convertedFile.format
                };
                return updated;
            });

        }


        // Handle success from server
        setConvertingStatus('success');
        setNotifications({ message: 'Images converted successfully!!!', type: 'success' });
        setFiles([]);
    }




    // set progress status mid upload to server
    function trackUploadProgress(id, progress ) {
        console.log(id, progress)
        const status = progress === 100 ? 'converting' : 'uploading'
        handleFileStatus(id, { progress: progress, convertingStatus: status })
    }
    function trackCompressionProgress(id, progress ) {
        handleFileStatus(id, { progress, convertingStatus: 'compressing' })
    }

    // Basic Function to update file status
    function handleFileStatus(id, updates) {
        setFilesStatus({
            [id]: {
                ...(filesStatus[id] || {}),
                ...updates
            }
        })
    }
    useEffect(() => {
        function updateFileStatus() {
            files.forEach(file => {
                const status = (!file?.convertTo || file?.convertTo === '...') ? 'waiting' : 'ready';
                const id = file.id;

                handleFileStatus(id, { convertingStatus: status })
            });
        } updateFileStatus();
    }, [files])

    return (
        <>
            <PageHeading heading={'Online Image Converter'} description={`File size must be less than ${formatBytes(maxImageConverterUploadSize, 0)}`} />
            <div className={' max-w-4xl w-full shadow-2xl rounded-lg overflow-hidden ' + ((colorScheme === 'dark') && ' shadow-slate-700')}>
                <div className={'shadow-md bg-clr-200 rounded-md max-h-[40vh] overflow-auto '}>
                    <input ref={inputRef} multiple max={10} maxLength={10} type='file' onChange={handleFile} className='hidden text-clr-100 text-2xl' placeholder='Input' id='convert-files' />
                    {files.map((file, i) => <ConvertFile setFiles={setFiles} fileStatus={filesStatus[file.id] ?? '...'} file={file} key={i} />)}
                </div>
                <div className='flex items-center justify-center gap-2 py-4'>
                    <span onClick={handleSelectAllButton} className='text-clr-100'>Convert all to:</span>
                    <select ref={formatRef} onChange={handleSelectAllButton} defaultValue={'...'} className={'rounded-sm text-clr-300 px-1.5 py-1.5 outline outline-clr-100 focus:outline-2 focus-within:outline-2 ' + ((colorScheme === 'dark') ? ' text-clr-100 bg-clr-100 ' : ' text-clr-300 ')}>
                        {conversionFormats.map((format, i) => <option key={i} className='px-1.5 py-2 text-clr-100'>{format}</option>)}
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
        </>

    )
}
