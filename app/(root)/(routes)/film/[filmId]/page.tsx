'use client'

import React, { useState } from 'react';


import PrivateAccess from '@/components/private-access';
import { FilmEntity, useGetFilmByIdQuery, useGetFilmsQuery } from '@/graphql/generated';
import { formatDate, mapFilmsFromGraphQLResponse } from '@/src/lib';
import {FilmPosterDetail} from '@/components/Film/filmPosterDetail/index';
import {FilmRow } from '@/components/Film/FilmRow/index';





interface HomepageDetailProps {
  params: { filmId: string }
}

const HomepageDetail = ({
  params: { filmId },
}: HomepageDetailProps) => {
  const {data: getFilmById,loading,error} = useGetFilmByIdQuery({
    variables: {
        id: filmId
    }
  })
  const {
    data: films,
} = useGetFilmsQuery({
    variables: {},
    fetchPolicy: "network-only", // Force a network request
    onCompleted: data => {
        setFilmList(mapFilmsFromGraphQLResponse(data));
    },
});
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


 const filmPosterDetailImage = {
  galleryImgUrls: [
    './assets/filmDetail/gallery/galleryImg1.png',
    './assets/filmDetail/gallery/galleryImg2.png',
    './assets/filmDetail/gallery/galleryImg3.png',
    './assets/filmDetail/gallery/galleryImg1.png',
    './assets/filmDetail/gallery/galleryImg2.png',
  ],
  startAvaUrls: [
    './assets/filmDetail/startAva/ava1.png',
    './assets/filmDetail/startAva/ava1.png',
    './assets/filmDetail/startAva/ava1.png',
    './assets/filmDetail/startAva/ava1.png',
    './assets/filmDetail/startAva/ava1.png',
    './assets/filmDetail/startAva/ava1.png',
  ],
  redBandTrailers: [
    {
      redBandTrailerImg: '/assets/images/film1.png',
      redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      redBandTrailerImg: '/assets/images/film1.png',
      redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      redBandTrailerImg: '/assets/images/film1.png',
      redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      redBandTrailerImg: '/assets/images/film1.png',
      redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      redBandTrailerImg: '/assets/images/film1.png',
      redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      redBandTrailerImg: '/assets/images/film1.png',
      redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      redBandTrailerImg: '/assets/images/film1.png',
      redBandTrailerVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
  ],

  BehindTheScences: [
    {
      BehindTheScenceImg: '/assets/images/film1.png',
      BehindTheScenceVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      BehindTheScenceImg: '/assets/images/film1.png',
      BehindTheScenceVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      BehindTheScenceImg: '/assets/images/film1.png',
      BehindTheScenceVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      BehindTheScenceImg: '/assets/images/film1.png',
      BehindTheScenceVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      BehindTheScenceImg: '/assets/images/film1.png',
      BehindTheScenceVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      BehindTheScenceImg: '/assets/images/film1.png',
      BehindTheScenceVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
    {
      BehindTheScenceImg: '/assets/images/film1.png',
      BehindTheScenceVideoUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    },
  ],
 }

 

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 "
        style={{
          padding: '0px 80px',
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
        />
      ) : (
        // Render a fallback component or message when film is undefined
        <div>No film data available</div>
      )}
          <PrivateAccess/>

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
