import { INewsApiJson } from '@/data/news'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import SvgIcons from '@/utils/svgIcons'
import DisplayTime from '@/utils/displayTime'

const NewsCardTy2 = ({ news }: { news: INewsApiJson }) => {
  return (
    <div
      className='w-full'
    >
      <div className="rounded-3xl bg-bs-gray-dark-v2   w-full ">
        <Image className='rounded-t-3xl w-full object-contain' src={news.image} width={2000} height={2000} alt={news.name} />
        <p className=' duration-150 font-semibold text-bs-white  p-2 text-md phone-md:p-5  phone-md:text-2xl'>{news.name}</p>
      </div>
      <div className="">
        <div className='font-semibold text-bs-white text-sm p-2 flex items-center  rtl:space-x-reverse  space-x-2'>
          <SvgIcons iconName='calander' />
          <div className="text-bs-gray text-xs">
            <DisplayTime time={news.time} type='normal' format='L' />
          </div>
        </div>
        <div className="w-full  p-2 text-sm  phone-md:text-md  text-bs-light-v2">
          {news.description.split('.').filter((str) => str !== '').map((str, index) => (
            <p key={index}>{str}.<br /><br /><br /></p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsCardTy2
