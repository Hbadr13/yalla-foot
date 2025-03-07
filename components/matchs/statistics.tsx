import { statisticsApi } from '@/data/statistics'
import React from 'react'
export const CircularProgressComp = ({ radius, value, color, text }: { radius: number, value: number, color: string, text: string }) => {

    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return <div className=" flex justify-center items-center">
        <svg width="100" height="100">
            <g transform="rotate(-90 50 50)">
                <circle
                    r={radius}
                    cx="50"
                    cy="50"
                    fill="transparent"
                    stroke="rgb(139 92 246)"
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset="0"
                ></circle>
                <circle
                    r={radius}
                    cx="50"
                    cy="50"
                    fill="transparent"
                    stroke={color}
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                ></circle>
            </g>
            <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize="12"
                fill="#6c757d"
            >
                {text}
            </text>
        </svg>
    </div>
}
const Statistics = () => {
    return (
        <div>
            <div className="animate-appearance-in-Custom">
                {
                    statisticsApi.statistics.map((group, _index) =>
                        <div
                            key={_index}
                            className=''
                        >
                            <div className=" text-bs-gray font-medium text-md py-3 ">
                                {group.groupName}
                            </div>
                            <div className='space-y-4  bg-bs-gray-dark-v2 rounded-2xl p-2'>
                                {
                                    group.statisticsItems.map((statistic, __index) =>
                                        <div key={__index} className="">
                                            {
                                                statistic.renderType == 1 && <div
                                                    className=' space-y-2'
                                                >
                                                    <div className="flex justify-between text-sm">
                                                        <div className="">{statistic.homeValue}</div>
                                                        <div className="">{statistic.name}</div>
                                                        <div className="">{statistic.awayValue}</div>
                                                    </div>
                                                    <div className="w-full flex rtl:space-x-reverse space-x-4">
                                                        <div className="w-1/2  bg-bs-gray-dark-v5 rounded-[2px] h-1 flex justify-end">
                                                            <div style={{ width: `${String(Math.abs(statistic.homeValue) * 100 / (Math.abs(statistic.homeValue) + Math.abs(statistic.awayValue))) + '%'}` }} className={` bg-bs-blue h-full rounded-[2px] `}></div>
                                                        </div>
                                                        <div className="w-1/2  bg-bs-gray-dark-v5 rounded-[2px] h-1">
                                                            <div
                                                                style={{ width: `${String(Math.abs(statistic.awayValue) * 100 / (Math.abs(statistic.homeValue) + Math.abs(statistic.awayValue)))}%` }}
                                                                className={` bg-violet-500  h-full rounded-[2px]`}
                                                            >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                statistic.renderType == 2 && <div
                                                    className=' space-y-2'
                                                >
                                                    <div className="flex justify-between text-sm">
                                                        <div className=" bg-green-500 text-white px-2 py-0.5 rounded-lg font-semibold">{statistic.home}</div>
                                                        <div className="">{statistic.name}</div>
                                                        <div className="bg-blue-600 text-white px-2 py-0.5 rounded-lg font-semibold">{statistic.away}</div>
                                                    </div>
                                                    <div className="w-full bg-blue-600 h-4 rounded-xl">
                                                        <div style={{ width: `${String(statistic.homeValue * 100 / (statistic.homeValue + statistic.awayValue)) + '%'}` }} className={`bg-green-500   h-full rounded-l-xl `}></div>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                statistic.renderType == 3 && <div
                                                    className=' space-y-2 '
                                                >
                                                    <div className="flex  text-sm items-center justify-center ">
                                                        <div className="  w-1/2 flex   justify-between items-center">
                                                            <div className="">
                                                                {statistic.homeValue}/{statistic.homeTotal}
                                                            </div>
                                                            <CircularProgressComp radius={30} color={statistic.compareCode == 1 || statistic.compareCode == 3 ? 'rgb(34 197 94)' : 'rgb(134 239 172)'} value={statistic.homeValue} text={`${statistic.homeValue.toFixed(2)}%`} />
                                                        </div>
                                                        <div className=" w-10 flex justify-center items-center whitespace-pre-line text-center">{statistic.name}</div>
                                                        <div className='w-1/2 flex justify-between items-center'>
                                                            <CircularProgressComp radius={30} color={statistic.compareCode == 2 || statistic.compareCode == 3 ? 'rgb(37 99 235)' : 'rgb(147 197 253)'} value={statistic.awayValue} text={`${statistic.awayValue.toFixed(2)}%`} />
                                                            <div className="">
                                                                {statistic.awayValue}/{statistic.awayTotal}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                statistic.renderType == 4 && <div
                                                    className=' space-y-2'
                                                >
                                                    <div className="flex  text-sm items-center justify-center rtl:space-x-reverse space-x-10 ">
                                                        <div className="text-violet-500">{statistic.homeValue}%</div>
                                                        <CircularProgressComp radius={40} color={'rgb(37 99 235)'} value={statistic.homeValue} text={`الاستحواذ`} />
                                                        <div className="">{statistic.awayValue}%</div>
                                                    </div>
                                                </div>
                                            }
                                        </div>

                                    )
                                }
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Statistics