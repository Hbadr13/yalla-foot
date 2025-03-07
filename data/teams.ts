export interface ITeamAPIJson {
    name: string,
    id: number,
    country: string,
    slug: string,
    image:string
}
export const teamApi: Array<ITeamAPIJson> = [
    {
        name: 'برشلونة',
        id: 8634,
        country: 'Spain',
        slug: 'Barcelona',
        image: 'https://imgs.ysscores.com/teams/128/9541690196746.png'
    },
    {
        name: 'ليفربول',
        id: 8650,
        country: 'England',
        slug: 'Liverpool',
        image: 'https://imgs.ysscores.com/teams/128/9811690118551.png'
    },
    {
        name: 'مانشستر يونايتد',
        id: 10260,
        country: 'England',
        slug: 'Manchester-United',
        image: 'https://imgs.ysscores.com/teams/128/4871690119302.png'
    },
    {
        name: 'مانشستر سيتي',
        id: 8456,
        country: 'England',
        slug: 'Manchester-City',
        image: 'https://imgs.ysscores.com/teams/128/4481690118308.png'
    },
    {
        name: 'ريال مدريد',
        id: 8633,
        country: 'Spain',
        slug: 'Real-Madrid',
        image: 'https://imgs.ysscores.com/teams/128/1871690196746.png'
    }
]