import { imageFormat } from '../utils/constants'
import { formatBytes } from '../utils/miscFunctions'

export default function DownloadFiles({ file, downloadSingleFile }) {


    return (
        <div className='special-grid-200 items-center pl-4 justify-between gap-2 border-b border-clr-100 overflow-hidden'>
            <div className='flex-1 flex items-center gap-2 overflow-ellipsis sm:py-2 max-w-full'>
                <img src={imageFormat} alt='image icon' />
                <p className='text-clr-300 text-md whitespace-nowrap overflow-hidden text-ellipsis'>{file?.filename}</p>
            </div>

            <span className='mx-2 border border-green-500 text-green-500 uppercase text-[9px] rounded-xs px-[4px] align-middle whitespace-nowrap '>{'ready'}</span>
            <p className=' text-xs text-clr-300 opacity-80 '>{formatBytes(file?.size)}</p>

            <button onClick={() => downloadSingleFile(file)} className='group text-center flex items-center justify-between bg-primary-100 hover:opacity-40 duration-200 h-full w-full max-w-[10rem]  px-6 py-4 sm:py-0' >
                <span className='font-bold text-md text-clr-400 text-center w-full'>Download</span>
            </button>
        </div>
    )
}
