import { DownloadFiles, PageHeading } from './';
import { useNotificationStore } from '../zustand/store'

export default function FinalConversion({ filesStatus, setFilesStatus, files, setConvertingStatus, setConvertedFiles }) {
    const setNotifications = useNotificationStore(state => state.setNotifications);

    function downloadSingleFile(file) {
        setNotifications({ message: 'download starting!', type: 'success' })
        const a = document.createElement('a');
        a.download = file.filename || `image_${Date.now()}.${file.format}`;
        a.href = file.url;

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    function downloadAllFiles() {
        const filesAreReady = Object.keys(filesStatus).every(fId => filesStatus[fId].convertingStatus === 'finished');

        files.forEach((file, index) => {
            console.log(filesStatus[file.id]?.convertingStatus)
            if (filesStatus[file.id]?.convertingStatus == 'finished') {
                setNotifications({ message: 'download starting!', type: 'success' });
                const delay = 500; // milliseconds between each download

                setTimeout(() => {
                    const a = document.createElement('a');
                    a.download = file.filename || `image_${Date.now()}.${file.format}`;
                    a.href = file.url;

                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }, index * delay);
            }
        })

        if(!filesAreReady) return;
        setNotifications({ message: 'download starting!', type: 'success' })
        const delay = 500; // milliseconds between each download

        files.forEach((file, index) => {
            setTimeout(() => {
                const a = document.createElement('a');
                a.download = file.filename || `image_${Date.now()}.${file.format}`;
                a.href = file.url;

                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }, index * delay);
        });
        setFilesStatus({})
    }

    function convertMoreFiles() {
        setConvertedFiles([]);
        setConvertingStatus(null)
    }
    return (
        <>
            <PageHeading heading={'Image Conversion Complete!'} description={'Download your converted images'} />

            <div className=' max-w-5xl w-full shadow-2xl rounded-lg overflow-hidden'>
                <div className={'shadow-md bg-clr-200 rounded-md max-h-[40vh] overflow-auto'}>
                    {files.map((file, i) => <DownloadFiles file={file} filesStatus={filesStatus[file?.id]} key={i} downloadSingleFile={downloadSingleFile} />)}
                </div>
                <div className='flex items-center justify-center gap-2 py-4'>

                    {/*  */}
                </div>
                <div>
                    <div className='bg-clr-200 sm:pl-6 flex flex-col sm:flex-row justify-between'>
                        <button onClick={convertMoreFiles} className='text-clr-100 rounded-sm px-8 my-4 py-1.5 bg-clr-100 flex items-center justify-center gap-4 w-full sm:w-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={'1rem'} viewBox="0 0 448 512" fill="#3662E3"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                            <span>Convert more files</span>
                        </button>
                        <button onClick={() => downloadAllFiles()} className='group flex items-center justify-between bg-primary-100 w-full duration-200 sm:max-w-60 px-6 py-4 sm:py-0' >
                            <span className='font-bold text-lg text-clr-400'>Download All</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 fill-[#F9FAFB] group-hover:translate-x-2 group-focus:translate-x-2 group-focus-within:translate-x-2 group-hover:scale-150 group-focus:scale-150 group-focus-within:scale-150 duration-200' viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
