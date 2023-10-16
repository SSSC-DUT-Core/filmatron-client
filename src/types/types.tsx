import { FilmEntity } from "@/graphql/generated";


export type FilmData = {
    id: string;
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
    stars: string[];

    director: string[];
};

// Name of row title and list of filmData
export type sectionFilmRow = {
    filmRowTitle: string;
    filmRow: FilmEntity[];
};

export type sectionFilmCol = {
    filmColTitle: string;
    filmCol: FilmEntity[];
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
    genre: string[];
    title: string;
    mostClaimRank?: number;
    rating?: number;
    duration: number;
    releaseDate?: string;
    isSelected: boolean;

    onClick: () => void;
};

export type FilmCardInRowProps = {
    posterSrc: string;
    title: string;
    rating?: number;
    genre: string;
    onClick?: () => void;
};


export type NFT = {
    name: string;
    description: string;
    imageUrl: string;
    collectionName: string;
    filmName: string;
    attributes: string[];
};

export type Collection = {
    name: string;
    nfts: NFT[];
};

export type CollectionsOfFilm = {
    filmName: string;
    collections: Collection[];
};


export interface CNFT {
    id: string;
    name: string;
    description?: string;
    symbol: string;
    image: string;
    author?: string;
}

export type filmTrailer = {
    id: string;
    trailerVideo: string;
};

export const listTrailerVideoFetching = [
    {
        id: "1",
        trailerVideo: "https://www.youtube.com/watch?v=qdURq3NXQ0U", 
    },
    {
        id: "10",
        trailerVideo: "https://www.youtube.com/watch?v=ygvNCEbMusE", 
    },
    {
        id: "12",
        trailerVideo: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ", 
    },
    {
        id: "20",
        trailerVideo: "https://www.youtube.com/watch?v=FV3bqvOHRQo", 
    },
];
