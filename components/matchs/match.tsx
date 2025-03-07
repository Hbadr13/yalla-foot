import { IMatchesApiJson } from '@/data/matches'
import React, { ReactNode, useState } from 'react'
import MatchCompT2 from './matchCompT2'
import { statisticsApi } from '@/data/statistics'
import Statistics from './statistics'
import NewsRelated from '../news/newsRelated'
import Standings from '../tournaments/standings'
import Details from './details'
import ChatBox from '../chat/chatBox'
import Scorers from '../scorers/scorers'
import Lineups from './lineups'
import Incidents from './incidents'

interface IMatchProps {
    selectMatch: IMatchesApiJson | null
    type: 'in' | 'out'
}
const Match = ({ selectMatch, type }: IMatchProps) => {
    if (!selectMatch)
        return

    const matchNavs = [

        {
            id: 0,
            name: 'الأحداث',
            slug: '',
            component: <Incidents />
        },
        {
            id: 1,
            name: 'الإحصائيات',
            slug: '',
            component: <Statistics />
        },
        {
            id: 2,
            name: 'التفاصيل',
            slug: '',
            component: <Details event={selectMatch} />
        },
        {
            id: 3,
            name: 'الأخبار',
            slug: '',
            component: <NewsRelated />
        },
        {
            id: 4,
            name: 'التشكيلة',
            slug: '',
            component: <Lineups event={selectMatch} />
        },
        {
            id: 5,
            name: 'فيديو',
            slug: '',
            component: <div />
        },
        {
            id: 6,
            name: 'مساحة الزوار',
            slug: '',
            component: <ChatBox />
        },
        {
            id: 7,
            name: 'الترتيب',
            slug: '',
            component: <Standings />
        },
        {
            id: 8,
            name: 'الهدافون',
            slug: '',
            component: <Scorers />
        },
    ]
    const [selectNav, setSelectNav] = useState<{ id: number, name: string, slug: string, component: ReactNode }>(matchNavs[0])

    return (
        <div className='space-y-10 w-full overflow-hidden'>
            <MatchCompT2
                selectNav={selectNav}
                setSelectNav={setSelectNav}
                matchNavs={matchNavs}
                type={type}
                match={selectMatch}
            />
            <div className="flex justify-center">
                <div className={`w-full ${selectNav.id == 4 || selectNav.id == 6 ? '' : 'max-w-[760px]'}`}>
                    {
                        selectNav.component
                    }
                </div>
            </div>

        </div >
    )
}

export default Match