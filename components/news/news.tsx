import { NewsApi } from '@/data/news'
import { Calendar, CalendarDate, CalendarProvider } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import NewsCardTy1 from './newsCardTy1'
import NewsCardTy2 from './newsCardTy2'
import NewsCardTy3 from './newsCardTy3'

const News = () => {

  return (
    <div className=' space-y-'>
      <div className="text-bs-cyan-v2 font-semibold p-3">الأخبار</div>
      <div className="space-y-5">
        <div className="flex">
          <NewsCardTy3 news={NewsApi[0]} />
        </div>
        <div className=" grid grid-cols-2 gap-4">
          {
            NewsApi.map((news, index) =>
              <NewsCardTy1 news={news} key={index} />
            )
          }
        </div>
        <div className="w-full flex flex-col gap-3">
          {
            NewsApi.map((news, index) =>
              <NewsCardTy2 news={news} key={index} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default News