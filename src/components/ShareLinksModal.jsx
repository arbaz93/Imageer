import { useState, useRef } from 'react'
import { crossIcon } from '../utils/constants'
import {shareFunctions} from '../js/socialShare';
import { useNotificationStore } from '../zustand/store';
import { SocialIcon } from './'
import { socailItems } from '../utils/socialLinks';
export default function ShareLinksModal({ displayStatus, setShareModalIsShowing, fileUrl }) {
    const [inputIsFocused, setInputIsFocused] = useState(false);
    const inputRef = useRef(null);
    const setNotifications = useNotificationStore(state => state.setNotifications);

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
                                {socailItems.map((item, i) => <SocialIcon key={i} socialData={item} callBack={shareFunctions[i]} imageUrl={fileUrl} />)}
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
