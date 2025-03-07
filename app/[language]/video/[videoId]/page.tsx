'use client'

import { IVideosApiJson, videosApi } from '@/data/videos'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const Header = ({ video }: { video: IVideosApiJson }) => {
    return (
        <div className=" rounded-2xl bg-bs-gray-dark-v1  phone-md:bg-bs-gray-dark-v2 p-2  phone-md:p-6 space-y-3">
            <div className="font-bold  text-medium phone-md:text-2xl text-bs-light-v2  phone-md:text-bs-cyan-v2">{video.name}</div>
            <div className=" hidden phone-md:flex items-center rtl:space-x-reverse  space-x-2  text-sm">
                <Link href={'/ar/home'} className="text-bs-gray hover:text-bs-cyan-v2">
                    الرئيسية
                </Link>
                <div className="">
                    /
                </div>
                <Link href={'/ar/video'} className="text-bs-gray hover:text-bs-cyan-v2">
                    الفيديوهات
                </Link>
                <div className="">
                    /
                </div>
                <div className="">
                    شاهد الفيديو
                </div>
            </div>
        </div>
    )
}

const page = () => {
    const params = useParams<{ language: string, videoId: string }>()
    const [selectvideo, setSelectvideo] = useState<IVideosApiJson | null>((videosApi.find((video) => String(video.id) == params.videoId) || null))
    if (!selectvideo)
        return
    return (
        <div className='space-y-8'>
            
            <Header video={selectvideo} />
            
            <div className="">

                <iframe
                    className='w-full h-[500px]'
                    src={selectvideo.video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
                </iframe>
            </div>

            <div className="  rounded-b-2xl bg-bs-gray-dark-v2 p-7 ">
                <div className="font-bold text-xl">{selectvideo.name}</div>
            </div>
        </div>
    )
}

export default page
