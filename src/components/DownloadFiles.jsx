import { imageFormat, spinnerIcon, downloadIcon, crossIcon } from '../utils/constants'
import { formatBytes } from '../utils/miscFunctions'
import { useColorSchemeStore } from '../zustand/store';

export default function DownloadFiles({ file, downloadSingleFile, filesStatus }) {
    const colorScheme = useColorSchemeStore(state => state.colorScheme);

    const statusColors = {
        ready:      colorScheme === 'dark' ? ' border-green-200 text-green-200 ' : ' border-green-500 text-green-500 ',
        finished:   colorScheme === 'dark' ? ' border-green-200 text-green-200 ' : ' border-green-500 text-green-500 ',
        waiting:    colorScheme === 'dark' ? ' border-yellow-200 text-yellow-200 ' : ' border-yellow-500 text-yellow-500 ',
        uploading:  colorScheme === 'dark' ? ' border-orange-200 text-orange-200 ' : ' border-orange-500 text-orange-500 ',
        compressing:  colorScheme === 'dark' ? ' border-violet-200 text-violet-200 ' : ' border-violet-500 text-violet-500 ',
        converting: colorScheme === 'dark' ? ' border-blue-200 text-blue-200 '     : ' border-blue-500 text-blue-500 ',
        error:      colorScheme === 'dark' ? ' border-red-200 text-red-200 '       : ' border-red-500 text-red-500 ',
    };
    
    return (
        <div className='special-grid-200 items-center pl-4 justify-between gap-2 border-b border-clr-100 overflow-hidden border-v'>
            <div className='flex-1 flex items-center gap-2 overflow-ellipsis sm:py-2 max-w-full'>
                <img src={imageFormat} alt='image icon' />
                <p className='text-clr-300 text-md whitespace-nowrap overflow-hidden text-ellipsis'>{file?.filename}</p>
            </div>

            <span className={'relative mx-2 border uppercase text-[9px] px-2 rounded-xs align-middle whitespace-nowrap ' + (statusColors[filesStatus?.convertingStatus] ?? statusColors['waiting'])}>{filesStatus?.convertingStatus ?? 'Queue'}: {filesStatus?.progress ?? 0}%</span>
            <p className=' text-xs text-clr-300 opacity-80 '>{formatBytes(file?.size)}</p>

            <button disabled={(file.size == 0) ? true : false} onClick={() => downloadSingleFile(file)} className={'group text-center flex items-center justify-between bg-primary-100 hover:opacity-40 duration-200 h-full w-full max-w-[10rem]  px-6 py-4 sm:py-0 ' + ((file.size == 0 || !file.size) ? ' opacity-40 ' : '  opacity-100 ')} >
                <img src={((filesStatus?.convertingStatus == 'finished') ? downloadIcon : (filesStatus?.convertingStatus == 'error') ? crossIcon : spinnerIcon)} alt='spinner' className={' ' + (((filesStatus?.convertingStatus == 'converting' || filesStatus?.convertingStatus == 'waiting') ? ' animate-spin ' : ' '))}/>
                <span className='font-bold text-md text-clr-400 text-center w-full'>Download</span>
            </button>
        </div>
    )
}
