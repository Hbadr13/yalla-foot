import { NewsApi } from '@/data/news'
import React from 'react'
import NewsCardTy2 from './newsCardTy2'

const NewsRelated = () => {
  return (
    <div className='animate-appearance-in-Custom space-y-'>
      <div className="space-y-5">
        <div className="w-full flex flex-col gap-3">
          {
            NewsApi.concat(NewsApi).map((news, index) =>
              <NewsCardTy2 news={news} key={index} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default NewsRelated