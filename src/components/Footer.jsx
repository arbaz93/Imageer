import { Link } from 'react-router-dom'
import { logoWhiteIcon, arrowRight } from '../utils/constants'
import { socailItems } from '../utils/socialLinks'

export default function Footer() {
    const imageManipulationlinks = [
        { label: 'uploader', to: '/upload-image' },
        { label: 'converter', to: '/convert-image' },
        { label: 'enhancer', to: '/enhance-image' },
        { label: 'resizer', to: '/resize-image' }
    ]
    const systemLinks = [
        { label: 'about us', to: '/about-us' },
        { label: 'Security', to: '/security' },
        { label: 'Formats', to: '/formats' },
        { label: 'help', to: '/resize-image' }
    ]
    const miscLinks = [
        { label: 'Cookies Policy', to: '/cookies-policy' },
        { label: 'Legal Terms', to: '/legal-terms' },
        { label: 'Privacy Policy', to: '/privacy policy' },
    ]

    return (
        <footer className='grid gap-8 bg-primary-100 rounded-t-lg pt-24 pb-8 px-10 sm:px-12  text-white font-semibold text-md'>
            {/* Lets talk for small screens e.g mobile */}
            <div className='block md:hidden hover:scale-110 duration-200 mb-8 '>
                <Link to={'contact-us'} >
                    <p className='text-md opacity-80'>GOT A PROJECT IN MIND?</p>
                    <p className='text-8xl'>Let's talk</p>
                </Link>
            </div>

            {/* logo image */}
            <Link to={'/'}>
                <img className='mb-8' src={logoWhiteIcon} alt='imageer logo icon' />
            </Link>

            {/* Page links */}
            <div className='flex gap-12 justify-between w-full'>
                <div className='grid grid-flow-col gap-24'>
                    {/* imageManipulationlinks */}
                    <div className='capitalize flex flex-col gap-2'>
                        {imageManipulationlinks.map(link => (
                            <Link key={link.label} to={link.to} className='capitalize block hover:scale-110 duration-200'>{link.label}</Link>
                        ))}
                    </div>
                    {/* systemLinks */}
                    <div className='capitalize flex flex-col gap-2'>
                        {systemLinks.map(link => (
                            <Link key={link.label} to={link.to} className='capitalize block hover:scale-110 duration-200'>{link.label}</Link>
                        ))}
                    </div>

                </div>
                <div className='hidden md:block hover:scale-110 duration-200'>
                    <Link to={'contact-us'} >
                        <p className='text-md opacity-80'>GOT A PROJECT IN MIND?</p>
                        <p className='text-8xl'>Let's talk</p>
                    </Link>
                </div>
            </div>
            {/* divider */}
            <div className={'divider w-full md:w-[calc(100%+3rem)] border-t border-white opacity-80 border-dashed '}></div>
            <div className='flex flex-wrap gap-4 justify-between'>
                <div className='flex gap-4 md:w-1/2'>
                    {miscLinks.map(link => (
                        <Link key={link.label} to={link.to} className='capitalize block hover:scale-110 duration-200 opacity-80'>{link.label}</Link>
                    ))}
                </div>
                {/* Social Icons */}
                <div className='flex gap-4 w-full md:w-1/3 md:justify-end'>
                    {socailItems.map(link => (
                        <Link to={link.link} title={link.name} key={link.name}>
                            <svg viewBox={link.viewBox} className={'w-6 h-6 sm:w-8 sm:h-8 fill-white opacity-80 hover:opacity-100 duration-200'}>
                                {link.icon}
                            </svg>
                        </Link>
                    ))}
                </div>
                <div className='w-full'>
                    <a href={'#top'} title="to top" className='bg-white inline-block p-3.5 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#4D5562] w-4 h-4 rotate-[-90deg]' viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}
