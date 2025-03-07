import { IMatchesApiJson } from '@/data/matches'
import DisplayTime from '@/utils/displayTime'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IMatchCompT1Props {
    match: IMatchesApiJson
    type: string
    setSelectMatch: (selectMatch: IMatchesApiJson | null) => void
}

const MatchCompT1 = ({ match, type, setSelectMatch }: IMatchCompT1Props) => {
    const handleClick = (e: any) => {
        if (type == 'in') {

            e.preventDefault()
            setSelectMatch(match)
        }
    }
    return (
        <Link
            onClick={handleClick}
            href={`/ar/match/${match.id}/${match.slug}`}
            className='flex items-center  w-full bg-bs-gray-dark-v2 text-bs-light-v2 rounded-xl p-3 rtl:space-x-reverse space-x-1 font-medium text-sm hover:bg-bs-gray-dark-v4  hover:text-bs-cyan-v2'>
            <div className="w-[50%] flex items-center justify-end rtl:space-x-reverse space-x-1">
                <div className="text-end">{match.homeTeam.name}</div>
                <Image className='w-7 h-7' src={match.homeTeam.image} width={500} height={500} alt={`flag:${match.homeTeam.name}`} />
            </div>
            <div className=" w-[100px]  text-center">
                <DisplayTime time={match.time} type='normal' format='hh:mm' />
            </div>
            <div className="w-[50%] flex items-center justify-start rtl:space-x-reverse space-x-1">
                <Image className='w-7 h-7' src={match.awayTeam.image} width={500} height={500} alt={`flag:${match.awayTeam.name}`} />
                <div className="text-start">{match.awayTeam.name}</div>
            </div>
        </Link>
    )
}

export default MatchCompT1