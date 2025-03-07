import { IMatchesApiJson, matchesApi } from '@/data/matches'
import Link from 'next/link'
import React from 'react'
import MatchCompT1 from './matchCompT1'
import Image from 'next/image'
import SvgIcons from '@/utils/svgIcons'
import { Calendar } from '@nextui-org/react'
import CustomCalendar from '@/utils/CustomCalendar'

interface IMatchesProps {
    setSelectMatch: (selectMatch: IMatchesApiJson | null) => void
    type: 'in' | 'out'
}

const Matches = ({ setSelectMatch, type }: IMatchesProps) => {
    const tabs = [
        {
            id: 0,
            name: 'الهدافون ',
            slug: '-static'
        },
        {
            id: 1,
            name: ' الترتيب',
            slug: '-rank'
        },
        {
            id: 2,
            name: ' الأخبار',
            slug: ''
        },
        {
            id: 3,
            name: '...',
            slug: ''
        }
    ]
    const _matchesApi = matchesApi.concat(matchesApi)
    return (
        <div>
            <div className="p-3 flex items-center justify-between">
                <div className="font-semibold text-bs-cyan-v2">المباريات</div>
                <CustomCalendar />
            </div>
            <div className="space-y-1.5">
                {
                    _matchesApi.map((match, index) =>
                        <div key={index} className="space-y-0.5">
                            {
                                _matchesApi[index].tournament.name != _matchesApi[index - 1]?.tournament.name &&
                                <div className={`${index != 0 ? 'pt-1' : ''}`}>

                                    < div className="flex items-center justify-between bg-bs-gray-dark-v2 rounded-xl p-2 text-xs ">
                                        <Link href={`/ar/tournament/${match.tournament.id}/${match.tournament.slug}`} className="group flex items-center rtl:space-x-reverse space-x-1">
                                            <div className="group-hover:text-bs-cyan-v2">
                                                {match.tournament.name}
                                            </div>
                                            <Image src={match.tournament.image} width={500} height={500} className='w-5 h-5' alt={`cham:${match.tournament.name}`} />
                                        </Link>
                                        <div className=" hidden phone-md:flex rtl:space-x-reverse space-x-4  items-center">
                                            {
                                                tabs.map((tab, index) =>
                                                    tab.name == '...' ?
                                                        <button
                                                            key={index}>

                                                            <SvgIcons iconName='threePoints' />
                                                        </button>
                                                        :
                                                        <Link
                                                            key={index}
                                                            className='hover:text-bs-cyan-v2'
                                                            href={`/ar/tournament/${match.tournament.id}/${match.tournament.slug}/${tab.slug}`}>
                                                            {tab.name}
                                                        </Link>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                            <MatchCompT1 setSelectMatch={setSelectMatch} type={type} match={match} />
                        </div >
                    )
                }
            </div >
        </div >
    )
}

export default Matches