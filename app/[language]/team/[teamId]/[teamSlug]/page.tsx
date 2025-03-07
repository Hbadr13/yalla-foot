'use client'
import TeamComp from '@/components/team/teamComp'
import { teamApi } from '@/data/teams'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const params = useParams<{ language: string, teamId: string, teamSlug: string }>()
    const team = teamApi.find((mtch) => String(mtch.id) == params.teamId)
    if (!team)
        return

    return (
        <div>
            <TeamComp team={team} />
        </div>
    )
}

export default page