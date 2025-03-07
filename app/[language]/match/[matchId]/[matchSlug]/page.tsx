'use client'
import Match from '@/components/matchs/match'
import { IMatchesApiJson, matchesApi } from '@/data/matches'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  const params = useParams<{ language: string, matchId: string, matchSlug: string }>()
  const [selectMatch, setSelectMatch] = useState<IMatchesApiJson | null>((matchesApi.find((mtch) => String(mtch.id) == params.matchId) || null))

  return (
    <div>
      <Match type={'out'} selectMatch={selectMatch} />
    </div>
  )
}

export default page