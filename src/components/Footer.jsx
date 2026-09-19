import { Link } from 'react-router-dom'
import { logoWhiteIcon } from '../utils/constants'
import { socialLinks } from '../utils/socialLinks'

export default function Footer() {
    return (
        <footer className='mt-auto bg-primary-100 px-6 py-6 text-white sm:px-10'>
            <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4'>
                <Link to='/' aria-label='Imageer home'>
                    <img className='w-24' src={logoWhiteIcon} alt='Imageer' />
                </Link>
                <nav className='flex flex-wrap items-center gap-5 text-sm font-semibold' aria-label='Footer navigation'>
                    <Link to='/upload-image' className='hover:underline'>Uploader</Link>
                    <Link to='/convert-image' className='hover:underline'>Converter</Link>
                    <a href={socialLinks.github.url} target='_blank' rel='noreferrer' className='hover:underline'>GitHub</a>
                </nav>
                <p className='w-full text-xs text-white/70 sm:w-auto'>© {new Date().getFullYear()} Yousaf Arbaz</p>
            </div>
        </footer>
    )
}
