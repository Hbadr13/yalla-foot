import { IVideosApiJson } from '@/data/videos'
import SvgIcons from '@/utils/svgIcons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VideoCompT1 = ({ video }: { video: IVideosApiJson }) => {
    return (
        <Link href={`/ar/video/${video.id}`} className=' w-full group bg-bs-gray-dark-v2 rounded-2xl'>
            <div className="relative">
                <Image src={video.image} width={1000} height={1000} alt={`v:${video.id}`} className=' relative z-0 object-cover h-[300px] w-full rounded-t-2xl' />
                <div className="absolute z-20  inset-0 text-blue-600 flex justify-center items-center"><SvgIcons iconName='playVideo' /></div>
            </div>
            <div className="text-white font-medium p-3 group-hover:text-bs-cyan-v2 duration-150">
                {video.name}
            </div>
        </Link>
    )
}

export default VideoCompT1