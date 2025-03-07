'use client'
import ChatBox from '@/components/chat/chatBox'
import News from '@/components/news/news'
import NewsCardTy2 from '@/components/news/newsCardTy2'
import NewsCardTy4 from '@/components/news/newsCardTy4'
import { NewsApi } from '@/data/news'
import { usePathname } from 'next/navigation'
import React from 'react'

const Index = () => {
    const pathName = usePathname()
    const news = NewsApi.find((item) => item.id == Number(pathName.split('/')[3]))
    if (!news)
        return <div>Error Data 50X</div>
    return (
        <div className=" w-full flex justify-around rtl:space-x-reverse space-x-0 phone-md:space-x-2 extra-wide:space-x-5">
            <div className=" w-full  phone-md:w-[60%]  phone-md:max-w-[692px] flex flex-col  ">
                <NewsCardTy4 news={news} />
                <ChatBox />
            </div>
            <div className="  hidden phone-md:block w-0  phone-md:w-[40%]  phone-md:max-w-[492px] ">
                <div className="font-semibold text-bs-cyan-v2 text-xl py-2">الأخبار المتعلقة</div>
                <div className="w-full flex flex-col h-64 gap-3">
                    {
                        NewsApi.map((news, index) =>
                            <NewsCardTy2 key={index} news={news} />
                        )
                    }
                    {
                        NewsApi.map((news, index) =>
                            <NewsCardTy2 key={index} news={news} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Index