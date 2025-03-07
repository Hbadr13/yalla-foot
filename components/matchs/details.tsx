import { IMatchesApiJson, ITeam, matchesApi } from '@/data/matches'
import React from 'react'
import { CircularProgressComp } from './statistics'
import { Card, CardBody, CardFooter, Chip, CircularProgress } from '@nextui-org/react'
import Image from 'next/image'
import { statisticsApi } from '@/data/statistics'

const EventInformation = () => {
    return (

        <div className="flex flex-col space-y-2 text-sm">
            <div className="text-bs-gray p-3 text-medium font-medium">معلومات اللقاء</div>
            <div className="rounded-xl p-3 bg-bs-gray-dark-v2 w-full flex">
                <div className="w-2/5 text-bs-gray">
                    البطولة
                </div>
                <div className="font-semibold">
                    بطولة ودية - أندية
                </div>
            </div>
            <div className="rounded-xl p-3 bg-bs-gray-dark-v2 w-full flex">
                <div className="w-2/5 text-bs-gray">
                    ملعب المباراة
                </div>
                <div className="font-semibold">
                    استاد أوهيو
                </div>
            </div>
            <div className="rounded-xl p-3 bg-bs-gray-dark-v2 w-full flex">
                <div className="w-2/5 text-bs-gray">
                    القناة
                </div>
                <div className="font-semibold">
                    تطبيق STC TV
                </div>
            </div>
            <div className="rounded-xl p-3 bg-bs-gray-dark-v2 w-full flex">
                <div className="w-2/5 text-bs-gray">
                    المعلق
                </div>
                <div className="font-semibold">
                    عيسى الحربين
                </div>
            </div>
            <div className="rounded-xl p-3 bg-bs-gray-dark-v2 w-full flex">
                <div className="w-2/5 text-bs-gray">
                    وقت المباراة
                </div>
                <div className="font-semibold">
                    00:30:00
                </div>
            </div>
            <div className="rounded-xl p-3 bg-bs-gray-dark-v2 w-full flex">
                <div className="w-2/5 text-bs-gray">
                    تاريخ المباراة
                </div>
                <div className="">
                    الأحد 04-08-2024
                </div>
            </div>
        </div>
    )
}
const DisplayTeamPosition = ({ value, team, color }: { value: number, team: ITeam, color: any }) => {
    return (
        <div className="relative">
            <div className="relative z-0">
                <CircularProgress
                    classNames={{
                        svg: "w-16 h-16 drop-shadow-md",
                        indicator: color,
                        track: "stroke-white/10",
                        value: "text-3xl font-semibold text-white",
                    }}
                    value={value}
                    strokeWidth={3}
                />
            </div>
            <div className="absolute  z-10 inset-y-0 inset-x-0 flex justify-center items-center">
                <Image src={team.image} width={500} height={500} alt={team.name} className='w-6 h-6' />
            </div>
        </div>
    )
}
interface IDetailsProps {
    event: IMatchesApiJson
}
const Details = ({ event }: IDetailsProps) => {
    return (
        <div className='space-y-3 animate-appearance-in-Custom'>
            <div className="bg-bs-gray-dark-v2 rounded-2xl p-2">
                <div
                    className=' space-y-2 '
                >
                    <div className="flex text-sm items-center justify-center ">
                        <div className="  w-1/5 flex   justify-center rtl:space-x-reverse space-x-2 items-center">
                            <DisplayTeamPosition value={60} team={event.homeTeam} color={"stroke-blue-500"} />
                            <div className="">
                                60 %
                            </div>
                        </div>
                        <div className=" w-3/5  ">
                            {
                                statisticsApi.statisticsSummary.map((group, _index) =>
                                    <div key={_index} className='flex justify-around items-center'>
                                        <div className="">{group.homeValue}</div>
                                        <div className="">{group.name}</div>
                                        <div className="">{group.awayValue}</div>
                                    </div>
                                )
                            }
                        </div>

                        <div className='w-1/5 flex justify-center rtl:space-x-reverse space-x-2 items-center'>
                            <div className="">
                                40 %
                            </div>
                            <DisplayTeamPosition value={40} team={event.awayTeam} color={"stroke-violet-500"} />
                        </div>
                    </div>
                </div>

            </div>
            <EventInformation />
        </div>
    )
}

export default Details