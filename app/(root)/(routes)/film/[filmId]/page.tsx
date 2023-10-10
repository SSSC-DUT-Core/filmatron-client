'use client'

import React, { useState, useEffect } from 'react';


import PrivateAccess from '@/components/private-access';
import { useGetFilmByIdQuery } from '@/graphql/generated';
import { formatDate } from '@/lib';
import {FilmRow } from '../../(homepage)/FilmRow/index';

import {FilmPosterDetail} from '../../(homepage)/filmPosterDetail/index';

import {FilmData, sectionFilmRow, FilmCardInRowProps } from '../../(homepage)/data';



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

  const NFTs = [
    {
      name: 'NFT 1',
      description: 'This is NFT 1',
      imageUrl: '/assets/images/nft1.png',
      collectionName: 'Collection 1',
      filmName: 'Wednesday',
      attributes: ['Attribute 1', 'Attribute 2'],
    },
    {
      name: 'NFT 2',
      description: 'This is NFT 2',
      imageUrl: './assets/NFTs/NFT2.png',
      collectionName: 'Collection 1',
      filmName: 'Wednesday',
      attributes: ['Attribute 3', 'Attribute 4'],
    },
    {
      name: 'NFT 3',
      description: 'This is NFT 3',
      imageUrl: './assets/NFTs/NFT2.png',
      collectionName: 'Collection 2',
      filmName: 'NGƯỜI VỢ CUỐI CÙNG',
      attributes: ['Attribute 5', 'Attribute 6'],
    },
    // Thêm các NFT khác tại đây
  ];

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

 const similarFilms: sectionFilmRow[] = 
 [
   {
     filmRowTitle: 'Current Film Campaign',
     filmRow: [
      {   id: "10",
          posterSrc: "/assets/images/film1.png",
          title: "Wednesday",
          logoSrc: "/assets/images/Logo-Wednesday.png",
          description:
              "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
          rating: 8.2,
          duration: 130,
          releaseDate: "Sep 23 2023",
          genres: ["DramaAdventure"],
          stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
          director: ["Simon McQuoid"],
      },
  
      {
          id: "10",title: "NGƯỜI VỢ CUỐI CÙNG",
          posterSrc: "/assets/images/film1.png",
          description: "test description",
          rating: 9.0,
          duration: 130,
          releaseDate: "Sep 23 2023",
          genres: ["DramaAdventure"],
  
          stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
  
          director: ["Simon McQuoid"],
  
      },
  
      {id: "10",
          posterSrc: "/assets/images/film1.png",
          title: "ÂM MƯU GÓT DÀY NHỌN",
          description: "test description",
          rating: 9.0,
          duration: 130,
          releaseDate: "Sep 23 2023",
          genres: ["Drama", "Adventure"],
          stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
  
                     director: ["Simon McQuoid"],
  
      },
  
      {id: "10",
          posterSrc: "/assets/images/film1.png",
          title: "CÔ HẦU GÁI",
          description: "test description",
          rating: 9.0,
          duration: 130,
          releaseDate: "Sep 23 2023",
          genres: ["Drama", "Adventure"],
          stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
  
                     director: ["Simon McQuoid"],
  
      },
  
      {id: "10",
          posterSrc: "/assets/images/film1.png",
          title: "Chị Chị Em Em",
          description: "test description",
          rating: 9.0,
          duration: 130,
          releaseDate: "Sep 23 2023",
          genres: ["Drama", "Adventure"],
          stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
  
                     director: ["Simon McQuoid"],
  
      },
      {id: "10",
      posterSrc: "/assets/images/film1.png",
      title: "Chị Chị Em Em",
      description: "test description",
      rating: 9.0,
      duration: 130,
      releaseDate: "Sep 23 2023",
      genres: ["Drama", "Adventure"],
      stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
  
                 director: ["Simon McQuoid"],
  
  },
  
      // Add more films here
      // Define the film data
  ]
   },
]

