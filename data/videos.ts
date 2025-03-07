export const videosApi: Array<IVideosApiJson> = [
    {
        name: `ملخص المباراة كلوب أمريكا - سانت لويس سيتي`,
        id: 93031,
        image: 'https://i3.ytimg.com/vi/sRaVIpg-c8M/hqdefault.jpg',
        video: 'https://www.youtube.com/embed/sRaVIpg-c8M',
        time: 1722969900
    },
    {
        name: `ملخص المباراة تايجرز أونال - نيويورك سيتي`,
        id: 92999,
        image: 'https://i3.ytimg.com/vi/2gVIKE9I5wE/hqdefault.jpg',
        video: 'https://www.youtube.com/embed/2gVIKE9I5wE',
        time: 1723050000
    },
    {
        name: `ملخص المباراة لوس أنجلوس - سان خوسيه إيرثكويكس`,
        id: 93027,
        image: 'https://i3.ytimg.com/vi/fs4JClLSFtc/hqdefault.jpg',
        video: 'https://www.youtube.com/embed/fs4JClLSFtc',
        time: 1722960000
    },
    {
        name: `ملخص المباراة سان لورينزو - أتلتيكو مينيرو`,
        id: 93007,
        image: 'https://i3.ytimg.com/vi/EF26P7ZMoEA/hqdefault.jpg',
        video: 'https://www.youtube.com/embed/EF26P7ZMoEA',
        time: 1722963600
    },

]

export interface IVideosApiJson {
    name: string
    id: number
    image: string
    video: string
    time: number
}