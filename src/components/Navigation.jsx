import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logoIcon, logoWhiteIcon, moonFillIcon, sunFillIcon } from '../utils/constants';
import { useState } from 'react';
import { useColorSchemeStore } from '../zustand/store';

export default function Navigation({  }) {
  // current route
  const { pathname } = useLocation();

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const colorScheme = useColorSchemeStore(state => state.colorScheme);
  const setColorScheme = useColorSchemeStore(state => state.setColorScheme)
  // Navigation links
  const links = [
    { label: 'uploader', to: '/upload-image'},
    { label: 'converter', to: '/convert-image'},
    { label: 'enhancer', to: '/enhance-image'},
    { label: 'resizer', to: '/resize-image'}
  ]


  function handleColorScheme() {
    setColorScheme();
  }
  function handleNavigationMobileDisplay() {
    setMobileNavIsOpen(prev => !prev);
  }
  return (
    <nav className='border-b-[1px] border-clr-100 z-50 relative'>
      <div className='wrapper py-4 px-8 flex items-center justify-between '>

        <a className='logo' href='/'>
          <img src={colorScheme === 'dark' ? logoWhiteIcon : logoIcon} alt='logo' />
        </a>
        <div className='links flex items-center gap-4'>
          
          {/* Mobile Navigation */}
          {/* Hamburger */}
          <button className={'aspect-square p-2 rounded-lg border-[1px] border-clr-100 cursor-pointer bg-ntrl-white  sm:hidden '  + (colorScheme === 'dark' && ' bg-clr-200')} title='open menu' onClick={handleNavigationMobileDisplay}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={'fill-clr-100 ' + (colorScheme === 'dark' && 'opacity-80')} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></button>
          <div className={'flex items-center justify-center sm:hidden gap-2 text-md md:text-sm bg-clr-100 shadow-2xl absolute top-full left-0 w-full overflow-hidden duration-200 linear origin-bottom ' + (mobileNavIsOpen ? ' p-8  max-h-[500px] ' : ' py-0 max-h-0 ')}>
            <p className='text-primary-100 h-10 flex items-center uppercase font-bold border-r-2 border-clr-100 px-2'>IMAGE</p>
            <div className='flex flex-col gap-2'>
            {links.map((link, i) => <Link key={i} to={link.to} className={'text-clr-300 uppercase border-b-2  hover:border-current hover:font-bold duration-200 ' + ((pathname === link.to) ? ' border-current font-bold ' : ' border-transparent ')}>{link.label}</Link>)}
            </div>
            {/* Add a more tools link here */}
          </div>
          {/* Desktop Navigation */}
          <div className='hidden sm:flex gap-2 text-xs md:text-sm'>
            <p className='text-primary-100 uppercase font-bold border-r-2 border-clr-100 px-2'>IMAGE</p>
            {links.map((link, i) => <Link key={i} to={link.to} className={'text-clr-300 uppercase border-b-2  hover:border-current hover:font-bold duration-200 ' + ((pathname === link.to) ? ' border-current font-bold ' : ' border-transparent ')}>{link.label}</Link>)}
          </div>
          <button className={'aspect-square p-2 rounded-lg border-[1px] border-clr-100 cursor-pointer bg-ntrl-white '  + (colorScheme === 'dark' && ' bg-clr-200')} title={colorScheme == 'dark' ? 'enter light mode' : 'enter dark mode'} onClick={handleColorScheme}><img src={colorScheme == 'dark' ? sunFillIcon : moonFillIcon} /></button>
        </div>
      </div>
    </nav>
  )
}
