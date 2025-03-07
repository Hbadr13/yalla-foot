'use client'

import ListOfTournaments from '@/components/tournaments/listOfTournaments'
import SvgIcons from '@/utils/svgIcons'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [query, setQuery] = useState('')
  const [clickInInput, setclickInInput] = useState(false)

  return (
    <div className=" rounded-2xl bg-bs-gray-dark-v2 p-6 flex items-center justify-between">
      <div className="space-y-3">
        <div className="font-bold text-2xl text-bs-cyan-v2">يلا شووت - ترتيب البطولات</div>
        <div className="flex items-center rtl:space-x-reverse  space-x-2  text-sm">
          <Link href={'/ar/home'} className="text-bs-gray hover:text-bs-cyan-v2">
            الرئيسية
          </Link>
          <div className="">
            /
          </div>
          <div className="">
            الترتيب
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="  relative rounded-2xl hidden w-0 phone-md:block   medium-wide:w-[200px]  extra-wide:w-[300px]"
        >
          <div className="absolute z-10 inset-y-0 right-2 flex items-center">
            <SvgIcons iconName='search' />
          </div>
          <input
            placeholder="ادخل كلمات البحث ..."
            onClick={() => setclickInInput(true)}
            value={query}
            onChange={(e) => { setQuery(e.target.value) }}
            autoComplete='off'
            id="inputField"
            type="text"
            className=' placeholder:text-bs-gray relative z-0 rounded-2xl w-full px-10 text-white h-10 bg-bs-gray-dark-v1 hidden  medium-wide:block border-0 outline-none  '
          />
          <div className={` ${query == '' ? 'hidden' : 'flex'} absolute inset-y-0  z-10  items-center left-2`}>
            <button onClick={() => setQuery('')} className="  hover:bg-bs-red bg-bs-gray-dark-v4 duration-150 rounded-full w-6 h-6 flex justify-center items-center">
              <SvgIcons iconName='clearSearch' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Index = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="w-full fl">
        <Header />
      </div>
      <div className="w-full max-w-[600px]">
        <ListOfTournaments type='rank' />
      </div>
    </div>
  )
}

export default Index