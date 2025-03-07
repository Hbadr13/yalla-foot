"use client"
import { useWindowAttributes } from '@/context/windowAttributes'
import { plyersApi } from '@/data/players'
import { teamApi } from '@/data/teams'
import { tournamentsApi } from '@/data/tournaments'
import SvgIcons from '@/utils/svgIcons'
import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useSearchParams, usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { CustomScroll } from 'react-custom-scroll'

const Navbar = () => {
    const [waitData, setWaitData] = useState('done')
    const [query, setQuery] = useState('')
    const [currentTab, setCurrentTab] = useState('')
    const route = usePathname()

    const { windowAttributes, setWindowAttributes } = useWindowAttributes()
    useEffect(() => {
        if (typeof window == "undefined")
            return
        setWindowAttributes({ width: window.innerWidth, height: window.innerHeight })
        const handleResize = () => {
            setWindowAttributes({ width: window.innerWidth, height: window.innerHeight })
        }
        addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])



    const tabs = [
        {
            id: 0,
            name: 'الرئيسية',
            slug: '/ar/home',
            image: ''
        },
        {
            id: 1,
            name: 'المباريات',
            slug: '/ar/match',
            image: 'playingField'
        },
        {
            id: 2,
            name: 'الأخبار',
            slug: '/ar/news',
            image: 'summary'
        },
        {
            id: 3,
            name: 'الترتيب',
            slug: '/ar/rank',
            image: 'rank'
        },
        {
            id: 4,
            name: 'الفيديوهات',
            slug: '/ar/video',
            image: 'videos'
        },
        {
            id: 5,
            name: 'info',
            slug: '/ar/contact',
            image: 'points'
        },
    ]
    const infoTabs = [
        {
            id: 0,
            name: 'من نحن',
            slug: '/ar/about',
            image: ''
        },
        {
            id: 1,
            name: 'اتصل بنا',
            slug: '/ar/contact',
            image: ''
        },
        {
            id: 2,
            name: 'سياسة الخصوصية',
            slug: '/ar/PrivacyPolicy',
            image: ''
        },
    ]
    const refCardSearch = useRef<any>();
    const refInput = useRef<any>();
    const [clickInInput, setclickInInput] = useState(false)

    useEffect(() => {
        document.addEventListener('click', (event: any) => {
            if (refCardSearch.current && !refCardSearch.current.contains(event.target) && !refInput.current.contains(event.target)) {
                setclickInInput(false)
            }
        })
        document.addEventListener('click', (event: any) => {
            const clickedElement = event.target;
            if (clickedElement.classList.contains('hidediv')) {
                setclickInInput(false)
            }
        });
    }, []);
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY && currentScrollY > 50) {
                // Scroll down → Hide Navbar
                setIsVisible(false);
            } else {
                // Scroll up → Show Navbar
                setIsVisible(true);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);
    return (
        <>
            <div className={`transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"}  w-full  block phone-md:hidden fixed bottom-0 z-30 h-20 bg-bs-gray-dark-v2 overflow-hidden`}>
                <div className="flex h-full py-2">
                    {
                        tabs.map((tab, index) =>
                            tab.id != 0 && <Link
                                className={` flex flex-col items-center justify-around h-full w-1/5 ${route.split('/')[2] == tab.slug.split('/')[2] ? 'text-bs-cyan-v2' : ''}  hover:text-bs-cyan-v2`}
                                href={tab.slug}
                                key={index}
                            >
                                <div className="h-10 flex items-center">
                                    <SvgIcons iconName={tab.image} color={route.split('/')[2] == tab.slug.split('/')[2] ? '#39dbbf' : '#767884'} />
                                </div>
                                <div className="font-medium text-xs">
                                    {tab.name}
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className="pt-10   hidden phone-md:block ">
                <div className="flex items-center w-full  rtl:space-x-reverse space-x-0  phone-md:space-x-2 ">
                    <Link
                        className=" hidden w-0 phone-md:flex justify-start space-x-reverse space-x-2 items-center phone-md:w-[250px] "
                        href={'/ar/home'}
                    >
                        <Image className=' opacity-80 h-[46px] w-[46px]  rounded-md overflow-hidden  object-cover' alt='logo' src={`/android-chrome-512x512.png`} width={1000} height={1000} />
                        <div className="font-semibold text-lg leading-5 ">
                            Yalla Foot
                        </div>
                    </Link>
                    <div className="  w-full flex justify-center  rtl:space-x-reverse space-x-8 text-medium">
                        {tabs.map((tab, index) =>
                            tab.name != 'info' ? <Link
                                className={`${route.split('/')[2] == tab.slug.split('/')[2] ? 'text-bs-cyan-v2' : ''} hover:text-bs-cyan-v2`}
                                href={tab.slug}
                                key={index}
                            >
                                <div className="font-semibold">
                                    {tab.name}
                                </div>
                            </Link> :
                                <Popover className='' placement="bottom" showArrow={!true}>
                                    <PopoverTrigger>
                                        <button>
                                            <SvgIcons iconName='threePoints' />
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent className='bg-bs-gray-dark-v2 rounded-xl'>
                                        <div className=" py-2 flex flex-col  font-semibold space-y-2 px-10">
                                            {
                                                infoTabs.map((_tab, index) =>
                                                    <Link
                                                        key={index}
                                                        className={`${route == _tab.slug ? 'text-bs-cyan-v2' : ''} hover:text-bs-cyan-v2`}
                                                        href={_tab.slug}
                                                    >
                                                        {
                                                            _tab.name
                                                        }
                                                    </Link>
                                                )
                                            }
                                        </div>
                                    </PopoverContent>
                                </Popover>
                        )}
                    </div>
                    <div className=" hidden  font phone-md:flex items-center rtl:space-x-reverse space-x-2 ">
                        <div
                            className="  relative rounded-2xl hidden w-0 phone-md:block   medium-wide:w-[200px]  extra-wide:w-[300px]"
                        >

                            <div className="absolute z-10 inset-y-0 right-2 hidden  medium-wide:flex items-center  ">
                                <SvgIcons iconName='search' />
                            </div>
                            <input

                                placeholder="ادخل كلمات البحث ..."
                                onClick={() => setclickInInput(true)}
                                value={query}
                                ref={refInput}
                                onChange={(e) => { setQuery(e.target.value) }}
                                autoComplete='off'
                                id="inputField"
                                type="text"
                                className=' placeholder:text-bs-gray relative z-0 rounded-2xl w-full px-10 text-white h-10 bg-bs-gray-dark-v2 hidden  medium-wide:block border-0 outline-none  '
                            />
                            <div className={` ${query == '' ? 'hidden' : 'flex'} absolute inset-y-0  z-10  items-center left-2`}>
                                <button onClick={() => setQuery('')} className="  hover:bg-bs-red bg-bs-gray-dark-v4 duration-150 rounded-full w-6 h-6 flex justify-center items-center">
                                    <SvgIcons iconName='clearSearch' />
                                </button>
                            </div>

                            {
                                clickInInput &&
                                <div
                                    className="  shadow-[-1px_1px_30px_#0e1019,_1px_1px_30px_#0e1019]  text-bs-light-v2 animate-appearance-in p-4 space-y-5  min-h-[200px]   overflow-hidden bg-bs-gray-dark-v2    absolute  top-12 right-0 bg-CusColor_grey   w-[360px]   rounded-xl"
                                    ref={refCardSearch}
                                >
                                    {
                                        <div className="">
                                            <div className="p-2 text-bs-gray-v1 text-[14px] font-medium">الأندية الأكثر بحثاً</div>
                                            <div className="w-full flex flex-wrap gap-2 ">
                                                {
                                                    teamApi.slice(0, 4).map((team, index) =>
                                                        <Link
                                                            key={index}
                                                            className='flex items-center rtl:space-x-reverse space-x-2 bg-bs-gray-dark-v6   rounded-full py-1 px-3'
                                                            href={`/ar/team/${team.id}/${team.slug}`}>
                                                            <Image className='w-5 h-5' src={team.image} width={400} height={400} alt={`team:${team.slug}`} />
                                                            <div className="text-sm">
                                                                {team.name}
                                                            </div>
                                                        </Link>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    }
                                    {
                                        <div className="">
                                            <div className="p-2 text-bs-gray-v1 text-[14px] font-medium">البطولات الأكثر بحثاً</div>
                                            <div className="w-full flex flex-wrap gap-2 p-2">
                                                {
                                                    tournamentsApi.slice(0, 4).map((tournament, index) =>
                                                        <Link
                                                            key={index}
                                                            className='flex items-center rtl:space-x-reverse space-x-2 bg-bs-gray-dark-v6   rounded-full py-1 px-3'
                                                            href={`/ar/tournament/${tournament.id}/${tournament.slug}`}>
                                                            <Image className='w-5 h-5' src={tournament.image} width={400} height={400} alt={`tournament:${tournament.slug}`} />
                                                            <div className="text-sm">
                                                                {tournament.name}
                                                            </div>
                                                        </Link>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    }
                                    {
                                        <div className="">
                                            <div className="p-2 text-bs-gray-v1 text-[14px] font-medium">الاعبين  الأكثر بحثاً</div>
                                            <div className="w-full flex flex-wrap gap-2 p-2">
                                                {
                                                    plyersApi.slice(0, 4).map((player, index) =>
                                                        <Link
                                                            key={index}
                                                            className='flex items-center rtl:space-x-reverse space-x-1 bg-bs-gray-dark-v6 rounded-full py-1 px-3'
                                                            href={`/ar/player/${player.id}/${player.slug}`}>
                                                            <Image className='w-5 h-5' src={player.image} width={400} height={400} alt={`player:${player.slug}`} />
                                                            <div className="text-sm">
                                                                {player.name}
                                                            </div>
                                                        </Link>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    }

                                </div>

                            }
                        </div >
                        <Button className="bg-bs-cyan-v2 py-2 px-4 text-black font-bold rounded-3xl">Login</Button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar