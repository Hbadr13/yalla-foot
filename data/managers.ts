import { ITeam } from "./matches"

export interface IManagerApiProps {
    name: string
    id: number,
    slug: string,
    image: string,
    yallowCard: number,
    redCard: number,
    age: number,
    team: ITeam
}

export const managerApi: Array<IManagerApiProps> = [
    {
        name: 'كارلو أنشيلوتي',
        id: 0,
        slug: '#',
        image: 'https://imgs.ysscores.com/coach/48/5041694378021.png',
        yallowCard: 2,
        redCard: 2,
        age: 26,
        team: {
            name: 'ريال مدريد',
            id: 8633,
            country: 'Spain',
            slug: 'Real-Madrid',
            image: 'https://imgs.ysscores.com/teams/128/1871690196746.png'
        }
    }
]