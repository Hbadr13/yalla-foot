import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const DownloadApp = () => {
    return (
        <div className=' relative  rounded-2xl bg-cover bg-[url(https://www.ysscores.com/images/download-app-bg.png)]  '>
            <Image className='  absolute z-10 object-contain w-[240px] bottom-0 left-10' src={`https://www.ysscores.com/images/app-img.png`} width={3000} height={3000} alt='mobileapp' />
            <div className=" relative z-20 p-10 space-y-10">
                <div className="space-y-3">
                    <div className="text-bs-cyan-v2 font-semibold">تحميل التطبيق</div>
                    <div className="">حمل التطبيق وتمتع بمتابعة لحظية للأحداث الرياضية</div>
                </div>
                <div className="flex rtl:space-x-reverse space-x-4">
                    <Link href={'/'} className="bg-bs-gray-dark-v2 rounded-xl p-3 flex justify-center items-center">
                        <Image className='h-[36px] w-[140px] object-contain' alt='logo' src={`https://www.ysscores.com/images/google-play.svg`} width={1000} height={1000} />
                    </Link>
                    <Link href={'/'} className="bg-bs-gray-dark-v2 rounded-xl p-3 flex justify-center items-center">
                        <Image className='h-[30px] w-[130px] object-contain  ' alt='logo' src={`https://www.ysscores.com/images/app-store.svg`} width={1000} height={1000} />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default DownloadApp
