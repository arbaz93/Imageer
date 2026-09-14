import { Link } from 'react-router-dom'
import ImageFormatConvertPage from './ImageFormatConvertPage'

const steps = [
  ['01', 'Choose your files', 'Drag and drop images or browse from your device.'],
  ['02', 'Pick a format', 'Set one output format for every file in the batch.'],
  ['03', 'Download results', 'Get your converted files as soon as processing finishes.']
]

export default function HomePage() {
  return (
    <div className='home-page w-full overflow-hidden'>
      <section className='home-hero relative mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-28'>
        <div className='relative z-10 max-w-2xl'>
          <p className='mb-5 text-xs font-bold uppercase tracking-[0.24em] text-primary-100'>Simple image tools</p>
          <h1 className='max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-clr-100 sm:text-7xl'>Make every image ready to use.</h1>
          <p className='mt-6 max-w-lg text-base leading-7 text-clr-300 sm:text-lg'>Convert images in batches, then download polished files without wrestling with complicated software.</p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <a href='#converter' className='rounded-md bg-primary-100 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg'>Start converting</a>
            <Link to='/upload-image' className='rounded-md border border-clr-100 px-5 py-3 font-semibold text-clr-100 transition hover:border-primary-100 hover:text-primary-100'>Upload an image</Link>
          </div>
          <div className='mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-clr-300'><span>Up to 10 files</span><span>10 MB per file</span><span>JPG, PNG, GIF and more</span></div>
        </div>
        <div className='home-hero-art relative hidden min-h-[310px] lg:block' aria-hidden='true'>
          <div className='absolute right-8 top-8 h-56 w-56 rotate-6 rounded-2xl bg-primary-100 shadow-2xl'></div>
          <div className='absolute left-8 top-16 h-64 w-64 -rotate-6 rounded-2xl border-8 border-white bg-[#dbeafe] shadow-xl'></div>
          <div className='absolute bottom-3 right-0 rounded-lg border border-white/80 bg-white px-5 py-4 shadow-xl'><p className='text-xs uppercase tracking-widest text-clr-300'>Output ready</p><p className='mt-1 font-bold text-clr-100'>Clean. Fast. Yours.</p></div>
        </div>
      </section>

      <section id='converter' className='border-y border-clr-100 bg-clr-200 px-4 py-12 sm:px-8 sm:py-16'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-2 flex items-end justify-between gap-4'><div><p className='text-xs font-bold uppercase tracking-[0.2em] text-primary-100'>The main tool</p><h2 className='mt-2 text-3xl font-bold text-clr-100 sm:text-4xl'>Convert your images</h2></div><span className='hidden text-sm text-clr-300 sm:block'>Batch conversion, in one place.</span></div>
          <ImageFormatConvertPage />
        </div>
      </section>

      <section className='mx-auto grid max-w-6xl gap-5 px-6 py-16 sm:grid-cols-3 sm:px-10'>
        {steps.map(([number, title, description]) => <article key={number} className='border-t-2 border-primary-100 pt-4'><p className='text-sm font-bold text-primary-100'>{number}</p><h3 className='mt-3 text-lg font-bold text-clr-100'>{title}</h3><p className='mt-2 text-sm leading-6 text-clr-300'>{description}</p></article>)}
      </section>
    </div>
  )
}
