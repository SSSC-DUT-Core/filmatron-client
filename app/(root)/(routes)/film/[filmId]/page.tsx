'use client'

import React, { useState } from 'react';


import PrivateAccess from '@/src/components/private-access';
import { FilmEntity, useGetCompressedNfTsOfFilmQuery, useGetFilmByIdQuery, useGetFilmsQuery, useGetSolanaAddressQuery } from '@/graphql/generated';
import { formatDate, mapFilmsFromGraphQLResponse } from '@/src/lib';
import {FilmPosterDetail} from '@/src/components/Film/filmPosterDetail/index';
import {FilmRow } from '@/src/components/Film/FilmRow/index';
import Image from 'next/image';
import { LockIcon } from '@/public/assets';
import PrivateAccessImage from "../../../../../images/private-access.png";
import { mapFilmNftsFromGraphQLResponse } from '../../../../../src/lib/utils';


interface CNFT {
    id: string;
    name: string;
    description?: string;
    symbol: string;
}


interface HomepageDetailProps {
  params: { filmId: string }
}

const HomepageDetail = ({
  params: { filmId },
}: HomepageDetailProps) => {
   const getAssetsByOwner = async (ownerAddress: string) => {
       const url = `https://devnet.helius-rpc.com/?api-key=ea771cf6-1e92-4e45-a2fc-e8bd8f6ae6a0`;
       const response = await fetch(url, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify({
               jsonrpc: "2.0",
               id: "my-id",
               method: "getAssetsByOwner",
               params: {
                   ownerAddress,
                   page: 1,
                   limit: 1000,
               },
           }),
       });
       const { result } = await response.json();
       return result;
   };

  const {data: getFilmById,loading,error} = useGetFilmByIdQuery({
    variables: {
        id: filmId
    },
  })

  const { data: conpressedNFT } = useGetCompressedNfTsOfFilmQuery({
      variables: {
          filmId,
      },
  });

  const compressedNFTId = conpressedNFT?.getCompressedNFTsOfFilm.edges?.[0]?.node?.id;

  const {
    data: films,
} = useGetFilmsQuery({
    variables: {},
    fetchPolicy: "network-only", // Force a network request
    onCompleted: data => {
        setFilmList(mapFilmsFromGraphQLResponse(data));
    },
});

   const accessToken = localStorage.getItem("access_token") ?? "";
   const { data: getSolanaAddress } = useGetSolanaAddressQuery({
       context: {
           headers: {
               Authorization: accessToken,
           },
       },
       onCompleted: data => {
           getAssetsByOwner(data.getSolanaAddress.address).then(data => {
               setListCnft(
                   data?.items.map((item: any) => ({
                       id: item.id,
                       name: item.content.metadata.name,
                       description: item.content.metadata.description,
                       symbol: item.content.metadata.symbol,
                   }))
               );
           });
       },
   });

  const {data: filmsNftsData} = useGetCompressedNfTsOfFilmQuery(
    {
      variables: {
        filmId 
      },
      fetchPolicy: 'network-only', 
    }

   )
  const [filmList, setFilmList] = useState<FilmEntity[]>([]);
  const film = getFilmById?.getFilmById;
  const filmPosterDetail = {
    posterSrc: '/assets/images/film1.png',
    title: 'Wednesday',
    logoSrc: '/assets/images/Logo-Wednesday.png',
    description: "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
    rating: 8.2,
    duration: 130,
    releaseDate: 'Sep 23 2023',
    genres: ['Drama', 'Adventure'], 
  
    stars: ['Lewis Tan, Jessica McNamee, Josh Lawson'],
    director: ['Simon McQuoid'],

    NFTClaimImg: './assets/NFTs/NFT4.png',
    NFTEventName: 'Wednesday',

    expirationDate: '2023-10-18',

    trailerVideo: 'link vid from youtube',
    trailerImg: '/assets/images/film1.png',

    eventImg: './assets/filmDetail/gallery/galleryImg1.png',
  }



 const [listCnft, setListCnft] = useState<CNFT[]>([]);
 const filmNfts = mapFilmNftsFromGraphQLResponse(filmsNftsData)
 const isPrivateAccess = 
 filmNfts.some(item => listCnft.some(ownedNft => ownedNft.name === item.name));

  return (
      <div className="flex-col">
          <div
              className="flex-1 space-y-4 "
              style={{
                  padding: "0px 80px",
              }}
          >
              {film ? (
                  <FilmPosterDetail
                      posterSrc={film.background}
                      title={film?.name}
                      duration={film.duration}
                      releaseDate={formatDate(film.releaseDate)}
                      genres={film.genres}
                      stars={film.stars}
                      director={film.directors}
                      NFTClaimImg={filmPosterDetail.NFTClaimImg}
                      NFTEventName={filmPosterDetail.NFTEventName}
                      expirationDate={filmPosterDetail.expirationDate}
                      trailerVideo={filmPosterDetail.trailerVideo}
                      trailerImg={film.avatar}
                      eventImg={filmPosterDetail.eventImg}
                      filmId={filmId}
                      listCnft={filmNfts}
                  />
              ) : (
                  // Render a fallback component or message when film is undefined
                  null
              )}

              <div className="relative">
                  {!isPrivateAccess ? (
                      <>
                          <div className="absolute top-0 z-40 left-0 w-full h-full backdrop-blur-md rounded-3xl bg-white/10" />
                          <div className="w-full h-full flex justify-center items-center">
                              <div className="flex absolute z-50 top-[20%] flex-col space-y-6 justify-center items-center">
                                  <Image
                                      src={LockIcon}
                                      alt="lock-icon"
                                      width={40}
                                      height={40}
                                  />
                                  <p className="text-3xl text-white py-3 font-semibold">
                                      You need an NFT to unlock exclusive
                                      content
                                  </p>
                                  <Image
                                      src={PrivateAccessImage}
                                      alt="lock-icon"
                                      width={640}
                                      height={640}
                                  />
                              </div>
                          </div>
                      </>
                  ) : null}

                  <PrivateAccess />
              </div>

              <FilmRow
                  key="Current Film Campaigns"
                  filmRowTitle="Current Film Campaigns"
                  filmRow={filmList}
              />
          </div>
      </div>
  );
};

export default HomepageDetail;