const redBandTrailer: sectionFilmRow[] = 
[
  {
    filmRowTitle: 'Red Band Trailer',
    filmRow: [
      {   id: "10",
          posterSrc: "/assets/images/film1.png",
          title: "Wednesday",
          logoSrc: "/assets/images/Logo-Wednesday.png",
          description:
              "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
          rating: 8.2,
          duration: 130,
          releaseDate: "Sep 23 2023",
          genres: ["DramaAdventure"],
          stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
          director: ["Simon McQuoid"],
      },
  
      {
          id: "10",title: "NGƯỜI VỢ CUỐI CÙNG",
          posterSrc: "/assets/images/film1.png",
          description: "test description",
          rating: 9.0,
          duration: 130,
          releaseDate: "Sep 23 2023",
          genres: ["DramaAdventure"],
  
          stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
  
          director: ["Simon McQuoid"],
  
      },
  
      {id: "10",
          posterSrc: "/assets/images/film1.png",
          title: "ÂM MƯU GÓT DÀY NHỌN",
          description: "test description",
          rating: 9.0,
          duration: 130,
          releaseDate: "Sep 23 2023",
          genres: ["Drama", "Adventure"],
          stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
  
                     director: ["Simon McQuoid"],
  
      },
  
      {id: "10",
          posterSrc: "/assets/images/film1.png",
          title: "CÔ HẦU GÁI",
          description: "test description",
          rating: 9.0,
          duration: 130,
          releaseDate: "Sep 23 2023",
          genres: ["Drama", "Adventure"],
          stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
  
                     director: ["Simon McQuoid"],
  
      },
  
      {id: "10",
          posterSrc: "/assets/images/film1.png",
          title: "Chị Chị Em Em",
          description: "test description",
          rating: 9.0,
          duration: 130,
          releaseDate: "Sep 23 2023",
          genres: ["Drama", "Adventure"],
          stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
  
                     director: ["Simon McQuoid"],
  
      },
      {id: "10",
      posterSrc: "/assets/images/film1.png",
      title: "Chị Chị Em Em",
      description: "test description",
      rating: 9.0,
      duration: 130,
      releaseDate: "Sep 23 2023",
      genres: ["Drama", "Adventure"],
      stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
  
                 director: ["Simon McQuoid"],
  
  },
  
      // Add more films here
      // Define the film data
  ]
  },
]



const prizeList = [
  {
    title: '10 free takes to the film',
    ticketLogo: './assets/ticket/ticket-logo.png',
    announcementDate: '2023-10-18T15:45:00',
    typeOfPrize: 'Ticket Event',
    prizeImg: './assets/filmDetail/gallery/galleryImg1.png',
    walletCreatorAddress: '4Y4s28YSYCuhomMEpa9wXwUotssQ5EN7EAzvUs3ZMZ9j',
    dateCreated: '2023-10-05T15:45:00.000Z', 
  },
  {
    title: '10 free takes to the film',
    announcementDate: '2023-10-18T15:45:00',
    ticketLogo: './assets/ticket/ticket-logo.png',
    typeOfPrize: 'Ticket Event',
    prizeImg: './assets/filmDetail/gallery/galleryImg1.png',
    walletCreatorAddress: '4Y4s28YSYCuhomMEpa9wXwUotssQ5EN7EAzvUs3ZMZ9j',
    dateCreated: '2023-10-05T15:45:00.000Z', 
  },
  {
    title: '10 free takes to the film',
    announcementDate: '2023-10-18T15:45:00',
    ticketLogo: './assets/ticket/ticket-logo.png',
    typeOfPrize: 'Ticket Event',
    prizeImg: './assets/filmDetail/gallery/galleryImg1.png',
    walletCreatorAddress: '4Y4s28YSYCuhomMEpa9wXwUotssQ5EN7EAzvUs3ZMZ9j',
    dateCreated: '2023-10-05T15:45:00.000Z', 
  },
]

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 "
        style={{
          padding: '0px 80px',
        }}
      >
        {/* Your JSX content */}
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

        {  similarFilms.map((sectionFilmRow: sectionFilmRow) => (
            <FilmRow
              key="similarFilms"
              filmRowTitle={sectionFilmRow.filmRowTitle}
              filmRow={sectionFilmRow.filmRow}
            />
          ))}


      </div>
    </div>
  );
};

export default HomepageDetail;
