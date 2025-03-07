'use client'
import * as React from 'react';
import SvgIcons from "@/utils/svgIcons";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import { styled } from '@mui/system';
import dayjs, { Dayjs } from "dayjs";




export default function CustomCalendar() {

    const [value, setValue] = React.useState<Dayjs | null>(dayjs());

    const [showModel, setShowModel] = useState(false)
    const [hideModel, sethideModel] = useState(true)
    const CustomDateCalendar = styled(DateCalendar)({
        '.MuiTypography-root': {
            color: '#bfc3d4', // Custom text color
            strock: 'white'
        },

        '.MuiPickersDay-root': {
            color: 'white', // Custom day color
            fontWeight: 500,
            fontSize: `0.8rem` /* 20px */,
            lineHeight: `1.05rem`/* 28px */,
        },

        '.MuiPickersCalendarHeader-label': {
            color: '#39DBBF',
        }
    });

    return (
        <main className="" >
            <div className=" relative">
                <div className=" relative z-10 flex items-center rtl:space-x-reverse space-x-2">
                    <button onClick={() => setValue(dayjs(value?.add(1, 'day')))} className="  w-6 h-6 flex justify-center items-center rounded-md  bg-transparent hover:bg-bs-gray-dark-v4 duration-200">
                        <SvgIcons iconName="arrawV2" />
                    </button>
                    <div className="font-medium">
                        {value?.format('ll')}
                    </div>
                    <button onClick={() => setValue(dayjs(value?.add(-1, 'day')))} className="rotate-180 w-6 h-6 flex justify-center items-center rounded-md  bg-transparent hover:bg-bs-gray-dark-v4 duration-200">
                        <SvgIcons iconName="arrawV2" />
                    </button>
                    <button
                        onClick={() => { setShowModel((prv) => !prv), sethideModel(false) }}
                        className=" w-6 h-6 flex justify-center items-center rounded-md  bg-transparent hover:bg-bs-gray-dark-v4 duration-200">
                        <SvgIcons iconName="calander" />
                    </button>
                </div>
                <div
                    hidden={hideModel}
                    style={{ right: -150 }}
                    className={`  top-12 w-[400px]  rounded-2xl bg-bs-gray-dark-v2 absolute z-20
          ${showModel ? '  animate-appearance-in' : '  animate-appearance-out'}
          `}>
                    <div dir="ltr" className="shadow-large shadow-white bg-bs-gray-dark-v2 stroke-white text-white p-4 rounded-xl text-xl">
                        <div className="stroke-none flex items-center justify-between p-2">
                            <div className="text-bs-light-v2 font-semibold">Choose Date</div>
                            <Button
                                onClick={() => {
                                    sethideModel(true)
                                    setTimeout(() => {
                                        setShowModel(false)
                                    }, 200);
                                }}
                                size="sm" className=" rounded-full p-0  flex justify-center items-center">
                                <SvgIcons iconName="x" />
                            </Button>
                        </div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <CustomDateCalendar defaultValue={value} onChange={(newValue) => setValue(newValue)} />
                        </LocalizationProvider>
                        <Button onClick={() => {
                            sethideModel(true)
                            setTimeout(() => {
                                setShowModel(false)
                            }, 200);
                        }} className="rounded-2xl w-full text-bs-gray-dark-v2 font-semibold text-[18px] bg-bs-cyan-v2 hover:bg-bs-blue-v1 duration-300">
                            الفلترة
                        </Button>
                    </div>
                </div>
            </div>

        </main >
    );
}



