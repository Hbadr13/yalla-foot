export const statisticsApi = {
    id: 0,
    tournament: {
        name: 'الدوري الإسباني',
        id: 892925,
        slug: 'LaLiga',
        image: 'https://imgs.ysscores.com/championship/128/8641690196626.png'
    },
    statistics: [
        {
            "groupName": "الهجوم",
            "statisticsItems": [
                {
                    "name": "الاستحواذ",
                    "home": "60%",
                    "away": "40%",
                    "compareCode": 1,
                    "statisticsType": "neutral",
                    "valueType": "percentage",
                    "homeValue": 40,
                    "awayValue": 60,
                    'homeTotal': 100,
                    'awayTotal': 100,
                    "renderType": 4,
                    "key": "possession"
                },
                {
                    "name": "التسديدات",
                    "home": "17",
                    "away": "10",
                    "compareCode": 1,
                    "statisticsType": "positive",
                    "valueType": "event",
                    "homeValue": 17,
                    "awayValue": 10,
                    "renderType": 1,
                    "key": "totalShots"
                },
                {
                    "name": "التسديد على المرمى",
                    "home": "7",
                    "away": "7",
                    "compareCode": 1,
                    "statisticsType": "positive",
                    "valueType": "event",
                    "homeValue": 7,
                    "awayValue": 7,
                    "renderType": 1,
                    "key": "shotsOnGoal"
                },
                {
                    "name": "التسديد بعيداً عن المرمى",
                    "home": "6",
                    "away": "1",
                    "compareCode": 1,
                    "statisticsType": "negative",
                    "valueType": "event",
                    "homeValue": 6,
                    "awayValue": 1,
                    "renderType": 1,
                    "key": "shotsOffGoal"
                },
                {
                    "name": "تسديدات تم اعتراضها",
                    "home": "4",
                    "away": "2",
                    "compareCode": 1,
                    "statisticsType": "neutral",
                    "valueType": "event",
                    "homeValue": 4,
                    "awayValue": 2,
                    "renderType": 1,
                    "key": "blockedShots"
                },
                {
                    "name": "الركنيات",
                    "home": "4",
                    "away": "5",
                    "compareCode": 1,
                    "statisticsType": "positive",
                    "valueType": "event",
                    "homeValue": 4,
                    "awayValue": 5,
                    "renderType": 1,
                    "key": "corners"
                },
                {
                    "name": "التسللات",
                    "home": "2",
                    "away": "4",
                    "compareCode": 1,
                    "statisticsType": "negative",
                    "valueType": "event",
                    "homeValue": 2,
                    "awayValue": 4,
                    "renderType": 1,
                    "key": "offsides"
                },
            ]
        },
        {
            "groupName": "الدفاع",
            "statisticsItems": [

                {
                    "name": "مخالفات",
                    "home": "8",
                    "away": "11",
                    "compareCode": 1,
                    "statisticsType": "negative",
                    "valueType": "event",
                    "homeValue": 8,
                    "awayValue": 11,
                    "renderType": 1,
                    "key": "fouls"
                },
                {
                    "name": "تصديات حارس المرمى",
                    "home": "2",
                    "away": "5",
                    "compareCode": 1,
                    "statisticsType": "positive",
                    "valueType": "event",
                    "homeValue": 2,
                    "awayValue": 5,
                    "renderType": 1,
                    "key": "goalkeeperSaves"
                },
            ]
        },
        {
            "groupName": "البطاقات",
            "statisticsItems": [
                {
                    "name": "البطاقات الصفراء",
                    "home": "3",
                    "away": "0",
                    "compareCode": 1,
                    "statisticsType": "negative",
                    "valueType": "event",
                    "homeValue": 3,
                    "awayValue": 0,
                    "renderType": 1,
                    "key": "yellowCards"
                }
            ]
        }
    ],
    statisticsSummary: [
        {
            "name": "التسديدات",
            "home": "8",
            "away": "11",
            "compareCode": 1,
            "statisticsType": "negative",
            "valueType": "event",
            "homeValue": 8,
            "awayValue": 11,
            "renderType": 5,
            "key": "shots"
        },
        {
            "name": "مخالفات",
            "home": "2",
            "away": "5",
            "compareCode": 1,
            "statisticsType": "positive",
            "valueType": "event",
            "homeValue": 2,
            "awayValue": 5,
            "renderType": 5,
            "key": "fouls"
        },

    ]


}
