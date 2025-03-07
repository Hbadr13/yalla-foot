'use client'
import { videosApi } from '@/data/videos'
import React, { useState } from 'react'
import VideoCompT1 from './videoCompT1'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { tournamentsApi } from '@/data/tournaments'
import Image from 'next/image'

const Header = () => {
    return (
        <div className=" rounded-2xl bg-bs-gray-dark-v2 p-6 space-y-3">
            <div className="font-bold text-2xl text-bs-cyan-v2">الفيديوهات</div>
            <div className="flex items-center rtl:space-x-reverse  space-x-2  text-sm">
                <Link href={'/ar/home'} className="text-bs-gray hover:text-bs-cyan-v2">
                    الرئيسية
                </Link>
                <div className="text-bs-gray">
                    /
                </div>
                <div className="">
                    الفيديوهات
                </div>
            </div>
        </div>
    )
}

const Videos = () => {
    const [currentTournament, setCurrentTournament] = useState<number>(tournamentsApi[0].id)
    const [more, setMore] = useState(0)
    return (
        <div className='space-y-5'>
            <Header />
            <div className=" space-y-3">
                <div className="p-1">
                    <div className="font-semibold text-lg p-2">الظهور حسب البطولة</div>
                    <div className="flex  flex-wrap rtl:space-x-reverse  gap-2">
                        {
                            tournamentsApi.map((tourn, index) =>
                                <Button onClick={() => setCurrentTournament(tourn.id)} className={`${currentTournament == tourn.id ? 'bg-bs-gray-dark-v1 text-white' : 'bg-bs-gray-dark-v2 text-bs-light-v2'} rounded-2xl p-2 rtl:space-x-reverse space-x-1  `} key={index}>
                                    <div className="">
                                        {tourn.name}
                                    </div>
                                    <Image src={tourn.image} width={400} height={400} alt={tourn.name} className='w-6 h-6' />
                                </Button>
                            )
                        }
                    </div>
                </div>
                <div className="grid gap-5 grid-rows-1 phone-md:grid-cols-2">
                    {
                        videosApi.concat(videosApi).slice(0, more ? videosApi.length * 2 : 6).map((video, index) =>
                            <VideoCompT1 key={index} video={video} />
                        )
                    }
                </div>
                <Button onClick={() => setMore((pr) => pr + 1)} className='w-full rounded-2xl bg-bs-gray-dark-v2 text-white font-medium text-sm'>
                    المزيد
                </Button>
            </div>
        </div>
    )
}

export default Videos