import SvgIcons from '@/utils/svgIcons'
import React, { useState } from 'react'

const SendMessage = () => {
    const [query, setQuery] = useState('')

    return (
        <div>
            <div
                className="  p-8 relative rounded-2xl  w-full"
            >
                <div className="absolute z-10 inset-y-0 left-10 flex items-center">
                    <button className='w-9 h-9 rounded-full bg-bs-cyan-v2 hover:bg-white duration-200 flex justify-center items-center  -rotate-90'>
                        <SvgIcons iconName='send' />
                    </button>
                </div>

                <input
                    placeholder="اكتب تعليقك هنا"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value) }}
                    autoComplete='off'
                    id="inputField"
                    type="text"
                    className=' relative z-0 rounded-3xl w-full px-10 text-white h-12 bg-bs-gray-dark-v1 hidden  medium-wide:block border-0 outline-none  '
                />

            </div>
        </div>
    )
}

export default SendMessage