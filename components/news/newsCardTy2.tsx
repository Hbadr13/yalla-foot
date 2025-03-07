import { INewsApiJson } from '@/data/news'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import SvgIcons from '@/utils/svgIcons'

const NewsCardTy2 = ({ news }: { news: INewsApiJson }) => {
  return (
    <Link
      className='rounded-xl bg-bs-gray-dark-v2 p-3 group w-full'
      href={`/ar/news/${news.id}/${news.slug}`}
    >
      <div className="flex  items-center">
        <Image className='rounded-xl w-[100px] h-[70px] object-cover' src={news.image} width={2000} height={2000} alt={news.name} />
        <div className="">
          <p className=' group-hover:text-bs-cyan-v2 duration-150 font-semibold text-bs-white text-sm p-2'>{news.name}</p>
          <div className="text-bs-gray text-xs p-2">
            {news.description.split(' ').slice(0, 9).join(' ')}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsCardTy2
