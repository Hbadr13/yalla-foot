import { chatApi, IChatMessageAPI } from '@/data/chat'
import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import MessageComp from './messageComp';
import ResponseComp from './responseComp';
import SendMessage from './sendMessage';
import DisplayTime from '@/utils/displayTime';
import Image from 'next/image';
const ChatBox = () => {
    const [openMessage, setOpenMessage] = useState<IChatMessageAPI | null>(null)
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [more, setMore] = useState(0)
    const hideScrollStyles: React.CSSProperties = {
        overflow: 'scroll',
        scrollbarWidth: 'none' as 'none', // Explicitly cast to a valid type
        msOverflowStyle: 'none',  // IE and Edge
    };
    return (
        <div className='animate-appearance-in-Custom w-full bg-bs-gray-dark-v2 rounded-3xl'>
            <div className="divide-y-1 divide-gray-700 p-10">
                {
                    chatApi.slice(0, more ? chatApi.length : 5).map((message, index) =>
                        <MessageComp key={message.id} message={message} openModal={openModal} setOpenMessage={setOpenMessage} />
                    )
                }
                <div className="flex pt-5">
                    <Button onClick={() => setMore((prv) => prv + 1)} className='w-full bg-bs-gray-dark-v5 rounded-full h-10 text-white '>
                        المزيد
                    </Button>
                </div>
            </div>


            <Modal
                onClose={() => setOpenMessage(null)}
                backdrop='opaque'
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                placement="top-center"
                scrollBehavior='inside'
                className='overflow-y-hidden bg-bs-gray-dark-v2 '
                size='2xl'
            >
                <ModalContent className='  '>
                    <ModalHeader className="flex flex-col gap-1 bg-bs-gray-dark-v2">
                        {openMessage &&
                            <div className="">

                                <div className="flex items-center rtl:space-x-reverse space-x-6">
                                    <div className="">
                                        {
                                            openMessage?.image != '' ?
                                                <Image className='w-10 h-10 rounded-full object-contain' src={openMessage.image} width={500} height={500} alt={`user:${openMessage.id}`} />
                                                : <div className='w-10 h-10 rounded-full flex justify-center items-center bg-blue-500'>{openMessage.username[0]}</div>
                                        }
                                    </div>
                                    <div className="">
                                        <div className="font-semibold">{openMessage?.username}</div>
                                        <div className="text-xs text-bs-gray ">
                                            <DisplayTime time={openMessage.time} type='ago' />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm p-3">
                                    {openMessage.message}
                                </div>
                            </div>
                        }
                    </ModalHeader>
                    <ModalBody className='p-0  overflow-hidden bg-bs-gray-dark-v3'>
                        <div className="">
                            <div className="">
                                <SendMessage />
                            </div>
                            <div
                                style={hideScrollStyles}
                                className="divide-y-1.5 overflow-scroll"
                            >
                                <div className="divide-y-1 divide-gray-700 p-10">
                                    {
                                        openMessage && openMessage.responses.map((response, Index) =>
                                            <ResponseComp key={response.id} response={response} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>






        </div>
    )
}

export default ChatBox