import { IplyersApiProps } from '@/data/players'
import { tournamentsApi } from '@/data/tournaments'
import SvgIcons from '@/utils/svgIcons'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'

interface PplayerStatisticsProps {
    player: IplyersApiProps
}
const PlayerStatistics = ({ player }: PplayerStatisticsProps) => {
    const [currentTournament, setCurrentTournament] = useState<number>(tournamentsApi[0].id)
    return (
        <div>
            <div className="text-bs-gray py-3 text-lg font-semibold">
                الإحصائيات
            </div>
            <section className="relative  space-y-8 bg-bs-gray-dark-v6  w-full  rounded-2xl  p-4 phone-md:p-16 overflow-hidden ">
                <div className="flex  flex-wrap rtl:space-x-reverse  gap-2">
                    {
                        tournamentsApi.slice(0, 4).map((tourn, index) =>
                            <Button key={index} onClick={() => setCurrentTournament(tourn.id)} className={`${currentTournament == tourn.id ? 'bg-bs-gray-dark-v1 text-white' : 'bg-bs-gray-dark-v2 text-bs-light-v2'} rounded-2xl p-2 rtl:space-x-reverse space-x-1  `}>
                                <div className="">
                                    {tourn.name}
                                </div>
                                <Image src={tourn.image} width={400} height={400} alt={tourn.name} className='w-6 h-6' />
                            </Button>
                        )
                    }
                </div>

                <div className="grid  gap-2 grid-cols-2 phone-md:grid-cols-3  medium-wide:grid-cols-6">
                    {
                        [
                            {
                                id: 0,
                                value: player.goals,
                                name: 'عدد الاهداف',
                                iconName: 'goals'
                            },
                            {
                                id: 1,
                                value: player.ownGoals,
                                name: 'هدف في مرماه',
                                iconName: 'ownGoals'
                            },
                            {
                                id: 2,
                                value: player.disallowedGoal,
                                name: 'هدف ملغي',
                                iconName: 'disallowedGoal'
                            },
                            {
                                id: 3,
                                value: player.yallowCard,
                                name: 'بطاقة صفراء',
                                iconName: 'yallowCard'
                            },
                            {
                                id: 4,
                                value: player.redCard,
                                name: 'بطاقة حمراء',
                                iconName: 'redCard'
                            },
                            {
                                id: 5,
                                value: player.assists,
                                name: 'تمريرات حاسمة',
                                iconName: 'assist'
                            },

                        ].map((item, index) =>
                            <div key={index} className="flex flex-col justify-center items-center space-y-1 ">
                                <div className="font-semibold flex items-center rtl:space-x-reverse space-x-1 ">
                                    <SvgIcons iconName={item.iconName} />
                                    <div className="">
                                        {item.value}
                                    </div>
                                </div>
                                <div className="text-xs font-semibold">
                                    {item.name}
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="flex font-semibold rtl:space-x-reverse space-x-6  text-xs">
                    <div className="space-y-5">
                        <p className='text-medium'>
                            0
                        </p>
                        <p>
                            ضربة جزاء
                        </p>
                    </div>
                    <div className="space-y-5">
                        <p className='text-medium'>
                            2
                        </p>
                        <p>
                            ضربة جزاء ضائعة
                        </p>
                    </div>
                    <div className="space-y-7">
                        <div className="flex items-center rtl:space-x-reverse space-x-3">
                            <div className="w-16 h-1 bg-bs-gray-dark-v4"></div>
                            <div className="">0</div>
                            <div className="">ضربة جزاء ناجحة </div>
                        </div>
                        <div className="flex items-center rtl:space-x-reverse space-x-3">
                            <div className="w-16 h-1 bg-bs-gray-dark-v4"></div>
                            <div className="">0</div>
                            <div className="">ضربة جزاء ضائعة </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default PlayerStatistics