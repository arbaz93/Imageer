import { Link } from 'react-router-dom';
import { logoIcon, logoWhiteIcon, moonFillIcon, sunFillIcon } from '../utils/constants';

export default function Navigation({ colorScheme, setColorScheme }) {

  function handleColorScheme() {
    const toggleColor = colorScheme === 'dark' ? 'light' : 'dark';

    setColorScheme(toggleColor);
  }
  return (
    <nav className='border-b-[1px] border-clr-100 z-50 relative'>
      <div className='wrapper py-4 px-8 flex items-center justify-between '>

        <a className='logo' href='/'>
          <img src={colorScheme === 'dark' ? logoWhiteIcon : logoIcon} alt='logo' />
        </a>
        <div className='links flex items-center gap-4'>
          <div className='hidden sm:flex gap-2 text-xs md:text-sm '>
            <p className='text-primary-100 uppercase font-bold border-r-2 border-clr-100 px-2'>IMAGE</p>
            <Link to={'/upload-image'} className='text-clr-300 uppercase border-b-2 border-transparent hover:border-current hover:font-bold duration-200'>uploader</Link>
            <Link to={'/convert-image'} className='text-clr-300 uppercase border-b-2 border-transparent hover:border-current hover:font-bold duration-200' >converter</Link>
            <Link to={'/enhance-image'} className='text-clr-300 uppercase border-b-2 border-transparent hover:border-current hover:font-bold duration-200' >enhancer</Link>
            <Link to={'/resize-image'} className='text-clr-300 uppercase border-b-2 border-transparent hover:border-current hover:font-bold duration-200'>resizer</Link>
          </div>
          <button className={'p-2 rounded-lg border-[1px] border-clr-100 cursor-pointer bg-ntrl-white '  + (colorScheme === 'dark' && ' bg-clr-200')} title={colorScheme == 'dark' ? 'enter light mode' : 'enter dark mode'} onClick={handleColorScheme}><img src={colorScheme == 'dark' ? sunFillIcon : moonFillIcon} /></button>
        </div>
      </div>
    </nav>
  )
}
