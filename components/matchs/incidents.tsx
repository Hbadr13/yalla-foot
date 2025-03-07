import SvgIcons from '@/utils/svgIcons'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React, { useState } from 'react'
import Assists from '../scorers/assists'
import Goals from '../scorers/goals'
import Image from 'next/image'
import { incidentsApi } from '@/data/incidents'

const DisplayIncidentsTime = ({ incident, color }: { incident: any, color: 'green' | 'red' }) => {
    return (
        <div className={` border-1 ${color == 'green' ? 'border-bs-green-v2 bg-bs-green-v1 outline-bs-green-v2' : 'border-bs-red-v2 bg-bs-red-v1 outline-bs-red-v2'} outline outline-1 outline-offset-2 text-white  rounded-full flex justify-center items-center w-[40px] h-[40px] relative `}>
            <div className="relative z-10  ">
                {incident.time >= 0 ? `${incident.time}'` : '-'}
            </div>
            <div className="text-[8px] absolute z-20 top-0 right-0">
                {incident.addedTime ? `${incident.addedTime}+` : ""}
            </div>
        </div>
    )

}


const Incidents = () => {
    const [selected, setSelected] = useState('summary')

    return (
        <div className='animate-appearance-in-Custom'>
            <Link href={'/ar/video'} className="">
                <div className="p-2 text-bs-gray">فيديو</div>
                <div className="py-5 w-[200px] space-y-2 flex flex-col justify-center items-center bg-bs-gray-dark-v2 rounded-xl">
                    <SvgIcons iconName='summary' color='#5a83ff' />
                    <div className="text-sm">ملخص المباراة</div>
                </div>
            </Link>
            <div className="p-2 text-bs-gray">الأحداث</div>
            <div className="flex justify-center w-full font-bold">
                <div className=" bg-bs-gray-dark-v2 rounded-3xl  flex">
                    <Button
                        className={`rounded-3xl text-md  w-[140px]  truncate ${selected == 'summary' ? 'bg-bs-cyan-v2   text-bs-gray-dark-v2' : 'text-bs-gray bg-bs-gray-dark-v2 hover:text-white duration-200'}`}
                        onClick={() => {
                            setSelected('')
                            setTimeout(() => {
                                setSelected('summary')
                            }, 100);
                        }}
                    >
                        الأبرز
                    </Button>
                    <Button
                        className={`rounded-3xl text-md w-[140px] truncate ${selected == 'all' ? 'bg-bs-cyan-v2   text-bs-gray-dark-v2' : 'text-bs-gray bg-bs-gray-dark-v2 hover:text-white duration-200'}`}
                        onClick={() => {
                            setSelected('')
                            setTimeout(() => {

                                setSelected('all')
                            }, 100);
                        }}
                    >
                        الكل
                    </Button>
                </div>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden text-white">
                {
                    selected != '' ?
                        <div className="bg-bs-gray-dark-v6 rounded-xl divide-y-[1.4px] divide-bs-gray-dark-v2">
                            {
                                incidentsApi.map((incident, index) =>
                                    <div
                                        className=''
                                        key={index}
                                    >
                                        {
                                            incident.incidentType == 'period' &&
                                            <div className=" w-full flex flex-col items-center space-y-1  bg-bs-gray-dark-v2 p-4">
                                                <div className="">
                                                    {

                                                        incident.text == 'HT' ? <div className="text-sm">
                                                            {incident.homeScore} - {incident.awayScore}
                                                        </div> :
                                                            <SvgIcons iconName='whistle' />
                                                    }
                                                </div>
                                                <div className="text-xs">
                                                    {incident.name}
                                                </div>
                                            </div>
                                        }
                                        {
                                            incident.incidentType == 'card' && selected == 'all' &&
                                            <Link href={`/ma/player/${incident.player?.slug}/${incident.player?.id}`}

                                                className={`rounded-xl w-full  p-4 text-sm flex items-center justify-center ${incident.isHome ? 'flex-row' : ' flex-row-reverse'} `} >
                                                <div className="w-[45%]" />
                                                <div className="flex items-center justify-center  w-[100px] ">
                                                    <DisplayIncidentsTime incident={incident} color='green' />
                                                </div>
                                                <div className={`flex items-center  ${incident.isHome ? 'flex-row rtl:space-x-reverse space-x-6' : ' flex-row-reverse space-x-6'} w-[45%]`}>
                                                    <SvgIcons iconName={incident.incidentClass == 'red' ? 'redCard' : 'yallowCard'} />
                                                    <div className='flex flex-col items-start'>
                                                        {incident.player?.name}
                                                    </div>
                                                </div>
                                            </Link>
                                        }
                                        {
                                            incident.incidentType == 'substitution' && selected == 'all' &&
                                            <button className={`rounded-xl w-full  p-4 text-sm flex items-center justify-center ${incident.isHome ? 'flex-row' : ' flex-row-reverse'} `} >
                                                <div className="w-[45%]" />
                                                <div className="flex items-center justify-center  w-[100px] ">
                                                    <DisplayIncidentsTime incident={incident} color='green' />
                                                </div>
                                                <div className={`flex items-center  ${incident.isHome ? 'flex-row rtl:space-x-reverse space-x-6' : ' flex-row-reverse space-x-6'} w-[45%]`}>
                                                    <SvgIcons iconName='substitution' />
                                                    <div className='flex flex-col items-start'>
                                                        <div className="">
                                                            {incident.playerIn?.name}
                                                        </div>
                                                        <div className={`text-bs-gray text-xs  ${incident.isHome ? 'self-start' : 'self-end'}`}>
                                                            {
                                                                incident.playerOut?.name
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        }
                                        {
                                            incident.incidentType == 'goal' &&
                                            <button className={`rounded-xl w-full  p-4 text-sm flex items-center justify-center ${incident.isHome ? 'flex-row' : ' flex-row-reverse'} `} >
                                                <div className={`w-[45%] flex items-center ${!incident.isHome ? 'justify-normal' : 'justify-end'}`}>
                                                    <Link
                                                        className='flex items-center rtl:space-x-reverse space-x-2 p-1 rounded-2xl bg-bs-blue-v1 hover:bg-bs-cyan-v2 duration-200 '
                                                        href={'/ar/video'}>
                                                        <div className="">
                                                            شاهد الفيديو
                                                        </div>
                                                        <div className="">
                                                            <SvgIcons iconName='playVideo' width='24' height='24' />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="flex items-center justify-center  w-[100px] ">
                                                    <DisplayIncidentsTime incident={incident} color={incident.incidentClass == "ownGoal" ? 'green' : 'red'} />
                                                </div>
                                                <div className={`flex items-center  ${incident.isHome ? 'flex-row rtl:space-x-reverse space-x-6' : ' flex-row-reverse space-x-6'} w-[45%]`}>
                                                    <SvgIcons iconName={incident.incidentClass == "ownGoal" ? 'disallowedGoal' : 'goals'} />
                                                    <div className='flex flex-col '>
                                                        <div className="">
                                                            {incident.player?.name}
                                                        </div>
                                                        <div className={`text-bs-gray text-xs  ${incident.isHome ? 'self-start' : 'self-end'}`}>
                                                            {
                                                                incident.incidentClass == "ownGoal" ? 'هدف في مرماه' : incident.assist1?.name
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        }
                                    </div>
                                )
                            }
                        </div>
                        :
                        <div className='h-[1150px] w-full' />
                }
            </div>
        </div>
    )
}

export default Incidents
