import { ITournamentApiJson } from "./tournaments"

export interface ITeam {
    name: string,
    id: number,
    country: string,
    slug: string,
    image: string
}

export interface IStatus {
    description: string,
    type: string,
    homeScore?: number,
    awayScore?: number
}

export interface IMatchesApiJson {
    slug: string
    id: number
    time: number
    tournament: ITournamentApiJson
    homeTeam: ITeam
    awayTeam: ITeam
    status: IStatus
}

export const matchesApi: IMatchesApiJson[] = [
    {
        slug: 'Liverpool-vs-Manchester-United',
        id: 720340,
        time: 1722969900,
        tournament: {
            name: 'الدوري الإنجليزي الممتاز',
            id: 892924,
            slug: 'Premier-League',
            image: 'https://imgs.ysscores.com/championship/128/3411694791422.png'
        },
        status: {
            description: 'Ended',
            type: 'finished',
            homeScore: 0,
            awayScore: 1
        },
        homeTeam: {
            name: 'ليفربول',
            id: 8650,
            country: 'إنجلترا',
            slug: 'Liverpool',
            image: 'https://imgs.ysscores.com/teams/128/9811690118551.png'
        },
        awayTeam: {
            name: 'مانشستر يونايتد',
            id: 10260,
            country: 'إنجلترا',
            slug: 'Manchester-United',
            image: 'https://imgs.ysscores.com/teams/128/4871690119302.png'
        },
    },
    {
        slug: 'Manchester-City-vs-Manchester-United',
        id: 720311,
        time: 1722960000,

        tournament: {
            name: 'الدوري الإنجليزي الممتاز',
            id: 892924,
            slug: 'Premier-League',
            image: 'https://imgs.ysscores.com/championship/128/3411694791422.png'
        },
        status: {
            description: 'Ended',
            type: 'finished',
            homeScore: 3,
            awayScore: 1
        },
        homeTeam: {
            name: 'مانشستر سيتي',
            id: 8456,
            country: 'إنجلترا',
            slug: 'Manchester-City',
            image: 'https://imgs.ysscores.com/teams/128/4481690118308.png'
        },
        awayTeam: {
            name: 'مانشستر يونايتد',
            id: 10260,
            country: 'إنجلترا',
            slug: 'Manchester-United',
            image: 'https://imgs.ysscores.com/teams/128/4871690119302.png'
        },
    },
    {
        slug: 'Manchester-City-vs-Liverpool',
        id: 722220,
        time: 1722960000,
        tournament: {
            name: 'الدوري الإنجليزي الممتاز',
            id: 892924,
            slug: 'Premier-League',
            image: 'https://imgs.ysscores.com/championship/128/3411694791422.png'
        },
        status: {
            description: 'Ended',
            type: 'finished',
            homeScore: 3,
            awayScore: 3
        },
        homeTeam: {
            name: 'مانشستر سيتي',
            id: 8456,
            country: 'إنجلترا',
            slug: 'Manchester-City',
            image: 'https://imgs.ysscores.com/teams/128/4481690118308.png'
        },
        awayTeam: {
            name: 'ليفربول',
            id: 8650,
            country: 'إنجلترا',
            slug: 'Liverpool',
            image: 'https://imgs.ysscores.com/teams/128/9811690118551.png'
        },
    },
    {
        slug: 'Real-Madrid-vs-Barcelona',
        id: 714032,
        time: 1723050000,
        tournament: {
            name: 'الدوري الإسباني',
            id: 892925,
            slug: 'LaLiga',
            image: 'https://imgs.ysscores.com/championship/128/8641690196626.png'
        },
        status: {
            description: 'Not started',
            type: 'notstarted'
        },
        homeTeam: {
            name: 'ريال مدريد',
            id: 8633,
            country: 'إسبانيا',
            slug: 'Real-Madrid',
            image: 'https://imgs.ysscores.com/teams/128/1871690196746.png'
        },
        awayTeam: {
            name: 'برشلونة',
            id: 8634,
            country: 'إسبانيا',
            slug: 'Barcelona',
            image: 'https://imgs.ysscores.com/teams/128/9541690196746.png'
        },
    }

]

