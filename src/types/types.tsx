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
    rating?: number;
    duration: number;
    releaseDate: string;
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
];
