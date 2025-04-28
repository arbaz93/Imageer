import { useState } from 'react'
import { linkIcon, downloadIcon, spinnerIcon } from '../utils/constants';
import ShareLinksModal from './ShareLinksModal';
import { useNotificationStore } from '../zustand/store';

export default function ImageUploadSuccess({ urlImageData }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [shareModalisShowing, setShareModalIsShowing] = useState(false)
  const setNotifications = useNotificationStore(state => state.setNotifications);
  function handleShare() {
    setShareModalIsShowing(!shareModalisShowing);
  }
  async function handleDownload() {
    try {
      setIsDownloading(true);
      setNotifications({message: `starting download!`, type: 'success'});

      const response = await fetch(urlImageData.url, { mode: 'cors' });
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement('a'); // BLOB URL created using URL.createObjectURL
      const fileName = urlImageData?.original_filename
        ? `${urlImageData.original_filename}.${urlImageData.format}`
        : `Image_${Date.now()}.jpg`;

      a.href = blobUrl;
      a.download = fileName;
      a.style.display = 'none';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

    } catch (err) {
      setNotifications({message: `cannot download ${urlImageData?.original_filename ?? 'image!'}`, type: 'error'});

      console.error(err)
    } finally {
      setNotifications({message: `downloading ${urlImageData?.original_filename ?? 'image!'}`, type: 'success'});

      setIsDownloading(false)

    }
  }

  return (
    <>
      <section className='w-full m-auto sm:w-[540px] h-[332px] bg-clr-200 shadow-lg rounded-md p-2 flex flex-col items-center justify-center gap-8' >
        <div className='h-full rounded-lg object-fit overflow-hidden'>
          <img src={urlImageData?.url} className='w-full h-full object-cover rounded-lg ' alt={urlImageData?.original_filename || ''} />
        </div>
      </section>
      <div className='w-full mt-6'>
        <div className="flex items-center justify-center gap-2 m-auto">
          <button className='flex gap-2 rounded-md bg-primary-100 hover:opacity-80 focus:opacity-80 focus-within:opacity-80 duration-200 text-clr-white px-3 py-1.5 text-[10px] cursor-pointer' onClick={handleShare} title='share'><img src={linkIcon}></img>Share</button>
          <button className='flex gap-2 rounded-md bg-primary-100 hover:opacity-80 focus:opacity-80 focus-within:opacity-80 duration-200 text-clr-white px-3 py-1.5 text-[10px] cursor-pointer' onClick={handleDownload} title='download'><img className={(isDownloading ? 'animate-spin' : '')} src={isDownloading ? spinnerIcon : downloadIcon}></img>Download</button>
        </div>
      </div>

      <ShareLinksModal displayStatus={shareModalisShowing} setShareModalIsShowing={setShareModalIsShowing} fileUrl={urlImageData?.url} />
    </>
  )
}
