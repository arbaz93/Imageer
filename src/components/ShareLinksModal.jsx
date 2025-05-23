import { useState, useRef } from 'react'
import { crossIcon } from '../utils/constants'
import {shareFunctions} from '../js/socialShare';
import { useNotificationStore } from '../zustand/store';
import { SocialIcon } from './'

export default function ShareLinksModal({ displayStatus, setShareModalIsShowing, fileUrl }) {
    const [inputIsFocused, setInputIsFocused] = useState(false);
    const inputRef = useRef(null);
    const setNotifications = useNotificationStore(state => state.setNotifications);
    const socailItem = [
        {
            name: 'share on facebook',
            icon: <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />,
            viewBox: '0 0 320 512',
            css: {
                css: 'hover:bg-[#1679E9] active:bg-[#1679E9] focus:bg-[#1679E9] focus-within:bg-[#1679E9]',
                color: '#1679E9',
            },
            link: 'facebook.com'
        },
        {
            name: 'share on twitter',
            icon: <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />,
            viewBox: '0 0 512 512',
            css: {
                css: 'hover:bg-[#45C2F3] active:bg-[#45C2F3] focus:bg-[#45C2F3] focus-within:bg-[#45C2F3]',
                color: '#45C2F3',
            },
            link: 'twitter.com'
        },
        {
            name: 'share on instagram',
            icon: <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />,
            viewBox: '0 0 448 512',
            css: {
                css: 'hover:bg-[#BA5C7E] active:bg-[#BA5C7E] focus:bg-[#BA5C7E] focus-within:bg-[#BA5C7E]',
                color: '#BA5C7E',
            },
            link: 'instagram.com'
        },
        {
            name: 'share on whatsapp',
            icon: <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />,
            viewBox: '0 0 448 512',
            css: {
                css: 'hover:bg-[#36BC70] active:bg-[#36BC70] focus:bg-[#36BC70] focus-within:bg-[#36BC70]',
                color: '#36BC70',
            },
            link: 'whatsapp.com'
        },
        {
            name: 'share on telegram',
            icon: <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />,
            viewBox: '0 0 496 512',
            css: {
                css: 'hover:bg-[#0284C9] active:bg-[#0284C9] focus:bg-[#0284C9] focus-within:bg-[#0284C9]',
                color: '#0284C9',
            },
            link: 'telegram.com'
        },
    ];

    function handleInputFocus() {
        setInputIsFocused(!inputIsFocused);
    }
    async function handleCopy() {
        const text = inputRef.current.value;
    
        if (!text) return;
    
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
            } else {
                // fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }
            setNotifications({ message: 'Copied link!!!', type: 'success' });
        } catch (error) {
            console.error(error);
            setNotifications({ message: 'Copy failed', type: 'error' });
        }
    }
    
    
    return (
        <div className={'w-full m-auto sm:w-max bg-clr-200 shadow-lg rounded-2xl absolute top-1/2 mt-[-120px] left-0 sm:left-1/2 sm:ml-[-210px] ' + (displayStatus && ' animate-swipeup')}>
            {displayStatus && (
                <div className='flex flex-col text-clr-300 p-6 '>
                    <div className='flex justify-between items-center border-b border-clr-100 pb-4'>
                        <p className='text-lg font-extrabold'>Share Image</p>
                        <button className=' rounded-[50%] p-2 text-clr-100 cross-bg-clr-100 cursor-pointer' title='close' onClick={() => setShareModalIsShowing(false)}><img src={crossIcon} alt='close' /></button>
                    </div>
                    <div className='flex flex-col gap-4 pt-4'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-sm'>Share this link via</p>
                            <div className="socialIcons flex gap-2">
                                {socailItem.map((item, i) => <SocialIcon key={i} socialData={item} callBack={shareFunctions[i]} imageUrl={fileUrl} />)}
                                {/* <div className='h-0.5 bg-ntrl-400   m-auto flex-1'></div> */}
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p>Or copy link</p>
                            <div className={"sharelink rounded-sm flex items-center gap-2 border border-clr-100 px-3 py-2 duration-150 " + (inputIsFocused && ' outline ')}>
                                <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.05492 7.69499L4.11492 9.63499C3.88004 9.86167 3.56635 9.98836 3.23992 9.98836C2.91349 9.98836 2.5998 9.86167 2.36492 9.63499C2.24972 9.52024 2.15831 9.38388 2.09594 9.23373C2.03357 9.08357 2.00147 8.92258 2.00147 8.75999C2.00147 8.59739 2.03357 8.4364 2.09594 8.28625C2.15831 8.13609 2.24972 7.99973 2.36492 7.88499L4.30492 5.94499C4.39907 5.85083 4.45196 5.72314 4.45196 5.58999C4.45196 5.45684 4.39907 5.32914 4.30492 5.23499C4.21077 5.14083 4.08307 5.08794 3.94992 5.08794C3.81677 5.08794 3.68907 5.14083 3.59492 5.23499L1.65492 7.17999C1.2641 7.60538 1.05273 8.16532 1.06496 8.74286C1.07718 9.3204 1.31206 9.87089 1.72053 10.2794C2.12901 10.6878 2.6795 10.9227 3.25704 10.9349C3.83458 10.9472 4.39452 10.7358 4.81992 10.345L6.76492 8.40499C6.85907 8.31083 6.91196 8.18314 6.91196 8.04999C6.91196 7.91684 6.85907 7.78914 6.76492 7.69499C6.67077 7.60083 6.54307 7.54794 6.40992 7.54794C6.27677 7.54794 6.14907 7.60083 6.05492 7.69499V7.69499ZM10.3449 1.65499C9.92431 1.23699 9.35541 1.00238 8.76242 1.00238C8.16943 1.00238 7.60053 1.23699 7.17992 1.65499L5.23492 3.59499C5.1883 3.64161 5.15132 3.69695 5.12609 3.75786C5.10086 3.81877 5.08787 3.88406 5.08787 3.94999C5.08787 4.01592 5.10086 4.0812 5.12609 4.14211C5.15132 4.20302 5.1883 4.25837 5.23492 4.30499C5.28154 4.35161 5.33688 4.38859 5.39779 4.41382C5.4587 4.43905 5.52399 4.45203 5.58992 4.45203C5.65585 4.45203 5.72113 4.43905 5.78204 4.41382C5.84295 4.38859 5.8983 4.35161 5.94492 4.30499L7.88492 2.36499C8.1198 2.1383 8.43349 2.01161 8.75992 2.01161C9.08635 2.01161 9.40004 2.1383 9.63492 2.36499C9.75012 2.47973 9.84152 2.61609 9.90389 2.76625C9.96626 2.9164 9.99837 3.07739 9.99837 3.23999C9.99837 3.40258 9.96626 3.56357 9.90389 3.71373C9.84152 3.86388 9.75012 4.00024 9.63492 4.11499L7.69492 6.05499C7.64805 6.10147 7.61086 6.15677 7.58547 6.2177C7.56009 6.27863 7.54702 6.34398 7.54702 6.40999C7.54702 6.47599 7.56009 6.54134 7.58547 6.60227C7.61086 6.6632 7.64805 6.7185 7.69492 6.76499C7.7414 6.81185 7.7967 6.84905 7.85763 6.87443C7.91856 6.89982 7.98391 6.91289 8.04992 6.91289C8.11592 6.91289 8.18128 6.89982 8.24221 6.87443C8.30314 6.84905 8.35844 6.81185 8.40492 6.76499L10.3449 4.81999C10.7629 4.39938 10.9975 3.83047 10.9975 3.23749C10.9975 2.6445 10.7629 2.0756 10.3449 1.65499V1.65499ZM4.41492 7.58499C4.46164 7.63133 4.51705 7.66799 4.57797 7.69287C4.63888 7.71775 4.70411 7.73037 4.76992 7.72999C4.83572 7.73037 4.90095 7.71775 4.96187 7.69287C5.02279 7.66799 5.0782 7.63133 5.12492 7.58499L7.58492 5.12499C7.67907 5.03083 7.73196 4.90314 7.73196 4.76999C7.73196 4.63684 7.67907 4.50914 7.58492 4.41499C7.49077 4.32083 7.36307 4.26794 7.22992 4.26794C7.09677 4.26794 6.96907 4.32083 6.87492 4.41499L4.41492 6.87499C4.36805 6.92147 4.33086 6.97677 4.30547 7.0377C4.28009 7.09863 4.26702 7.16398 4.26702 7.22999C4.26702 7.29599 4.28009 7.36134 4.30547 7.42227C4.33086 7.4832 4.36805 7.5385 4.41492 7.58499Z" className='fill-clr-100' />
                                </svg>

                                <input className='text-sm font-medium w-1/4 sm:w-auto focus-within:outline-0 flex-1' ref={inputRef} defaultValue={fileUrl} onFocus={handleInputFocus} onBlur={handleInputFocus} type="url" name="share-link" id="share-link" />
                            <button className='bg-primary-100 text-white px-4 py-1.5 rounded-md cursor-pointer duration-100 hover:opacity-80' onClick={handleCopy} title='copy'>Copy</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
