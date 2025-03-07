import { INewsApiJson } from '@/data/news'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import SvgIcons from '@/utils/svgIcons'
import DisplayTime from '@/utils/displayTime'

const NewsCardTy2 = ({ news }: { news: INewsApiJson }) => {
  return (
    <Link
      className='rounded-xl bg-bs-gray-dark-v2  group w-full'
      href={`/ar/news/${news.id}/${news.slug}`}
    >
      <div className="flex  flex-col  sm:flex-row  items-start sm:items-center">
        <Image className='rounded-r-xl  w-full sm:w-3/5 h-[260px] object-cover' src={news.image} width={2000} height={2000} alt={news.name} />
        <div className="">
          <p className=' group-hover:text-bs-cyan-v2 duration-150 font-semibold text-bs-white text-sm p-2'>{news.name}</p>
          <div className='font-semibold text-bs-white text-sm p-2 flex items-center  rtl:space-x-reverse  space-x-2'>
            <SvgIcons iconName='clock' />
            <div className="text-bs-gray text-xs">
              <DisplayTime time={news.time} type='normal' format='L' />
            </div>
          </div>
          <div className="text-bs-gray text-xs p-2">
            {news.description.split(' ').slice(0, 9).join(' ')}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsCardTy2
