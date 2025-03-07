import { standings } from '@/data/standings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Standings = () => {
    return (
        <div className="animate-appearance-in-Custom">
            <div className="w-full ">
                <div className="flex  justify-between text-gray-400 text-sm p-3" >
                    <div className="w-[40%] ">الأندية</div>
                    <div className="flex  justify-end w-[60%] ">
                        <div className="w-32 phone-md:w-12 text-center">لعب</div>
                        <div className="w-12 text-center hidden phone-md:block">فاز</div>
                        <div className="w-12 text-center hidden phone-md:block">تعادل</div>
                        <div className="w-12 text-center hidden phone-md:block">خسر</div>
                        <div className="w-12 text-center">الأهداف</div>
                        <div className="w-12 text-center">الفرق</div>
                        <div className="w-12 text-center">النقاط</div>
                    </div>
                </div>
                <div className=" flex flex-col space-y-1  text-xs  phone-md:text-sm font-medium">
                    {
                        standings.rows.concat(standings.rows).map((item, index) =>
                            <Link
                                href={`/ma/team/${item.team.slug}/${item.team.id}`}
                                key={index}
                                className={` border-r-3 ${index < 4 ? 'border-blue-500' : 'border-bs-gray-dark-v2'} w-full flex  justify-between bg-bs-gray-dark-v2 hover:bg-bs-gray-dark-v4 group rounded-sm p-3`}
                            >
                                <div className=" flex items-center rtl:space-x-reverse space-x-1  w-[40%]">
                                    <div className="w-5">
                                        <div className={`w-[22px] h-[22px]  text-[12px]   text-white   flex justify-center items-center`}>
                                            {index + 1}
                                        </div>
                                    </div>
                                    <Image className='w-6' src={item.team.image} alt='/h' width={400} height={400} />
                                    <div className=" text-start text-sm group-hover:text-bs-cyan-v2">{item.team.name}</div>
                                </div>
                                <div className=" flex justify-end  w-[60%] ">
                                    <div className=" w-32 phone-md:w-12 text-center">{item.matches}</div>
                                    <div className="w-12 text-center hidden phone-md:block">{item.wins}</div>
                                    <div className="w-12 text-center hidden phone-md:block">{item.draws}</div>
                                    <div className="w-12 text-center hidden phone-md:block">{item.losses}</div>
                                    <div className="w-12 text-center ">{item.scoresFor}:{item.scoresAgainst}</div>
                                    <div className="w-12 text-center">{-item.scoresFor + item.scoresAgainst}</div>
                                    <div className="w-12 text-center ">{item.points}</div>
                                </div>
                            </Link >
                        )}
                </div>
            </div>
            <div className="px-4 py-7 text-sm font-light">
                <div className="">standing.tieBreakingRule?.text</div>
            </div>
        </div >

    )
}

export default Standings