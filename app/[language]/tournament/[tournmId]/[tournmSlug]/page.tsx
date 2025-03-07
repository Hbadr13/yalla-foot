'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IMatchesApiJson } from '@/data/matches'
import { useWindowAttributes } from '@/context/windowAttributes'
import NewsRelated from '@/components/news/newsRelated'
import Standings from '@/components/tournaments/standings'
import Matches from '@/components/matchs/matches'
import Match from '@/components/matchs/match'
import DownloadApp from '@/components/layout/downloadApp'
import { useParams } from 'next/navigation'
import { tournamentsApi } from '@/data/tournaments'
import Scorers from '@/components/scorers/scorers'

// interface ITeamCompProps {
//   team: ITeamAPIJson
// }

const page = () => {
  const params = useParams<{ language: string, tournmId: string, tournmSlug: string }>()
  const tournament = tournamentsApi.find((mtch) => String(mtch.id) == params.tournmId)
  if (!tournament)
    return <div className="">helo</div>
  const { windowAttributes } = useWindowAttributes()

  const [teamNavs, setTeamNavs] = useState([
    {
      id: 0,
      name: 'الأخبار',
      slug: '',
      component: <div className="">
        <div className="p-3 text-bs-cyan-v2 font-semibold">الأخبار</div>
        <NewsRelated />
      </div>
    },

    {
      id: 1,
      name: 'الترتيب',
      slug: '',
      component: <Standings />
    },
    {
      id: 2,
      name: 'الإحصائيات',
      slug: '',
      component: <Scorers />
    },
    {
      id: 3,
      name: 'فيديو',
      slug: '',
      component: <div />
    },
  ])
  useEffect(() => {
    if (windowAttributes.width < 900) {
      if (!teamNavs.find((item) => item.id == 4)) {
        setTeamNavs((prv) => [{
          id: 4,
          name: 'المباريات',
          slug: '',
          component: <Matches setSelectMatch={setSelectMatch} type='in' />
        }, ...prv])
        setSelectNav({
          id: 4,
          name: 'المباريات',
          slug: '',
          component: <Matches setSelectMatch={setSelectMatch} type='in' />
        })
      }
    }
    else {
      setSelectNav({
        id: 0,
        name: 'الأخبار',
        slug: '',
        component: <div className="">
          <div className="p-3 text-bs-cyan-v2 font-semibold">الأخبار</div>
          <NewsRelated />
        </div>
      })
      setTeamNavs((prv) => prv.filter((item) => item.id != 4))
    }
  }, [windowAttributes])
  const [selectMatch, setSelectMatch] = useState<IMatchesApiJson | null>(null)
  const [selectNav, setSelectNav] = useState(teamNavs[0])

  return (
    <div className='space-y-7'>
      <div className="w-full  overflow-hidden flex flex-col space-y-4 phone-md:space-y-0 phone-md:flex-row items-center phone-md:items-start bg-bs-gray-dark-v2 pt-28  phone-md:pt-5 pr-0  phone-md:pr-5 rounded-2xl rtl:space-x-reverse space-x-2 ">
        <div className="w-[100px] flex justify-center">
          <Image
            className=' w-16 h-16 phone-md:w-20  phone-md:h-20'
            src={tournament.image} alt={`${tournament.name}`} width={1000} height={1000}
          />
        </div>
        <div className="h-full  space-y-0  phone-md:space-y-4 pt-2  ">
          <div className="text-xl text-center phone-md:text-start font-semibold text-bs-white">
            {tournament.name}
          </div>
          <div className="flex   rtl:space-x-reverse  space-x-4 phone-md:space-x-10 w-full  justify-center phone-md:justify-start">
            {
              teamNavs.map((item, index) =>
                <button key={index} className='' onClick={() => {
                  setSelectMatch(null)
                  setSelectNav(item)
                }}     >
                  <div className="  py-4 text-sm">
                    {item.name}
                  </div>
                  <div className={` h-1   ${item.id == selectNav.id && selectMatch == null ? 'animate-drawBorder  bg-bs-cyan-v2' : ''}`} />
                </button>
              )
            }
          </div>
        </div>
      </div >
      <div className=" w-full flex justify-around rtl:space-x-reverse space-x-2">
        <div className=" hidden medium-wide:block   medium-wide:w-[40%]  medium-wide:max-w-[492px] ">
          <Matches setSelectMatch={setSelectMatch} type='in' />
        </div>
        <div className=" w-full  medium-wide:w-[60%]    medium-wide:max-w-[580px]">
          <div className="">
            {
              selectMatch
                ?
                <div className="">
                  <div className="font-semibold text-bs-cyan-v2 p-3">تفاصيل المباراة</div>
                  <Match type='in' selectMatch={selectMatch} />
                </div>
                :
                <div className="">{selectNav.component}</div>
            }
          </div>
          <div className="pt-36 hidden phone-md:block">
            <DownloadApp />
          </div>
        </div>
      </div>

    </div >
  )
}

export default page