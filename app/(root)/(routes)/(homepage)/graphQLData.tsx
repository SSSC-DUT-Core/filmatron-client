// graphQLData.tsx

export type ReturnMessageBase = {
    success: boolean;
    message: string;
  };
  
  export type Query = {
    getWhitelistOfFilm(filmId: string): WhitelistEntity[];
    getFilmCollectionNFTById(id: string): PublicInformationFilmCollectionNFT;
    getCompressedNFTsOfFilm(
      filmId: string,
      first?: number,
      after?: string,
      last?: number,
      before?: string
    ): PaginatedCompressedNFT;
    getCompressedNFT(id: string): FilmCompressedNFTEntity;
    getFilmById(id: string): FilmEntity;
    getFilms(
      first?: number,
      after?: string,
      last?: number,
      before?: string
    ): PaginatedFilm;
    getGalleriesOfFilm(
      filmId: string,
      first?: number,
      after?: string,
      last?: number,
      before?: string
    ): PaginatedFilmGallery;
    getGalleryById(id: string): FilmGalleryEntity;
    logOut: ReturnMessageBase;
    refreshToken: ReturnTokenDto;
    helloFilmMaker: string;
    getFilmMakerById(id: string): PersonEntity;
  };
  
  export type WhitelistEntity = {
    id: string;
    personId: number;
    filmId: number;
    person: PublicInformationPerson;
  };
  
  export type PublicInformationPerson = {
    id: string;
    publicKey: string;
    email: string;
    avatar: string;
    background: string;
    name: string;
    bio: string;
  };
  
  export type PublicInformationFilmCollectionNFT = {
    id: string;
    name: string;
    symbol: string;
    uri: string;
  };
  
  export type PaginatedCompressedNFT = {
    edges: FilmCompressedNFTEntityEdge[];
    pageInfo: PageInfo;
  };
  
  export type FilmCompressedNFTEntityEdge = {
    cursor: string;
    node: FilmCompressedNFTEntity;
  };
  
  export type FilmCompressedNFTEntity = {
    id: string;
    name: string;
    symbol: string;
    uri: string;
    filmId: number;
  };
  
  export type PageInfo = {
    startCursor: string;
    endCursor: string;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
  
  export type FilmEntity = {
    id: string;
    name: string;
    description: string;
    duration: number;
    releaseDate: string;
    genres: FilmGenre[];
    stars: string[];
    directors: string[];
    adminProcess: AdminProcessStatus;
    status: FilmStatus;
    topCasts: FilmTopCast[];
    endDateSubscriber: DateTime;
  };
  
  export enum FilmGenre {
    DRAMA,
    ADVENTURE,
    COMEDY,
  }
  
  export enum AdminProcessStatus {
    APPROVED,
    REJECTED,
    PENDING,
  }
  
  export enum FilmStatus {
    COMING_SOON,
    ON_GOING,
  }
  
  export type FilmTopCast = {
    name: string;
    avatar: string;
  };
  
  // A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.
  export type DateTime = string;
  
  export type PaginatedFilm = {
    edges: FilmEntityEdge[];
    pageInfo: PageInfo;
  };
  
  export type FilmEntityEdge = {
    cursor: string;
    node: FilmEntity;
  };
  
  export type PaginatedFilmGallery = {
    edges: FilmGalleryEntityEdge[];
    pageInfo: PageInfo;
  };
  
  export type FilmGalleryEntityEdge = {
    cursor: string;
    node: FilmGalleryEntity;
  };
  
  export type FilmGalleryEntity = {
    id: string;
    name?: string;
    url: string;
    filmId: number;
  };
  
  export type ReturnTokenDto = {
    accessToken: string;
    refreshToken: string;
  };
  
  export type PersonEntity = {
    id: string;
    publicKey: string;
    email: string;
    password: string;
    avatar: string;
    background: string;
    name: string;
    bio: string;
    discord: string;
    youtube: string;
    twitter: string;
    instagram: string;
    refreshToken: string;
    role: Role;
  };
  
  export enum Role {
    ADMIN,
    USER,
    FILMMAKER,
  }
  
  export type Mutation = {
    updateInformation(input: UpdateInformationDto): ReturnMessageBase;
    createCollection(input: CreateCollectionNFTDto): ReturnMessageBase;
    createCompressedNFTMetadata(
      input: CreateCompressedNFTMetadata
    ): ReturnMessageBase;
    mintCompressedNFT(cNFTId: string): ReturnMessageBase;
    subscribeToWhitelist(filmId: string): ReturnMessageBase;
    createFilm(input: CreateFilmDto): ReturnMessageBase;
  
    // This api used for update information about the film. For the top cast do not pass the value to the api. Can be used this to update the end date of subscribe for user to be a whitelist of film
    updateFilm(input: UpdateFilmDto): ReturnMessageBase;
    upsertGalleryFilm(input: UpsertGalleryFilmDto): ReturnMessageBase;
    signUp(input: CreateAccountDto): ReturnAccountDto;
    signIn(input: SignInDto): ReturnAccountDto;
    signInWithSocial(input: SignInWithSocialDto): ReturnAccountDto;
  };
  
  export type UpdateInformationDto = {
    publicKey: string;
    avatar: string;
    background: string;
    name: string;
    bio: string;
  };
  
  export type CreateCollectionNFTDto = {
    filmId: number;
    metadata: CollectionMetadataDto;
  };
  
  export type CollectionMetadataDto = {
    name: string;
    symbol: string;
    uri: string;
  };
  
  export type CreateCompressedNFTMetadata = {
    filmId: string;
    name: string;
    symbol: string;
    uri: string;
  };
  
  export type CreateFilmDto = {
    name: string;
    description: string;
    duration: number;
    releaseDate: string;
    genres: FilmGenre[];
    stars: string[];
    directors: string[];
    topCasts: FilmTopCastInput[];
    endDateSubscriber: DateTime;
  };
  
  export type FilmTopCastInput = {
    name: string;
    avatar: string;
  };
  
  export type UpdateFilmDto = {
    name?: string;
    description?: string;
    duration?: number;
    releaseDate?: string;
    genres?: FilmGenre[];
    stars?: string[];
    directors?: string[];
    topCasts?: FilmTopCastInput[];
    endDateSubscriber?: DateTime;
    id: string;
  };
  
  export type UpsertGalleryFilmDto = {
    id?: number;
    name: string;
    url: string;
    filmId: number;
  };
  
  export type ReturnAccountDto = {
    accessToken: string;
    refreshToken: string;
    person: PersonEntity;
  };
  
  export type CreateAccountDto = {
    name: string;
    email: string;
    password: string;
    role: Role;
  };
  
  export type SignInDto = {
    email: string;
    password: string;
  };
  
  export type SignInWithSocialDto = {
    publicKey: string;
  };
  