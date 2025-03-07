import { managerApi } from '@/data/managers'
import { plyersApi } from '@/data/players'
import SvgIcons from '@/utils/svgIcons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TeamPlayers = () => {
    const manager = managerApi[0]
    return (
        <div>
            <div className="animate-appearance-in-Custom">
                <div className="font-semibold text-bs-cyan-v2 p-3">الفريق</div>
                <div className="space-y-3">

                    <div className=" space-y-1.5">
                        <div className="text-center p-1.5 text-bs-blue-v1 bg-bs-blue-v4 rounded-xl font-semibold text-sm">
                            المدرب
                        </div>
                        <Link
                            className={` p-2 flex items-center  justify-between  bg-bs-gray-dark-v2 rounded-md  group hover:bg-bs-gray-dark-v4`}
                            href={`/ar/manager/#`}>
                            <div className=" flex items-center  rtl:space-x-reverse space-x-2">
                                <div className="w-[40px]">
                                    <Image className={`w-[32px] h-[32px] bg-white rounded-md`} src={manager.image} width={500} height={500} alt={`manager:${manager.id}`} />
                                </div>
                                <div className="text-sm text-bs-light-v1 font-medium group-hover:text-bs-cyan-v2">
                                    {manager.name}
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className="space-y-3">
                        {
                            ['G', 'D', 'M', 'F'].map((position, index) =>
                                <div key={index} className=" space-y-1.5">
                                    <div className="text-center p-1.5 text-bs-blue-v1 bg-bs-blue-v4 rounded-xl font-semibold text-sm">
                                        {
                                            position == 'F' ? 'المهاجمين'
                                                : position == 'M' ? 'لاعبين الوسط'
                                                    : position == 'D' ? 'المدافعين'
                                                        : 'حراس المرمى'
                                        }
                                    </div>
                                    <div className="space-y-1">
                                        {
                                            plyersApi.concat(plyersApi).map((player, index) =>
                                                position == player.position && <Link
                                                    key={index}
                                                    className={` p-2 flex items-center  justify-between  bg-bs-gray-dark-v2 rounded-md  group hover:bg-bs-gray-dark-v4`}
                                                    href={`/ar/player/${player.id}/${player.slug}`}>
                                                    <div className=" w-[70%] flex items-center  rtl:space-x-reverse space-x-2">
                                                        <div className="w-[40px]">
                                                            <Image className={`w-[32px] h-[32px] bg-white rounded-md`} src={player.image} width={500} height={500} alt={`player:${player.id}`} />
                                                        </div>
                                                        <div className="text-sm text-bs-light-v1 font-medium group-hover:text-bs-cyan-v2">
                                                            {player.name}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-around text-sm w-[30%] max-w-[200px] rtl:space-x-reverse space-x-2">
                                                        <div className=" w-10phone-md:w-28text-center">
                                                            الجناح الأيسر
                                                        </div>
                                                        <div className="relative">
                                                            <div className="absolute inset-0 z-10 text-[10px] flex justify-center items-center text-white font-medium">{player.shirtNumber}</div>
                                                            <div className="relative z-0">
                                                                <SvgIcons iconName='shirt' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div >
        </div >
    )
}

export default TeamPlayers