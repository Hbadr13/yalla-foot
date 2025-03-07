import { plyersApi } from '@/data/players'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Assists = () => {
    return (
        <div className="">
            <div className='animate-appearance-in'>
                <div className="text-sm text-bs-gray flex justify-between items-center p-3">
                    <div className="">اللاعبون</div>
                    <div className="w-28 text-center">
                        تمريرات حاسمة
                    </div>
                </div>
                <div className=" space-y-1">
                    {
                        plyersApi.concat(plyersApi).concat(plyersApi).map((player, index) =>
                            <Link
                                key={index}
                                className={` p-2 flex items-center  justify-between  bg-bs-gray-dark-v2 rounded-sm  group hover:bg-bs-gray-dark-v4`}
                                href={`/ar/player/${player.id}/${player.slug}`}>
                                <div className="flex items-center justify-between rtl:space-x-reverse space-x-2">
                                    <div className="text-xs w-5 text-center font-semibold text-white">
                                        {index}
                                    </div>
                                    <div className="">
                                        <Image className={`w-8 h-8`} src={player.image} width={500} height={500} alt={`player:${player.id}`} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-xs font-medium group-hover:text-bs-cyan-v2">
                                            {player.name}
                                        </div>
                                        <div className="text-xs text-bs-gray">
                                            {player.team.name}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-28 text-center text-sm">
                                    {player.assists}
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Assists