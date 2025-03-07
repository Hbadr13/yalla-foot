import { plyersApi } from '@/data/players'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Assists from './assists'
import Goals from './goals'

const Scorers = () => {

    const [selected, setSelected] = useState('goals')
    return (
        <div className='animate-appearance-in-Custom'>
            <div className="flex justify-center w-full">
                <div className=" bg-bs-gray-dark-v2 rounded-3xl ">
                    <Button
                        className={`rounded-3xl text-md w-[120px] ${selected == 'goals' ? 'bg-bs-cyan-v2   text-bs-light-v1' : 'text-bs-gray bg-bs-gray-dark-v2 hover:text-white duration-200'}`}
                        onClick={() => setSelected('goals')}
                    >
                        الهدافون
                    </Button>
                    <Button
                        className={`rounded-3xl text-md w-[120px] ${selected == 'assist' ? 'bg-bs-cyan-v2   text-bs-light-v1' : 'text-bs-gray bg-bs-gray-dark-v2 hover:text-white duration-200'}`}
                        onClick={() => setSelected('assist')}
                    >
                        الصناع
                    </Button>
                </div>
            </div>
            {
                selected == 'assist' ?
                    <Assists />
                    :
                    <Goals />
            }
        </div >
    )
}

export default Scorers

