import { IChatMessageAPI } from '@/data/chat'
import SvgIcons from '@/utils/svgIcons'
import Image from 'next/image'
import React, { useState } from 'react'
import DisplayTime from '@/utils/displayTime';


interface IMessageCompProps {
    message: IChatMessageAPI
    openModal: () => void
    setOpenMessage: (openMessage: IChatMessageAPI | null) => void
}

const MessageComp = ({ message, openModal, setOpenMessage }: IMessageCompProps) => {


    return (
        <div >
            <div className="flex flex-col py-4 space-y-5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center rtl:space-x-reverse space-x-6">
                        <div className="">
                            {
                                message.image != '' ?
                                    <Image className='w-10 h-10 rounded-full object-contain' src={message.image} width={500} height={500} alt={`user:${message.id}`} />
                                    : <div className='w-10 h-10 rounded-full flex justify-center items-center bg-blue-500'>{message.username[0]}</div>
                            }
                        </div>
                        <div className="">
                            <div className="font-semibold">{message.username}</div>
                            <div className="text-xs text-bs-gray ">
                                <DisplayTime time={message.time} type='ago' />
                            </div>
                        </div>
                    </div>
                    <button className="">
                        <SvgIcons iconName='threePoints' />
                    </button>
                </div>
                <div className="text-sm">
                    {message.message}
                </div>
                <div className="flex justify-between items-center">

                    <div className="flex items-center space-x-10 rtl:space-x-reverse">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <div className="text-xs font-semibold">{message.like}</div>
                            <button>
                                <SvgIcons iconName='like' />
                            </button>
                        </div>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse ">
                            <div className="text-xs font-semibold">{message.unlike}</div>
                            <button className='rotate-180'>
                                <SvgIcons iconName='like' />
                            </button>
                        </div>
                    </div>
                    <button onClick={() => { openModal(), setOpenMessage (message)}} className="font-bold text-bs-cyan-v2">
                        {
                            message.responses.length ?
                                `شاهد ${message.responses.length} تعليق`
                                : 'تعليق'
                        }
                    </button>
                </div>
            </div>







        </div>
    )
}

export default MessageComp