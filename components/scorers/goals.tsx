import { plyersApi } from '@/data/players'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Goals = () => {
    return (
        <div>
            <div className="animate-appearance-in-Custom">
                <div>
                    <div className=" text-xs phone-md:text-sm text-bs-gray flex justify-between items-center p-3">
                        <div className="w-[70%]">اللاعبون</div>
                        <div className="flex items-center justify-around w-[30%] max-w-[200px] rtl:space-x-reverse space-x-2">
                            <div className="">
                                الأهداف
                            </div>
                            <div className="">
                                ركلات الترجيح
                            </div>
                        </div>
                    </div>
                    <div className=" space-y-1">
                        {
                            plyersApi.concat(plyersApi).concat(plyersApi).map((player, index) =>
                                <Link
                                    key={index}
                                    className={` p-2 flex items-center  justify-between  bg-bs-gray-dark-v2 rounded-sm  group hover:bg-bs-gray-dark-v4`}
                                    href={`/ar/player/${player.id}/${player.slug}`}>
                                    <div className=" w-[70%] flex items-center  rtl:space-x-reverse space-x-2">
                                        <div className="text-xs w-5 text-center font-semibold text-white">
                                            {index}
                                        </div>
                                        <div className="w-[40px]">
                                            <Image className={`w-[32px] h-[32px]`} src={player.image} width={500} height={500} alt={`player:${player.id}`} />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-sm text-bs-light-v1 font-medium group-hover:text-bs-cyan-v2">
                                                {player.name}
                                            </div>
                                            <div className="text-xs text-bs-gray">
                                                {player.team.name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-around text-sm w-[30%] max-w-[200px] rtl:space-x-reverse space-x-2">
                                        <div className=" w-10phone-md:w-28text-center">
                                            {player.goals}
                                        </div>
                                        <div className="w-10phone-md:w-28text-center">
                                            {player.penaltys}
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals