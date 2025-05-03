import React from 'react'
import conversionFormats from '../utils/conversionFormats';
import { crossIcon, imageFormat } from '../utils/constants'
import { formatBytes } from '../utils/miscFunctions'
import { setImageFormatTo, removeImageFromFiles } from '../js/image-conversion/imageConversion';

export default function ConvertFile({ setFiles, file, fileStatus }) {


    return (
        <div className='special-grid-100 items-center justify-between px-4 py-2 border-b border-clr-100'>
            <div className='flex-1 flex items-center gap-2 overflow-ellipsis max-w-[40ch]'>
                <img src={imageFormat} alt='image icon' />
                <p className='text-clr-300 text-md whitespace-nowrap overflow-hidden text-ellipsis'>{file?.name}</p>
            </div>
            <div className=' flex gap-2 items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <p className='text-xs text-clr-100 opacity-80'>to</p>
                    <select value={file?.convertTo || '...'} onChange={(e) => {setImageFormatTo(file.id, e.target.value, setFiles)}} className='rounded-sm text-clr-300 px-1.5 py-1.5 outline outline-clr-100 focus:outline-2 focus-within:outline-2'>
                        {conversionFormats.map((format, i) => <option key={i} className='px-1.5 py-2'>{format}</option>)}
                    </select>
                </div>
            </div>
            <span className='mx-2 border border-green-500 text-green-500 uppercase text-[9px] rounded-xs px-[4px] align-middle whitespace-nowrap'>{fileStatus || 'ready'}</span>
            <p className=' text-xs text-clr-300 opacity-80'>{formatBytes(file?.size)}</p>

            <button onClick={() => removeImageFromFiles(file.id, setFiles)} className=''>{<img src={crossIcon} alt='romove' className='cursor-pointer w-6 opacity-40 hover:opacity-80 focus:opacity-80 duration-200' />}</button>
        </div>
    )
}
