export interface IResponse {
    id: number;
    message: string;
    time: string;
    username: string;
    image: string;
    like: number;
    unlike: number;
}

export interface IChatMessageAPI {
    id: number;
    message: string;
    time: string;
    like: number;
    unlike: number;
    username: string;
    image: string;
    responses: IResponse[];
}

export const chatApi = [
    {
        id: 1,
        message: "كرة القدم هي الرياضة الأكثر شعبية في العالم.",
        time: "2024-02-09T10:00:00Z",
        like: 12,
        unlike: 2,
        username: "Ali",
        image: "https://lh3.googleusercontent.com/a/ACg8ocJSWNecv3P29LGg6twaCBsZsg-LDPerqt9AkUzP2s-y23xLWA=s300-c",
        responses: [
            {
                id: 1,
                message: "I agree! Football brings people together.",
                time: "2024-02-09T10:05:00Z",
                username: "Sarah",
                image: "https://lh3.googleusercontent.com/a-/AOh14GhTfOcg_C-xcEphNT2MSprHgGkyxUh7_4NHPJYBXg=s300-c",
                like: 15,
                unlike: 7,
            },
            {
                id: 2,
                message: "نعم، الجميع يحب مشاهدة المباريات.",
                time: "2024-02-09T10:10:00Z",
                username: "Omar",
                image: "",
                like: 12,
                unlike: 2,
            }
        ]
    },
    {
        id: 2,
        message: "أفضل الفرق في الدوري الإنجليزي هو مانشستر سيتي.",
        time: "2024-08-09T10:20:00Z",
        like: 8,
        unlike: 1,
        username: "Khalid",
        image: "",
        responses: [
        ]
    },
    {
        id: 3,
        message: "أين ستقام كأس العالم القادمة؟",
        time: "2024-08-09T10:40:00Z",
        like: 15,
        unlike: 3,
        username: "Mona",
        image: "https://lh3.googleusercontent.com/a/ACg8ocL1ICqWLvrUU70yjNHQPqUXXXP5XgrtCeeCvJp7AJKCX93LC00=s300-c",
        "responses": [
            {
                id: 7,
                message: "The next World Cup will be in the USA, Canada, and Mexico.",
                time: "2024-08-09T10:45:00Z",
                username: "Lucas",
                image: "https://www.ysscores.com/images/unknown-man.svg",
                like: 18,
                unlike: 2,
            },
            {
                id: 8,
                message: "بالتأكيد، ستكون بطولة رائعة.",
                time: "2024-08-09T10:50:00Z",
                username: "Nadia",
                image: "",
                like: 1,
                unlike: 52,
            },
            {
                id: 9,
                message: "I can't wait to see the matches in these countries!",
                time: "2024-08-09T10:55:00Z",
                username: "Chris",
                image: "",
                like: 0,
                unlike: 0,
            }
        ]
    },
    {
        id: 4,
        message: "هل تعتقد أن الأرجنتين ستفوز بكأس العالم القادم؟",
        time: "2024-08-09T11:00:00Z",
        like: 10,
        unlike: 5,
        username: "Rami",
        image: "https://lh3.googleusercontent.com/a/AATXAJxMzKe6j7Ytlf7i_oQGsleFy2wvlrFvphc5amAa=s300-c",
        "responses": [
            {
                id: 10,
                message: "Argentina has a strong team, but it will be tough.",
                time: "2024-08-09T11:05:00Z",
                username: "Natalie",
                image: "https://www.ysscores.com/images/unknown-man.svg",
                like: 12,
                unlike: 2,
            },
            {
                id: 11,
                message: "الأرجنتين لديها فريق رائع ولكن المنافسة ستكون قوية.",
                time: "2024-08-09T11:10:00Z",
                username: "Ali",
                image: "https://lh3.googleusercontent.com/a/ACg8ocL1ICqWLvrUU70yjNHQPqUXXXP5XgrtCeeCvJp7AJKCX93LC00=s300-c",
                like: 12,
                unlike: 2,
            },
            {
                id: 12,
                message: "Yes, the competition will be fierce among all teams.",
                time: "2024-08-09T11:15:00Z",
                username: "Jasmine",
                image: "https://lh3.googleusercontent.com/a/AATXAJxMzKe6j7Ytlf7i_oQGsleFy2wvlrFvphc5amAa=s300-c",
                like: 14,
                unlike: 32,
            }
        ]
    },
    {
        id: 5,
        message: "ما هي توقعاتك لمباراة اليوم؟",
        time: "2024-08-09T11:20:00Z",
        like: 14,
        unlike: 4,
        username: "Zaid",
        image: "https://lh3.googleusercontent.com/a/AATXAJxMzKe6j7Ytlf7i_oQGsleFy2wvlrFvphc5amAa=s300-c",
        "responses": [
            {
                id: 14,
                message: "أعتقد أن المباراة ستكون متقاربة جداً.",
                time: "2024-08-09T11:30:00Z",
                username: "Mohamed",
                image: "https://lh3.googleusercontent.com/a/ACg8ocL1ICqWLvrUU70yjNHQPqUXXXP5XgrtCeeCvJp7AJKCX93LC00=s300-c",
                like: 0,
                unlike: 4,
            },
            {
                id: 15,
                message: "Yes, it could go either way depending on the team's form.",
                time: "2024-08-09T11:35:00Z",
                username: "Laura",
                image: "",
                like: 1,
                unlike: 2,
            }
        ]
    },
    {
        id: 6,
        message: "ما هو أفضل لاعب كرة قدم في تاريخ الدوري الإسباني؟",
        time: "2024-08-09T11:40:00Z",
        like: 17,
        unlike: 2,
        username: "Youssef",
        image: "https://lh3.googleusercontent.com/a/ACg8ocK2BvvsMVB0OZ0H3f5x5BSNJuGJiKwDJldb5zFTd8VRK6k=s300-c",
        "responses": [
            {
                id: 16,
                message: "Many would say Lionel Messi. He's had an incredible career.",
                time: "2024-08-09T11:45:00Z",
                username: "Daniel",
                image: "",
                like: 12,
                unlike: 22,
            },
        ]
    },
    {
        id: 7,
        message: "هل تعتقد أن هناك فرص للمفاجآت في كأس العالم؟",
        time: "2024-08-09T12:00:00Z",
        like: 9,
        unlike: 6,
        username: "Huda",
        image: "",
        "responses": [
            {
                id: 19,
                message: "Definitely, every tournament has its surprises.",
                time: "2024-08-09T12:05:00Z",
                username: "Matthew",
                image: "https://lh3.googleusercontent.com/a/ACg8ocJLA1JmA8kLGa7YfwQ6-WOQ0CfZ2RM4OmGopchdzL0HogegpA=s300-c",
                like: 12,
                unlike: 2,
            },
            {
                id: 20,
                message: "بالتأكيد، كل بطولة تملك مفاجآتها الخاصة.",
                time: "2024-08-09T12:10:00Z",
                username: "Amina",
                image: "https://lh3.googleusercontent.com/a/ACg8ocK2BvvsMVB0OZ0H3f5x5BSNJuGJiKwDJldb5zFTd8VRK6k=s300-c",
                like: 12,
                unlike: 2,
            },
            {
                id: 21,
                message: "I agree, the underdog teams often perform well.",
                time: "2024-08-09T12:15:00Z",
                username: "Michael",
                image: "https://www.ysscores.com/images/unknown-man.svg",
                like: 2,
                unlike: 2,
            }
        ]
    }
]
