import { IMatchesApiJson } from '@/data/matches'
import DisplayTime from '@/utils/displayTime'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'

interface IMatchCompT2Props {
    match: IMatchesApiJson
    type: string
    matchNavs: Array<{ id: number, name: string, slug: string, component: ReactNode }>
    selectNav: { id: number, name: string, slug: string, component: ReactNode }
    setSelectNav: (selectNav: { id: number, name: string, slug: string, component: ReactNode }) => void

}


const MatchCompT2 = ({ matchNavs, match, type, selectNav, setSelectNav }: IMatchCompT2Props) => {
    return (
        <div className="relative">
            <div
                className={` relative z-0  flex flex-colflex-row items-center w-full h-[300px] bg-bs-gray-dark-v2 text-bs-light-v2 rounded-xl p-3 rtl:space-x-reverse space-x-1 font-medium text-sm ${type == 'out' ? `bg-[url(https://www.ysscores.com/images/download-app-bg.png)]` : `bg-[url(https://www.ysscores.com/images/ajax-match-bg.png)]`} bg-cover bg-center  bg-opacity-5`}
            >
                <div className="w-[50%] min-w-[90px]   flex justify-end  pl-2 phone-md:pl-10">
                    <Link href={`/ar/team/${match.homeTeam.id}/${match.homeTeam.slug}`} className="flex flex-col  items-center space-y-2">
                        <Image className='h-[60px] w-[60px] phone-md:w-[82px]  phone-md:h-[82px]   object-contain truncate' src={match.homeTeam.image} width={500} height={500} alt={`flag:${match.homeTeam.name}`} />
                        <div className=" text-center   whitespace-nowrap  ">{match.homeTeam.name}</div>
                    </Link>
                </div>
                <div className=" w-[100px]  text-center">
                    <DisplayTime time={match.time} type='normal' format='hh:mm:ss' />
                </div>
                <div className=" min-w-[90px]  w-[50%] flex justify-start pr-2 phone-md:pr-10">
                    <Link href={`/ar/team/${match.awayTeam.id}/${match.awayTeam.slug}`} className="flex flex-col  items-center space-y-2">
                        <Image className=' h-[60px] w-[60px] phone-md:w-[82px]  phone-md:h-[82px]  object-contain ' src={match.awayTeam.image} width={500} height={500} alt={`flag:${match.awayTeam.name}`} />
                        <div className="text-center  whitespace-nowrap  ">{match.awayTeam.name}</div>
                    </Link>
                </div>
            </div>
            <div className="absolute w-full h-9 bottom-0  flex  justify-center rtl:space-x-reverse space-x-3  phone-md:space-x-8 font-medium text-sm">
                {
                    matchNavs.map((nav, index) =>
                        <Link
                            key={index}
                            className=' px-1 flex flex-col justify-between items-center  whitespace-nowrap'
                            onClick={() => setSelectNav(nav)}
                            href={'#'}>
                            {nav.name}
                            <div className={` h-1   ${nav.id == selectNav.id ? 'animate-drawBorder  bg-bs-cyan-v2' : ''}`}>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default MatchCompT2