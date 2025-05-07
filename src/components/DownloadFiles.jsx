import { useEffect, useState } from 'react';
import { imageFormat, spinnerIcon, downloadIcon, crossIcon } from '../utils/constants'
import { formatBytes } from '../utils/miscFunctions'

export default function DownloadFiles({ file, downloadSingleFile, filesStatus }) {
    const colorScheme = localStorage.getItem('imageerColorScheme');
    const statusColors = {
        'ready': colorScheme === 'dark' ? ' border-green-500 text-green-500 ' : ' border-green-500 text-green-500 ',
        'waiting': colorScheme === 'dark' ? ' border-orange-500 text-orange-500 ' : ' border-orange-500 text-orange-500 ',
        'converting': colorScheme === 'dark' ? ' border-orange-500 text-orange-500 ' : ' border-orange-500 text-orange-500 ',
        'finished': colorScheme === 'dark' ?  ' border-green-500 text-green-500 ' : ' border-green-500 text-green-500 ',
        'error': colorScheme === 'dark' ? ' border-red-600 text-red-600 ' : ' border-red-400 text-red-400 ',
    }
    const [currentStatusColor, setCurrentStatusColor] = useState(' border-green-500 text-green-500 ');

    useEffect(() => {
        setCurrentStatusColor(statusColors[filesStatus?.convertingStatus]);
    }, [filesStatus?.convertingStatus])

    return (
        <div className='special-grid-200 items-center pl-4 justify-between gap-2 border-b border-clr-100 overflow-hidden'>
            <div className='flex-1 flex items-center gap-2 overflow-ellipsis sm:py-2 max-w-full'>
                <img src={imageFormat} alt='image icon' />
                <p className='text-clr-300 text-md whitespace-nowrap overflow-hidden text-ellipsis'>{file?.filename}</p>
            </div>

            <span className={'relative mx-2 border uppercase text-[9px] px-2 rounded-xs align-middle whitespace-nowrap ' + (currentStatusColor ?? statusColors['waiting'])}>{filesStatus?.convertingStatus ?? 'Queue'}: {filesStatus?.progress ?? 0}</span>
            <p className=' text-xs text-clr-300 opacity-80 '>{formatBytes(file?.size)}</p>

            <button disabled={(file.size == 0) ? true : false} onClick={() => downloadSingleFile(file)} className={'group text-center flex items-center justify-between bg-primary-100 hover:opacity-40 duration-200 h-full w-full max-w-[10rem]  px-6 py-4 sm:py-0 ' + ((file.size == 0 || !file.size) ? ' opacity-40 ' : '  opacity-100 ')} >
                <img src={((filesStatus?.convertingStatus == 'finished') ? downloadIcon : (filesStatus?.convertingStatus == 'error') ? crossIcon : spinnerIcon)} alt='spinner' className={' ' + (((filesStatus?.convertingStatus == 'converting' || filesStatus?.convertingStatus == 'waiting') ? ' animate-spin ' : ' '))}/>
                <span className='font-bold text-md text-clr-400 text-center w-full'>Download</span>
            </button>
        </div>
    )
}
