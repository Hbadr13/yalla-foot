'use client'
import Matches from '@/components/matchs/matches'
import { IMatchesApiJson } from '@/data/matches'
import React, { useState } from 'react'

const Index = () => {
  const [selectMatch, setSelectMatch] = useState<IMatchesApiJson | null>(null)
  return (
    <div className='flex justify-center'>
      <div className=" w-full  phone-md:w-[70%]  medium-wide:max-w-[792px] ">
        <Matches setSelectMatch={setSelectMatch} type='out' />
      </div>
    </div>
  )
}

export default Index