import { IplyersApiProps } from '@/data/players'
import SvgIcons from '@/utils/svgIcons'
import Image from 'next/image'
import React from 'react'

interface PplayerOverviewProps {
    player: IplyersApiProps
}
const PlayerOverview = ({ player }: PplayerOverviewProps) => {
    return (
        <div>
            <section className="relative bg-bs-gray-dark-v2 w-full  rounded-2xl  p-4 phone-md:p-16 overflow-hidden ">
                <button className="absolute  top-6 left-6  z-0 hover:opacity-70 duration-200">
                    <SvgIcons iconName='partage' />
                </button>
                <div className="absolute inset-x-0 bottom-0 flex justify-end  z-0">
                    <Image
                        className=' object-contain h-[240px] w-auto'
                        src={`https://imgs.ysscores.com/player/cover/5801720356896.png`}
                        width={1000}
                        height={1000}
                        alt='playerBackg' />
                </div>
                <div className="relative z-10  space-y-8">
                    <div className="">
                        <div className="flex items-center rtl:space-x-reverse space-x-5">
                            <Image className='w-16 h-1/6 object-contain rounded-xl bg-white ' src={player.image} width={500} height={500} alt={''} />
                            <div className="relative">
                                <Image className=' relative z-0 w-8 h-8 object-contain ' src={player.team.image} width={500} height={500} alt={''} />
                                <div className="absolute z-10 w-5 h-5 flex justify-center items-center bg-bs-blue rounded-full text-xs font-semibold text-white  -top-2 -right-2">{10}</div>
                            </div>
                            <div className="relative">
                                <Image className=' relative z-0 w-8 h-8 object-contain ' src={'https://www.ysscores.com/images/flags/ar.png'} width={500} height={500} alt={''} />
                                <div className="absolute z-10 w-5 h-5 flex justify-center items-center bg-bs-blue rounded-full text-xs font-semibold text-white  -top-2 -right-2">{10}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 phone-md:space-y-0 phone-md:flex-row">
                        <div className=" w-full phone-md:w-[20%] space-y-2">
                            <div className="text-2xl font-bold">{player.name}</div>
                            <p className='text-sm'>لاعب كرة قدم من دولة الأرجنتين يلعب لنادي إنتر ميامي</p>
                        </div>
                        <div className="w3/5 flex  space-x-2 phone-md:space-x-0 rtl:space-x-reverse  rtl:divide-x-reverse  divide-x-0 phone-md:divide-x-[1px] divide-gray-700">
                            {
                                [
                                    {
                                        id: 0,
                                        value: player.foot ? 'الجناح الأيمن' : 'الجناح الأيمن',
                                        name: 'المركز',
                                    },
                                    {
                                        id: 1,
                                        value: `${player.age} عام`,
                                        name: 'العمر',
                                    },
                                    {
                                        id: 2,
                                        value: `${player.weight} كغم`,
                                        name: 'الوزن',
                                    },
                                    {
                                        id: 3,
                                        value: `${player.height} سم`,
                                        name: 'الطول',
                                    },
                                    {
                                        id: 4,
                                        value: player.foot ? 'اليسرى' : 'اليسرى',
                                        name: 'القدم',
                                    },

                                ].map((item, index) =>
                                    <div key={index} className=" w-[74px] phone-md:w-[100px]  p-0 phone-md:p-1 flex flex-col justify-center items-center space-y-1 rounded-xl phone-md:rounded-none  border-1 phone-md:border-0 border-gray-500   bg-[rgba(31,33,46,0.5)] phone-md:bg-transparent">
                                        <div className="font-semibold text-xs phone-md:text-medium">
                                            {item.value.split(' ').map((item, index) => <div key={index}>{item}</div>)}
                                        </div>
                                        <div className="text-xs text-bs-gray font-semibold">
                                            {item.name}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default PlayerOverview