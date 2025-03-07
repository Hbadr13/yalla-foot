import { IResponse } from '@/data/chat'
import SvgIcons from '@/utils/svgIcons'
import Image from 'next/image'
import React, { useState } from 'react'
import DisplayTime from '@/utils/displayTime';


interface RresponseCompProps {
    response: IResponse
}

const ResponseComp = ({ response }: RresponseCompProps) => {


    return (
        <div >
            <div className="flex flex-col py-4 space-y-5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center rtl:space-x-reverse space-x-6">
                        <div className="">
                            {
                                response.image != '' ?
                                    <Image className='w-10 h-10 rounded-full object-contain' src={response.image} width={500} height={500} alt={`user:${response.id}`} />
                                    : <div className='w-10 h-10 rounded-full flex justify-center items-center bg-blue-500'>{response.username[0]}</div>
                            }
                        </div>
                        <div className="">
                            <div className="font-semibold">{response.username}</div>
                            <div className="text-xs text-bs-gray ">
                                <DisplayTime time={response.time} type='ago' />
                            </div>
                        </div>
                    </div>
                    <button className="">
                        <SvgIcons iconName='threePoints' />
                    </button>
                </div>
                <div className="text-sm">
                    {response.message}
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-10 rtl:space-x-reverse">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <div className="text-xs font-semibold">{response.like}</div>
                            <button>
                                <SvgIcons iconName='like' />
                            </button>
                        </div>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse ">
                            <div className="text-xs font-semibold">{response.unlike}</div>
                            <button className='rotate-180'>
                                <SvgIcons iconName='like' />
                            </button>
                        </div>
                    </div>
                    {/* <button onClick={openModal} className="font-bold text-bs-cyan-v2">
                        {
                            response.responses.length ?
                                `شاهد ${response.responses.length} تعليق`
                                : 'تعليق'
                        }
                    </button> */}
                </div>
            </div>







        </div>
    )
}

export default ResponseComp