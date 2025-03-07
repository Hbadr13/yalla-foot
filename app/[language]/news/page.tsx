'use client'
import News from '@/components/news/news'
import ListOfTournaments from '@/components/tournaments/listOfTournaments'
import React from 'react'

const Index = () => {

    return (
        <div className="">
            <div className="  w-full flex justify-around gap-6">
                <div className=" flex flex-col w-full  medium-wide:w-[70%]  medium-wide:max-w-[822px] ">
                    <News />
                </div>
                <div className="  w-[30%] max-w-[362px] hidden medium-wide:block ">
                    <ListOfTournaments type='tournm' />
                </div>
            </div>
        </div>
    )
}

export default Index
