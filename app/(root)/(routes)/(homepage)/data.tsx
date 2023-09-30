import { type } from "os";

export type FilmData = {
    posterSrc: string;
    title: string;
    // filmID?: string;
    logoSrc?: string;
    description: string;

    rating: number;
    duration: number;

    // example: '2023-09-13'
    releaseDate: string;

    genres: string[];
    // name of actors
    stars: string;

    director: string;
};

// Name of row title and list of filmData
export type sectionFilmRow = {
    filmRowTitle: string;
    filmRow: FilmData[];
};

export type sectionFilmCol = {
    filmColTitle: string;
    filmCol: FilmData[];
};

export type FilmCardProps = {
    posterSrc: string;
    title: string;
    rating: number;
    duration: number;
    isSelected: boolean;
    onClick: () => void;
};

export type FilmCardInColProps = {
    posterSrc: string;

    title: string;
    rating: number;
    duration: number;
    releaseDate: string;
    isSelected: boolean;

    onClick: () => void;
};

export type FilmCardInRowProps = {
    posterSrc: string;
    title: string;
    rating: number;
    genre: string;
    // duration: number;
    // isSelected: boolean;
    onClick: () => void;
};

// export type FilmNFT

export type NFT = {
    name: string;
    description: string;
    imageUrl: string;
    collectionName: string;
    filmName: string;
    attributes: string[];
    // Các trường khác của NFT có thể được thêm vào ở đây
};

export type Collection = {
    name: string;
    nfts: NFT[];
    // Các trường khác của Collection có thể được thêm vào ở đây
};

export type CollectionsOfFilm = {
    filmName: string;

    // 1 film có thể có nhiều collection
    collections: Collection[];
    // Các trường khác của NFTOfFilm có thể được thêm vào ở đây
};

// export type LiveFilmSection = {
//   LiveFilms: FilmData[];
// };

export const films: FilmData[] = [
    {
        posterSrc: "/assets/images/film1.png",
        title: "Wednesday",
        logoSrc: "/assets/images/Logo-Wednesday.png",
        description:
            "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
        rating: 8.2,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],

        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },

    {
        title: "NGƯỜI VỢ CUỐI CÙNG",
        posterSrc: "/assets/images/film1.png",
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],

        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },

    {
        posterSrc: "/assets/images/film1.png",
        title: "ÂM MƯU GÓT DÀY NHỌN",
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],
        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },

    {
        posterSrc: "/assets/images/film1.png",
        title: "CÔ HẦU GÁI",
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],
        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },

    {
        posterSrc: "/assets/images/film1.png",
        title: "Chị Chị Em Em",
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],
        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },

    {
        posterSrc: "/assets/images/film1.png",
        title: "Chị Chị Em Em 2",
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],
        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },
    // Add more films here
    // Define the film data
];

// Dữ liệu cho NFTs
export const NFTs: NFT[] = [
    {
        name: "NFT 1",
        description: "This is NFT 1",
        imageUrl: "/assets/images/nft1.png",
        collectionName: "Collection 1",
        filmName: "Wednesday",
        attributes: ["Attribute 1", "Attribute 2"],
    },
    {
        name: "NFT 2",
        description: "This is NFT 2",
        imageUrl: "/assets/images/nft2.png",
        collectionName: "Collection 1",
        filmName: "Wednesday",
        attributes: ["Attribute 3", "Attribute 4"],
    },
    {
        name: "NFT 3",
        description: "This is NFT 3",
        imageUrl: "/assets/images/nft3.png",
        collectionName: "Collection 2",
        filmName: "NGƯỜI VỢ CUỐI CÙNG",
        attributes: ["Attribute 5", "Attribute 6"],
    },
    // Thêm các NFT khác tại đây
];

export const LiveFilms: FilmData[] = [
    {
        posterSrc: "/assets/images/film1.png",
        title: "Wednesday",
        logoSrc: "/assets/images/Logo-Wednesday.png",
        description:
            "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
        rating: 8.2,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],

        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },

    {
        title: "NGƯỜI VỢ CUỐI CÙNG",
        posterSrc: "/assets/images/film1.png",
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],

        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },

    {
        posterSrc: "/assets/images/film1.png",
        title: "ÂM MƯU GÓT DÀY NHỌN",
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],
        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },

    {
        posterSrc: "/assets/images/film1.png",
        title: "CÔ HẦU GÁI",
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],
        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },

    {
        posterSrc: "/assets/images/film1.png",
        title: "Chị Chị Em Em",
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],
        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },

    {
        posterSrc: "/assets/images/film1.png",
        title: "Chị Chị Em Em 2",
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: "Sep 23 2023",
        genres: ["Drama", "Adventure"],
        stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
        director: "Simon McQuoid",
    },
    // Add more films here
    // Define the film data
];

export const SectionFilmRowsPopularOfWeek: sectionFilmRow[] = [
    {
        filmRowTitle: "Popular of the week",
        filmRow: [
            {
                posterSrc: "/assets/images/film1.png",
                title: "Wednesday",
                logoSrc: "/assets/images/Logo-Wednesday.png",
                description:
                    "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
                rating: 8.2,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],

                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                title: "NGƯỜI VỢ CUỐI CÙNG",
                posterSrc: "/assets/images/film1.png",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],

                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "ÂM MƯU GÓT DÀY NHỌN",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "CÔ HẦU GÁI",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "Chị Chị Em Em",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "Chị Chị Em Em 2",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },
            // Add more films here
            // Define the film data
        ],
    },
];

export const listOfSectionFilmRows: sectionFilmRow[] = [
    {
        filmRowTitle: "Comedy",
        filmRow: [
            {
                posterSrc: "/assets/images/film1.png",
                title: "Wednesday",
                logoSrc: "/assets/images/Logo-Wednesday.png",
                description:
                    "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
                rating: 8.2,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],

                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                title: "NGƯỜI VỢ CUỐI CÙNG",
                posterSrc: "/assets/images/film1.png",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],

                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "ÂM MƯU GÓT DÀY NHỌN",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "CÔ HẦU GÁI",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "Chị Chị Em Em",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "Chị Chị Em Em 2",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },
            // Add more films here
            // Define the film data
        ],
    },

    {
        filmRowTitle: "Drama",
        filmRow: [
            {
                posterSrc: "/assets/images/film1.png",
                title: "Wednesday",
                logoSrc: "/assets/images/Logo-Wednesday.png",
                description:
                    "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
                rating: 8.2,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],

                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                title: "NGƯỜI VỢ CUỐI CÙNG",
                posterSrc: "/assets/images/film1.png",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],

                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "ÂM MƯU GÓT DÀY NHỌN",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "CÔ HẦU GÁI",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "Chị Chị Em Em",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },

            {
                posterSrc: "/assets/images/film1.png",
                title: "Chị Chị Em Em 2",
                description: "test description",
                rating: 9.0,
                duration: 130,
                releaseDate: "Sep 23 2023",
                genres: ["Drama", "Adventure"],
                stars: "Lewis Tan, Jessica McNamee, Josh Lawson",
                director: "Simon McQuoid",
            },
            // Add more films here
            // Define the film data
        ],
    },
];
