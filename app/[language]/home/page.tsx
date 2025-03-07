'use client'
import DownloadApp from '@/components/layout/downloadApp'
import Match from '@/components/matchs/match'
import Matches from '@/components/matchs/matches'
import News from '@/components/news/news'
import { IMatchesApiJson } from '@/data/matches'
import React, { useState } from 'react'

const Index = () => {
    const [selectMatch, setSelectMatch] = useState<IMatchesApiJson | null>(null)
    return (
        <div className=" w-full flex justify-around rtl:space-x-reverse space-x-2 ">
            <div className=" w-full  medium-wide:w-[40%]  medium-wide:max-w-[492px] ">
                <Matches setSelectMatch={setSelectMatch} type='in' />
            </div>
            <div className=" w-[60%] max-w-[692px] hidden medium-wide:block ">
                {
                    selectMatch
                        ?
                        <div className="">
                            <div className="font-semibold text-bs-cyan-v2 p-3">تفاصيل المباراة</div>
                            <Match type='in' selectMatch={selectMatch} />
                        </div>
                        :
                        <News />
                }
                <div className="pt-36 hidden phone-md:block">
                    <DownloadApp />
                </div>
            </div>
        </div>
    )
}

export default Index