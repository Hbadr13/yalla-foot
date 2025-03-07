'use client'

import PlayerOverview from '@/components/player/playerOverview'
import PlayerStatistics from '@/components/player/playerStatistics'
import { IplyersApiProps, plyersApi } from '@/data/players'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const params = useParams<{ language: string, playerSlug: string, playerId: string }>()
    const [selecedtPlayer, setSelecedtPlayer] = useState<IplyersApiProps | undefined>(plyersApi.find((player) => player.id == Number(params.playerId)))
    if (!selecedtPlayer)
        return <div className="">{params.playerId}</div>
    return (
        <div className='space-y-5'>
            <PlayerOverview  player={selecedtPlayer}/>
            <PlayerStatistics  player={selecedtPlayer}/>
        </div>
    )
}

export default page