import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export enum AdminProcessStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type CollectionMetadataDto = {
  name: Scalars['String']['input'];
  symbol: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type CreateAccountDto = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Role;
};

export type CreateCollectionNftDto = {
  filmId: Scalars['Float']['input'];
  metadata: CollectionMetadataDto;
};

export type CreateCompressedNftMetadata = {
  filmId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  symbol: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type CreateFilmDto = {
  avatar: Scalars['String']['input'];
  background: Scalars['String']['input'];
  description: Scalars['String']['input'];
  directors?: Array<Scalars['String']['input']>;
  duration: Scalars['Int']['input'];
  endDateSubscriber: Scalars['DateTime']['input'];
  genres?: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  releaseDate: Scalars['DateTime']['input'];
  stars?: Array<Scalars['String']['input']>;
  topCasts?: Array<FilmTopCastInput>;
};

export type FilmCompressedNftEntity = {
  __typename?: 'FilmCompressedNFTEntity';
  filmId: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type FilmCompressedNftEntityEdge = {
  __typename?: 'FilmCompressedNFTEntityEdge';
  cursor: Scalars['String']['output'];
  node: FilmCompressedNftEntity;
};

export type FilmEntity = {
  __typename?: 'FilmEntity';
  adminProcess: AdminProcessStatus;
  avatar: Scalars['String']['output'];
  background: Scalars['String']['output'];
  description: Scalars['String']['output'];
  directors: Array<Scalars['String']['output']>;
  duration: Scalars['Int']['output'];
  endDateSubscriber: Scalars['DateTime']['output'];
  genres: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  releaseDate: Scalars['DateTime']['output'];
  stars: Array<Scalars['String']['output']>;
  status: FilmStatus;
  topCasts?: Maybe<Array<FilmTopCast>>;
};

export type FilmEntityEdge = {
  __typename?: 'FilmEntityEdge';
  cursor: Scalars['String']['output'];
  node: FilmEntity;
};

export type FilmGalleryEntity = {
  __typename?: 'FilmGalleryEntity';
  filmId: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type: GalleryType;
  url: Scalars['String']['output'];
};

export type FilmGalleryEntityEdge = {
  __typename?: 'FilmGalleryEntityEdge';
  cursor: Scalars['String']['output'];
  node: FilmGalleryEntity;
};

export enum FilmStatus {
  ComingSoon = 'COMING_SOON',
  OnGoing = 'ON_GOING'
}

export type FilmTopCast = {
  __typename?: 'FilmTopCast';
  avatar?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type FilmTopCastInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export enum GalleryType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type Mutation = {
  __typename?: 'Mutation';
  createCollection: ReturnMessageBase;
  createCompressedNFTMetadata: ReturnMessageBase;
  createFilm: ReturnMessageBase;
  getMe: PersonEntity;
  mintCompressedNFT: FilmCompressedNftEntity;
  signIn: ReturnAccountDto;
  signInWithSocial: ReturnAccountDto;
  signUp: ReturnAccountDto;
  subscribeToWhitelist: ReturnMessageBase;
  /** This api used for update information about the film. For the top cast do not pass the value to the api. Can be used this to update the end date of subscribe for user to be a whitelist of film */
  updateFilm: ReturnMessageBase;
  updateInformation: ReturnMessageBase;
  upsertGalleryFilm: ReturnMessageBase;
};


export type MutationCreateCollectionArgs = {
  input: CreateCollectionNftDto;
};


export type MutationCreateCompressedNftMetadataArgs = {
  input: CreateCompressedNftMetadata;
};


export type MutationCreateFilmArgs = {
  input: CreateFilmDto;
};


export type MutationMintCompressedNftArgs = {
  cNFTId: Scalars['ID']['input'];
};


export type MutationSignInArgs = {
  input: SignInDto;
};


export type MutationSignInWithSocialArgs = {
  input: SignInWithSocialDto;
};


export type MutationSignUpArgs = {
  input: CreateAccountDto;
};


export type MutationSubscribeToWhitelistArgs = {
  filmId: Scalars['ID']['input'];
};


export type MutationUpdateFilmArgs = {
  input: UpdateFilmDto;
};


export type MutationUpdateInformationArgs = {
  input: UpdateInformationDto;
};


export type MutationUpsertGalleryFilmArgs = {
  input: UpsertGalleryFilmDto;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedCompressedNft = {
  __typename?: 'PaginatedCompressedNFT';
  edges?: Maybe<Array<FilmCompressedNftEntityEdge>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedFilm = {
  __typename?: 'PaginatedFilm';
  edges?: Maybe<Array<FilmEntityEdge>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedFilmGallery = {
  __typename?: 'PaginatedFilmGallery';
  edges?: Maybe<Array<FilmGalleryEntityEdge>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PersonEntity = {
  __typename?: 'PersonEntity';
  avatar?: Maybe<Scalars['String']['output']>;
  background?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  discord?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  publicKey?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  role: Role;
  twitter?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type PublicInformationFilmCollectionNft = {
  __typename?: 'PublicInformationFilmCollectionNFT';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type PublicInformationPerson = {
  __typename?: 'PublicInformationPerson';
  avatar?: Maybe<Scalars['String']['output']>;
  background?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publicKey?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getCompressedNFT: FilmCompressedNftEntity;
  getCompressedNFTsOfFilm: PaginatedCompressedNft;
  getFilmByCompressedNFT: FilmEntity;
  getFilmById: FilmEntity;
  getFilmCollectionNFTById: PublicInformationFilmCollectionNft;
  getFilmMakerById: PersonEntity;
  getFilms: PaginatedFilm;
  getGalleriesOfFilm: PaginatedFilmGallery;
  getGalleryById: FilmGalleryEntity;
  getSolanaAddress: ReturnSolanaAddressDto;
  getWhitelistOfFilm: Array<WhitelistEntity>;
  helloFilmMaker: Scalars['String']['output'];
  logOut: ReturnMessageBase;
  refreshToken: ReturnTokenDto;
};


export type QueryGetCompressedNftArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCompressedNfTsOfFilmArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filmId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFilmByCompressedNftArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetFilmByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFilmCollectionNftByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFilmMakerByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFilmsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGalleriesOfFilmArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filmId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGalleryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetWhitelistOfFilmArgs = {
  filmId: Scalars['ID']['input'];
};

export type ReturnAccountDto = {
  __typename?: 'ReturnAccountDto';
  accessToken: Scalars['String']['output'];
  person: PersonEntity;
  refreshToken: Scalars['String']['output'];
};

export type ReturnMessageBase = {
  __typename?: 'ReturnMessageBase';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ReturnSolanaAddressDto = {
  __typename?: 'ReturnSolanaAddressDto';
  address?: Maybe<Scalars['String']['output']>;
};

export type ReturnTokenDto = {
  __typename?: 'ReturnTokenDto';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export enum Role {
  Admin = 'ADMIN',
  Filmmaker = 'FILMMAKER',
  User = 'USER'
}

export type SignInDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignInWithSocialDto = {
  publicKey?: InputMaybe<Scalars['String']['input']>;
  role: Role;
};

export type UpdateFilmDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  directors?: InputMaybe<Array<Scalars['String']['input']>>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  endDateSubscriber?: InputMaybe<Scalars['DateTime']['input']>;
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  releaseDate?: InputMaybe<Scalars['DateTime']['input']>;
  stars?: InputMaybe<Array<Scalars['String']['input']>>;
  topCasts?: InputMaybe<Array<FilmTopCastInput>>;
};

export type UpdateInformationDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicKey?: InputMaybe<Scalars['String']['input']>;
};

export type UpsertGalleryFilmDto = {
  filmId: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type WhitelistEntity = {
  __typename?: 'WhitelistEntity';
  filmId: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  person: PublicInformationPerson;
  personId: Scalars['Float']['output'];
};

export type GetMeMutationVariables = Exact<{ [key: string]: never; }>;


export type GetMeMutation = { __typename?: 'Mutation', getMe: { __typename?: 'PersonEntity', id: string, publicKey?: string | null, email?: string | null, avatar?: string | null, background?: string | null, name: string, bio?: string | null, discord?: string | null, youtube?: string | null, twitter?: string | null, instagram?: string | null, role: Role } };

export type GetSolanaAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSolanaAddressQuery = { __typename?: 'Query', getSolanaAddress: { __typename?: 'ReturnSolanaAddressDto', address?: string | null } };

export type SignInWithSocialMutationVariables = Exact<{
  input: SignInWithSocialDto;
}>;


export type SignInWithSocialMutation = { __typename?: 'Mutation', signInWithSocial: { __typename?: 'ReturnAccountDto', accessToken: string } };

export type CreateCollectionMutationVariables = Exact<{
  input: CreateCollectionNftDto;
}>;


export type CreateCollectionMutation = { __typename?: 'Mutation', createCollection: { __typename?: 'ReturnMessageBase', success: boolean, message: string } };

export type CreateCompressedNftMetadataMutationVariables = Exact<{
  input: CreateCompressedNftMetadata;
}>;


export type CreateCompressedNftMetadataMutation = { __typename?: 'Mutation', createCompressedNFTMetadata: { __typename?: 'ReturnMessageBase', message: string, success: boolean } };

export type CreateFilmMutationVariables = Exact<{
  input: CreateFilmDto;
}>;


export type CreateFilmMutation = { __typename?: 'Mutation', createFilm: { __typename?: 'ReturnMessageBase', success: boolean, message: string } };

export type GetFilmByCompressedNftQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetFilmByCompressedNftQuery = { __typename?: 'Query', getFilmByCompressedNFT: { __typename?: 'FilmEntity', id: string, name: string, description: string, background: string, avatar: string, duration: number, releaseDate: any, genres: Array<string>, stars: Array<string>, directors: Array<string>, status: FilmStatus, endDateSubscriber: any } };

export type GetFilmByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetFilmByIdQuery = { __typename?: 'Query', getFilmById: { __typename?: 'FilmEntity', id: string, name: string, description: string, background: string, avatar: string, duration: number, releaseDate: any, genres: Array<string>, stars: Array<string>, directors: Array<string>, adminProcess: AdminProcessStatus, status: FilmStatus, endDateSubscriber: any, topCasts?: Array<{ __typename?: 'FilmTopCast', name: string, avatar?: string | null }> | null } };

export type GetFilmsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetFilmsQuery = { __typename?: 'Query', getFilms: { __typename?: 'PaginatedFilm', edges?: Array<{ __typename?: 'FilmEntityEdge', cursor: string, node: { __typename?: 'FilmEntity', id: string, name: string, description: string, duration: number, releaseDate: any, genres: Array<string>, stars: Array<string>, directors: Array<string>, adminProcess: AdminProcessStatus, status: FilmStatus, endDateSubscriber: any, avatar: string, background: string, topCasts?: Array<{ __typename?: 'FilmTopCast', name: string, avatar?: string | null }> | null } }> | null, pageInfo?: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } | null } };

export type GetCompressedNfTsOfFilmQueryVariables = Exact<{
  filmId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCompressedNfTsOfFilmQuery = { __typename?: 'Query', getCompressedNFTsOfFilm: { __typename?: 'PaginatedCompressedNFT', edges?: Array<{ __typename?: 'FilmCompressedNFTEntityEdge', cursor: string, node: { __typename?: 'FilmCompressedNFTEntity', id: string, name: string, symbol: string, uri: string, filmId: number } }> | null, pageInfo?: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } | null } };

export type MintCompressedNftMutationVariables = Exact<{
  cNFTId: Scalars['ID']['input'];
}>;


export type MintCompressedNftMutation = { __typename?: 'Mutation', mintCompressedNFT: { __typename?: 'FilmCompressedNFTEntity', id: string, name: string, symbol: string, uri: string, filmId: number } };


export const GetMeDocument = gql`
    mutation getMe {
  getMe {
    id
    publicKey
    email
    avatar
    background
    name
    bio
    discord
    youtube
    twitter
    instagram
    role
  }
}
    `;
export type GetMeMutationFn = Apollo.MutationFunction<GetMeMutation, GetMeMutationVariables>;

/**
 * __useGetMeMutation__
 *
 * To run a mutation, you first call `useGetMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getMeMutation, { data, loading, error }] = useGetMeMutation({
 *   variables: {
 *   },
 * });
 */
export function useGetMeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GetMeMutation, GetMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<GetMeMutation, GetMeMutationVariables>(GetMeDocument, options);
      }
export type GetMeMutationHookResult = ReturnType<typeof useGetMeMutation>;
export type GetMeMutationResult = Apollo.MutationResult<GetMeMutation>;
export type GetMeMutationOptions = Apollo.BaseMutationOptions<GetMeMutation, GetMeMutationVariables>;
export const GetSolanaAddressDocument = gql`
    query getSolanaAddress {
  getSolanaAddress {
    address
  }
}
    `;

/**
 * __useGetSolanaAddressQuery__
 *
 * To run a query within a React component, call `useGetSolanaAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSolanaAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSolanaAddressQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSolanaAddressQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSolanaAddressQuery, GetSolanaAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetSolanaAddressQuery, GetSolanaAddressQueryVariables>(GetSolanaAddressDocument, options);
      }
export function useGetSolanaAddressLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSolanaAddressQuery, GetSolanaAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetSolanaAddressQuery, GetSolanaAddressQueryVariables>(GetSolanaAddressDocument, options);
        }
export type GetSolanaAddressQueryHookResult = ReturnType<typeof useGetSolanaAddressQuery>;
export type GetSolanaAddressLazyQueryHookResult = ReturnType<typeof useGetSolanaAddressLazyQuery>;
export type GetSolanaAddressQueryResult = Apollo.QueryResult<GetSolanaAddressQuery, GetSolanaAddressQueryVariables>;
export const SignInWithSocialDocument = gql`
    mutation signInWithSocial($input: SignInWithSocialDto!) {
  signInWithSocial(input: $input) {
    accessToken
  }
}
    `;
export type SignInWithSocialMutationFn = Apollo.MutationFunction<SignInWithSocialMutation, SignInWithSocialMutationVariables>;

/**
 * __useSignInWithSocialMutation__
 *
 * To run a mutation, you first call `useSignInWithSocialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInWithSocialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInWithSocialMutation, { data, loading, error }] = useSignInWithSocialMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInWithSocialMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInWithSocialMutation, SignInWithSocialMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SignInWithSocialMutation, SignInWithSocialMutationVariables>(SignInWithSocialDocument, options);
      }
export type SignInWithSocialMutationHookResult = ReturnType<typeof useSignInWithSocialMutation>;
export type SignInWithSocialMutationResult = Apollo.MutationResult<SignInWithSocialMutation>;
export type SignInWithSocialMutationOptions = Apollo.BaseMutationOptions<SignInWithSocialMutation, SignInWithSocialMutationVariables>;
export const CreateCollectionDocument = gql`
    mutation createCollection($input: CreateCollectionNFTDto!) {
  createCollection(input: $input) {
    success
    message
  }
}
    `;
export type CreateCollectionMutationFn = Apollo.MutationFunction<CreateCollectionMutation, CreateCollectionMutationVariables>;

/**
 * __useCreateCollectionMutation__
 *
 * To run a mutation, you first call `useCreateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionMutation, { data, loading, error }] = useCreateCollectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCollectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCollectionMutation, CreateCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateCollectionMutation, CreateCollectionMutationVariables>(CreateCollectionDocument, options);
      }
export type CreateCollectionMutationHookResult = ReturnType<typeof useCreateCollectionMutation>;
export type CreateCollectionMutationResult = Apollo.MutationResult<CreateCollectionMutation>;
export type CreateCollectionMutationOptions = Apollo.BaseMutationOptions<CreateCollectionMutation, CreateCollectionMutationVariables>;
export const CreateCompressedNftMetadataDocument = gql`
    mutation createCompressedNFTMetadata($input: CreateCompressedNFTMetadata!) {
  createCompressedNFTMetadata(input: $input) {
    message
    success
  }
}
    `;
export type CreateCompressedNftMetadataMutationFn = Apollo.MutationFunction<CreateCompressedNftMetadataMutation, CreateCompressedNftMetadataMutationVariables>;

/**
 * __useCreateCompressedNftMetadataMutation__
 *
 * To run a mutation, you first call `useCreateCompressedNftMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompressedNftMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompressedNftMetadataMutation, { data, loading, error }] = useCreateCompressedNftMetadataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompressedNftMetadataMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCompressedNftMetadataMutation, CreateCompressedNftMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateCompressedNftMetadataMutation, CreateCompressedNftMetadataMutationVariables>(CreateCompressedNftMetadataDocument, options);
      }
export type CreateCompressedNftMetadataMutationHookResult = ReturnType<typeof useCreateCompressedNftMetadataMutation>;
export type CreateCompressedNftMetadataMutationResult = Apollo.MutationResult<CreateCompressedNftMetadataMutation>;
export type CreateCompressedNftMetadataMutationOptions = Apollo.BaseMutationOptions<CreateCompressedNftMetadataMutation, CreateCompressedNftMetadataMutationVariables>;
export const CreateFilmDocument = gql`
    mutation createFilm($input: CreateFilmDto!) {
  createFilm(input: $input) {
    success
    message
  }
}
    `;
export type CreateFilmMutationFn = Apollo.MutationFunction<CreateFilmMutation, CreateFilmMutationVariables>;

/**
 * __useCreateFilmMutation__
 *
 * To run a mutation, you first call `useCreateFilmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFilmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFilmMutation, { data, loading, error }] = useCreateFilmMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFilmMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateFilmMutation, CreateFilmMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateFilmMutation, CreateFilmMutationVariables>(CreateFilmDocument, options);
      }
export type CreateFilmMutationHookResult = ReturnType<typeof useCreateFilmMutation>;
export type CreateFilmMutationResult = Apollo.MutationResult<CreateFilmMutation>;
export type CreateFilmMutationOptions = Apollo.BaseMutationOptions<CreateFilmMutation, CreateFilmMutationVariables>;
export const GetFilmByCompressedNftDocument = gql`
    query getFilmByCompressedNFT($name: String!) {
  getFilmByCompressedNFT(name: $name) {
    id
    name
    description
    background
    avatar
    duration
    releaseDate
    genres
    stars
    directors
    status
    endDateSubscriber
  }
}
    `;

/**
 * __useGetFilmByCompressedNftQuery__
 *
 * To run a query within a React component, call `useGetFilmByCompressedNftQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilmByCompressedNftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilmByCompressedNftQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetFilmByCompressedNftQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetFilmByCompressedNftQuery, GetFilmByCompressedNftQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetFilmByCompressedNftQuery, GetFilmByCompressedNftQueryVariables>(GetFilmByCompressedNftDocument, options);
      }
export function useGetFilmByCompressedNftLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFilmByCompressedNftQuery, GetFilmByCompressedNftQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetFilmByCompressedNftQuery, GetFilmByCompressedNftQueryVariables>(GetFilmByCompressedNftDocument, options);
        }
export type GetFilmByCompressedNftQueryHookResult = ReturnType<typeof useGetFilmByCompressedNftQuery>;
export type GetFilmByCompressedNftLazyQueryHookResult = ReturnType<typeof useGetFilmByCompressedNftLazyQuery>;
export type GetFilmByCompressedNftQueryResult = Apollo.QueryResult<GetFilmByCompressedNftQuery, GetFilmByCompressedNftQueryVariables>;
export const GetFilmByIdDocument = gql`
    query getFilmById($id: ID!) {
  getFilmById(id: $id) {
    id
    name
    description
    background
    avatar
    duration
    releaseDate
    genres
    stars
    directors
    adminProcess
    status
    topCasts {
      name
      avatar
    }
    endDateSubscriber
  }
}
    `;

/**
 * __useGetFilmByIdQuery__
 *
 * To run a query within a React component, call `useGetFilmByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilmByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilmByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFilmByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetFilmByIdQuery, GetFilmByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetFilmByIdQuery, GetFilmByIdQueryVariables>(GetFilmByIdDocument, options);
      }
export function useGetFilmByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFilmByIdQuery, GetFilmByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetFilmByIdQuery, GetFilmByIdQueryVariables>(GetFilmByIdDocument, options);
        }
export type GetFilmByIdQueryHookResult = ReturnType<typeof useGetFilmByIdQuery>;
export type GetFilmByIdLazyQueryHookResult = ReturnType<typeof useGetFilmByIdLazyQuery>;
export type GetFilmByIdQueryResult = Apollo.QueryResult<GetFilmByIdQuery, GetFilmByIdQueryVariables>;
export const GetFilmsDocument = gql`
    query getFilms($first: Int, $after: String, $last: Int, $before: String) {
  getFilms(first: $first, after: $after, last: $last, before: $before) {
    edges {
      cursor
      node {
        id
        name
        description
        duration
        releaseDate
        genres
        stars
        directors
        adminProcess
        status
        topCasts {
          name
          avatar
        }
        endDateSubscriber
        avatar
        background
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;

/**
 * __useGetFilmsQuery__
 *
 * To run a query within a React component, call `useGetFilmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilmsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useGetFilmsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFilmsQuery, GetFilmsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetFilmsQuery, GetFilmsQueryVariables>(GetFilmsDocument, options);
      }
export function useGetFilmsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFilmsQuery, GetFilmsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetFilmsQuery, GetFilmsQueryVariables>(GetFilmsDocument, options);
        }
export type GetFilmsQueryHookResult = ReturnType<typeof useGetFilmsQuery>;
export type GetFilmsLazyQueryHookResult = ReturnType<typeof useGetFilmsLazyQuery>;
export type GetFilmsQueryResult = Apollo.QueryResult<GetFilmsQuery, GetFilmsQueryVariables>;
export const GetCompressedNfTsOfFilmDocument = gql`
    query getCompressedNFTsOfFilm($filmId: ID!, $first: Int, $after: String, $last: Int, $before: String) {
  getCompressedNFTsOfFilm(
    filmId: $filmId
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    edges {
      cursor
      node {
        id
        name
        symbol
        uri
        filmId
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;

/**
 * __useGetCompressedNfTsOfFilmQuery__
 *
 * To run a query within a React component, call `useGetCompressedNfTsOfFilmQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompressedNfTsOfFilmQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompressedNfTsOfFilmQuery({
 *   variables: {
 *      filmId: // value for 'filmId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useGetCompressedNfTsOfFilmQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetCompressedNfTsOfFilmQuery, GetCompressedNfTsOfFilmQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetCompressedNfTsOfFilmQuery, GetCompressedNfTsOfFilmQueryVariables>(GetCompressedNfTsOfFilmDocument, options);
      }
export function useGetCompressedNfTsOfFilmLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCompressedNfTsOfFilmQuery, GetCompressedNfTsOfFilmQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetCompressedNfTsOfFilmQuery, GetCompressedNfTsOfFilmQueryVariables>(GetCompressedNfTsOfFilmDocument, options);
        }
export type GetCompressedNfTsOfFilmQueryHookResult = ReturnType<typeof useGetCompressedNfTsOfFilmQuery>;
export type GetCompressedNfTsOfFilmLazyQueryHookResult = ReturnType<typeof useGetCompressedNfTsOfFilmLazyQuery>;
export type GetCompressedNfTsOfFilmQueryResult = Apollo.QueryResult<GetCompressedNfTsOfFilmQuery, GetCompressedNfTsOfFilmQueryVariables>;
export const MintCompressedNftDocument = gql`
    mutation mintCompressedNFT($cNFTId: ID!) {
  mintCompressedNFT(cNFTId: $cNFTId) {
    id
    name
    symbol
    uri
    filmId
  }
}
    `;
export type MintCompressedNftMutationFn = Apollo.MutationFunction<MintCompressedNftMutation, MintCompressedNftMutationVariables>;

/**
 * __useMintCompressedNftMutation__
 *
 * To run a mutation, you first call `useMintCompressedNftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMintCompressedNftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mintCompressedNftMutation, { data, loading, error }] = useMintCompressedNftMutation({
 *   variables: {
 *      cNFTId: // value for 'cNFTId'
 *   },
 * });
 */
export function useMintCompressedNftMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MintCompressedNftMutation, MintCompressedNftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<MintCompressedNftMutation, MintCompressedNftMutationVariables>(MintCompressedNftDocument, options);
      }
export type MintCompressedNftMutationHookResult = ReturnType<typeof useMintCompressedNftMutation>;
export type MintCompressedNftMutationResult = Apollo.MutationResult<MintCompressedNftMutation>;
export type MintCompressedNftMutationOptions = Apollo.BaseMutationOptions<MintCompressedNftMutation, MintCompressedNftMutationVariables>;