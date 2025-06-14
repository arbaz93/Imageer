import { ImageConverter } from '../components'
import banner1 from '../assets/banner-1.jpg'
import { useColorSchemeStore } from '../zustand/store'
import { socialLinks } from '../utils/socialLinks'
export default function HomePage() {
  const colorScheme = useColorSchemeStore(state => state.colorScheme);
  const iconsCSS = 'w-8 h-8 fill-[#3662E3]'
  const socialCSS = 'w-8 h-8'
  const fileImageSvg = <svg className={iconsCSS} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM64 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm152 32c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5s-8.2 8.6-14.2 8.6l-88 0-40 0-48 0-48 0c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2 .2-16.1l48-80c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l12.8 21.4 48.3-70.2c3-4.3 7.9-6.9 13.2-6.9z" /></svg>
  const cloudUploadSvg = <svg className={iconsCSS + ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" /></svg>
  const lockSvg = <svg className={iconsCSS} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" /></svg>
  const mobileSvg = <svg className={iconsCSS} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm80 432l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
  const glitterSvg = <svg className={iconsCSS} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M208,512a24.84,24.84,0,0,1-23.34-16l-39.84-103.6a16.06,16.06,0,0,0-9.19-9.19L32,343.34a25,25,0,0,1,0-46.68l103.6-39.84a16.06,16.06,0,0,0,9.19-9.19L184.66,144a25,25,0,0,1,46.68,0l39.84,103.6a16.06,16.06,0,0,0,9.19,9.19l103,39.63A25.49,25.49,0,0,1,400,320.52a24.82,24.82,0,0,1-16,22.82l-103.6,39.84a16.06,16.06,0,0,0-9.19,9.19L231.34,496A24.84,24.84,0,0,1,208,512Zm66.85-254.84h0Z" /><path d="M88,176a14.67,14.67,0,0,1-13.69-9.4L57.45,122.76a7.28,7.28,0,0,0-4.21-4.21L9.4,101.69a14.67,14.67,0,0,1,0-27.38L53.24,57.45a7.31,7.31,0,0,0,4.21-4.21L74.16,9.79A15,15,0,0,1,86.23.11,14.67,14.67,0,0,1,101.69,9.4l16.86,43.84a7.31,7.31,0,0,0,4.21,4.21L166.6,74.31a14.67,14.67,0,0,1,0,27.38l-43.84,16.86a7.28,7.28,0,0,0-4.21,4.21L101.69,166.6A14.67,14.67,0,0,1,88,176Z" /><path d="M400,256a16,16,0,0,1-14.93-10.26l-22.84-59.37a8,8,0,0,0-4.6-4.6l-59.37-22.84a16,16,0,0,1,0-29.86l59.37-22.84a8,8,0,0,0,4.6-4.6L384.9,42.68a16.45,16.45,0,0,1,13.17-10.57,16,16,0,0,1,16.86,10.15l22.84,59.37a8,8,0,0,0,4.6,4.6l59.37,22.84a16,16,0,0,1,0,29.86l-59.37,22.84a8,8,0,0,0-4.6,4.6l-22.84,59.37A16,16,0,0,1,400,256Z" /></svg>
  const resizeSvg = <svg className={iconsCSS} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z" /></svg>
  const githubSvg = <svg className={socialCSS} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
  const linkedInSvg = <svg className={socialCSS} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

  const services = [
    {
      name: 'Image Converter',
      icon: fileImageSvg,
      description: "Convert your images into high-quality formats effortlessly. Our converter supports multiple files at once, so you can batch-convert images without wasting time. Whether it's JPG, PNG, WebP or more your images come out crisp and optimized."
    },
    {
      name: 'Image Uploader',
      icon: cloudUploadSvg,
      description: "Upload your images to the cloud with ease. Each upload is securely stored and accessible for 30 days, giving you plenty of time to edit, download, or share. Easily generate download links or post your images directly to social media platforms."
    },
    {
      name: 'Image Resizer',
      icon: resizeSvg,
      description: "Resize your images to fit any need, whether it's for social media, web use, or printing. You can also crop images freely to focus on what matters most—all while maintaining high quality."
    },
    {
      name: 'Image Enhancer',
      icon: glitterSvg,
      description: 'Give your photos a professional touch with our image enhancer. Using advanced AI, it improves brightness, sharpness, and overall quality—making your images look better instantly with just one click.'
    },
    {
      name: 'Security Guaranteed',
      icon: lockSvg,
      description: "Your privacy is our priority. Since images are not stored during the conversion or editing process, your files remain secure and confidential. Only uploads you choose to save are temporarily stored for sharing and access."
    },
    {
      name: 'All devices supported',
      icon: mobileSvg,
      description: "Our app runs entirely in the cloud, meaning all heavy lifting happens on our backend servers. This ensures fast performance, even on older or low-powered devices. Whether you're on a phone, tablet, or desktop, you'll get the same smooth experience."
    }
  ]
  const tools = [
    {
      name: 'Optimize web images',
      description: "Resize and compress multiple images online with high precision. Optimize your photos for faster web loading, better social media sharing, and enhanced e-commerce performance."
    },
    {
      name: 'Batch edit photos',
      description: "Convert multiple images at once with powerful batch processing. Imageer supports a wide range of formats including PNG, JPG, GIF, WEBP, HEIC, and RAW. Upgrade to Premium to mass convert files up to 1GB per task with lightning-fast performance."
    },
    {
      name: 'No Design Skills Needed',
      description: "Create stunning, professional-looking images without any graphic design experience. Our intuitive tools do the hard work for you—just upload, click, and download."
    }
  ]
  const wrapper = 'px-4 max-w-4xl ';
  return (
    <div className='flex flex-col items-center justify-center gap-12 w-full mx-auto top-0 left-0 py-8 '>
      <section className={'flex flex-col items-center justify-center gap-8 w-full h-full min-h-[60vh] ' + wrapper}>
        <ImageConverter />
      </section>
      {/* Services */}
      <section className={wrapper}>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
          {services.map(service => (
            <div className='flex flex-col gap-4 items-center text-center' key={service.name}>
              {service.icon}
              <h3 className='text-lg  text-clr-100'>{service.name}</h3>
              <p className='text-xs sm:text-sm font-light text-clr-100'>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Services section End */}

      {/* Photo editing tools section */}
      <section className='mt-[20vh] shadow-2xl bg-clr-200 w-full pt-12 pb-16'>
        <h4 className='max-w-2xl text-center m-auto text-2xl font-bold text-clr-100 mb-8 text-pretty '>Photo editing tool made for <span className='text-primary-100 uppercase'>everyone</span></h4>
        <div className={'flex items-start flex-wrap sm:flex-nowrap gap-8 m-auto  ' + wrapper}>
          {
            tools.map(t => (
              <div className='grid gap-4 w-[400px] mx-auto' key={t.name}>
                <h5 className='text-clr-100 text-lg'>{t.name}</h5>
                <p className='text-clr-100 text-pretty font-light text-md sm:text-md'>{t.description}</p>
              </div>
            ))
          }
        </div>
      </section>
      {/* Photo editing tools section End*/}

      {/* Contribution */}
      {/* top calc values are components-bottom-margin + parents-bottom-padding + custom-offset */}
      <section className={' grid grid-cols-2 relative top-[calc(6rem+2rem+2rem)] md:top-[calc(6rem+2rem+4rem)] bg-white w-full my-24 rounded-lg overflow-hidden shadow-2xl p-0 max-w-2xl ' + ((colorScheme === 'dark') && ' shadow-slate-700 ')}>
        <div className='grid items-center p-4'>
          <h6 className='text-primary-100 text-lg uppercase'>Contribute:</h6>
          <p className=' text-[#4D5562] text-md text-pretty'>Support us by starring the project on GitHub, contributing code, or sharing the website with others.</p>
          <a href={socialLinks.github.url} target='_blank' className=''>{githubSvg}</a>
        </div>
        <div className={'w-full h-full overflow-hidden'}>
          <img src={banner1} className='w-full h-full object-cover sm:object-contain'></img>
        </div>
      </section>
      {/* Contribution section End */}

    </div>
  )
}
