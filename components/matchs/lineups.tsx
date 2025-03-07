import { IMatchesApiJson } from '@/data/matches'
import { plyersApi } from '@/data/players'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface ILineupsProps {
    event: IMatchesApiJson
}
const Lineups = ({ event }: ILineupsProps) => {

    const [selected, setSelected] = useState('home')
    return (
        <div className='animate-appearance-in-Custom space-y-6'>
            <div className="flex justify-center w-full font-bold">
                <div className=" bg-bs-gray-dark-v2 rounded-3xl  flex">
                    <Button
                        className={`rounded-3xl text-md  w-[140px]  truncate ${selected == 'home' ? 'bg-bs-cyan-v2   text-bs-gray-dark-v2' : 'text-bs-gray bg-bs-gray-dark-v2 hover:text-white duration-200'}`}
                        onClick={() => {
                            setSelected('')
                            setTimeout(() => {
                                setSelected('home')
                            }, 1);
                        }}
                    >
                        {event.homeTeam.name}
                    </Button>
                    <Button
                        className={`rounded-3xl text-md w-[140px] truncate ${selected == 'away' ? 'bg-bs-cyan-v2   text-bs-gray-dark-v2' : 'text-bs-gray bg-bs-gray-dark-v2 hover:text-white duration-200'}`}
                        onClick={() => {
                            setSelected('')
                            setTimeout(() => {

                                setSelected('away')
                            }, 1);
                        }}
                    >
                        {event.awayTeam.name}

                    </Button>
                </div>
            </div>
            <div className="">
                {
                    selected != '' ? <div className={`animate-appearance-in-Custom`}>
                        <Image width={4000} height={4000} src={`https://www.ysscores.com/images/lineup-bg.png`} alt='lineMap' />
                    </div> : <div className='h-[1150px] w-full' />
                }
            </div>
        </div >
    )
}

export default Lineups

