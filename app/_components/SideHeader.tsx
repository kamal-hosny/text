import React from 'react'
import Nav from './Nav'
import DLogo from './DLogo'

const SideHeader = () => {
    return (
         <div className="w-[265px] bg-[#F8F8F8] h-screen fixed top-0 right-0 space-y-4 py-10 px-5 overflow-y-auto">
            <DLogo />
            <button  className='bg-black cursor-pointer text-white font-semibold px-5 items-center justify-center py-3 rounded-full flex gap-2'>زيـــارة المــوقع
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.75 12.75L5.25 5.25M5.25 5.25V12M5.25 5.25H12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <Nav />
            </div>
    )
}

export default SideHeader