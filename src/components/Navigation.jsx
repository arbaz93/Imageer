import { logoIcon, logoWhiteIcon, moonFillIcon, sunFillIcon } from '../utils/constants';

export default function Navigation({ colorScheme, setColorScheme }) {

  function handleColorScheme() {
    const toggleColor = colorScheme === 'dark' ? 'light' : 'dark';

    document.documentElement.classList.toggle('dark')
    setColorScheme(toggleColor);
  }
  return (
    <nav className='border-b-[1px] border-clr-100 z-50 relative'>
      <div className='wrapper py-4 px-8 flex items-center justify-between '>

        <a className='logo' href='/'>
          <img src={colorScheme === 'dark' ? logoWhiteIcon : logoIcon} alt='logo' />
        </a>
        <div className='links'>
          <button className={'p-2 rounded-lg border-[1px] border-clr-100 cursor-pointer bg-ntrl-white '  + (colorScheme === 'dark' && ' bg-clr-200')} title={colorScheme == 'dark' ? 'enter light mode' : 'enter dark mode'} onClick={handleColorScheme}><img src={colorScheme == 'dark' ? sunFillIcon : moonFillIcon} /></button>
        </div>
      </div>
    </nav>
  )
}
