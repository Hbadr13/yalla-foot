import { tournamentsApi } from '@/data/tournaments'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IListOfTournamentsProps {
    type: 'rank' | 'tournm'

}
const ListOfTournaments = ({ type }: IListOfTournamentsProps) => {
    return (
        <div>
            <div className="text-lg font-medium p-2 text-gray-500"
            >
                {type == 'tournm' ? `قائمة البطولات` : `البطولات`}
            </div>
            <div className=" space-y-2">
                {
                    tournamentsApi.concat(tournamentsApi).concat(tournamentsApi).map((champ, index) =>
                        <Link
                            key={index}
                            className={`${type == 'rank' ? 'p-2' : 'p-1.5'} flex items-center  rtl:space-x-reverse space-x-2 bg-bs-gray-dark-v2 rounded-xl  group hover:bg-bs-gray-dark-v4`}
                            href={type == 'rank' ? `/ar/rank/${champ.id}/${champ.slug}` : `/ar/tournament/${champ.id}/${champ.slug}`}>
                            <div className="">
                                <Image className={`${type == 'rank' ? 'w-8 h-8' : 'w-6 h-6'}`} src={champ.image} width={500} height={500} alt={`flag:${champ.id}`} />
                            </div>
                            <div className={`${type == 'rank' ? 'text-sm' : 'text-xs'}  font-medium group-hover:text-bs-cyan-v2`}>
                                {champ.name}
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default ListOfTournaments