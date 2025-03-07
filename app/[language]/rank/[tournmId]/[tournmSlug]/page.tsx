'use client'
import Assists from '@/components/scorers/assists'
import Goals from '@/components/scorers/goals'
import Standings from '@/components/tournaments/standings'
import { tournamentsApi } from '@/data/tournaments'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const [selectNav, setSelectNav] = useState('teams')
    const params = useParams<{ language: string, tournmId: string, tournmSlug: string }>()
    const tournament = tournamentsApi.find((mtch) => String(mtch.id) == params.tournmId)
    if (!tournament)
        return
    return (
        <div className='space-y-7'>
            <div className="w-full flex flex-col space-y-4 phone-md:space-y-0 phone-md:flex-row items-center phone-md:items-start bg-bs-gray-dark-v2 pt-5 pr-5 rounded-2xl rtl:space-x-reverse space-x-2 ">
                <div className="w-[100px] flex justify-center">
                    <Image
                        className=' w-16 h-16 phone-md:w-20  phone-md:h-20'
                        src={tournament.image} alt={`${tournament.name}`} width={1000} height={1000}
                    />
                </div>
                <div className="h-full space-y-2  phone-md:space-y-8 ">
                    <div className="text-xl phone-md:text-2xl font-bold text-bs-blue-v1">
                        {tournament.name}
                    </div>
                    <div className="flex rtl:space-x-reverse space-x-10 w-full  justify-center phone-md:justify-start">
                        <button className='' onClick={() => setSelectNav('teams')}     >
                            <div className="py-4">
                                الفرق
                            </div>
                            <div className={` h-1   ${'teams' == selectNav ? 'animate-drawBorder  bg-bs-cyan-v2' : ''}`} />
                        </button>
                        <button className='' onClick={() => setSelectNav('players')}>
                            <div className="py-4">
                                اللاعبون
                            </div>
                            <div className={` h-1   ${'players' == selectNav ? 'animate-drawBorder  bg-bs-cyan-v2' : ''}`} />
                        </button>
                    </div>
                </div>
            </div >
            {
                'teams' == selectNav ?
                    <Standings />
                    :
                    <Goals />
            }
        </div >
    )
}

export default page