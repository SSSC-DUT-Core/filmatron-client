'use client'
import React, { useState, useEffect } from 'react';


import {FilmRow } from '../FilmRow/index';

import {FilmPosterDetail} from '../filmPosterDetail/index';

import { FilmCardInColProps, sectionFilmCol, films, NFT, FilmData, sectionFilmRow, FilmCardInRowProps } from '../data';




const ExclusivePhoto = ({ galleryImgUrls }: { galleryImgUrls: string[] })=> {
  const [isExpanded, setIsExpanded] = useState(false);
  // const initialImages = galleryImgUrls.slice(0, 5);
  
  const additionalImages = galleryImgUrls.slice(5);

  const handleExpansionToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full'>


      <div>
      {/* Row 1 */}
        <div style={{ 
          display: 'flex', 
          marginBottom: '24px',
          gap: '20px',
        }}>
          <img
            src={galleryImgUrls[0]}
            alt=""
            style={{ width: '50%', height: '360px' }}
          />
          <img
            src={galleryImgUrls[1]}
            alt=""
            style={{ width: '50%', height: '360px' }}
          />
        </div>

        {/* Row 2 */}
        <div style={{ marginBottom: '24px' }}>
          <img
            src={galleryImgUrls[2]}
            alt=""
            style={{ width: '100%', height: '680px' }}
          />
        </div>

        {/* Row 3 */}
        <div style={{  
          display: 'flex', 
          // marginBottom: '24px',
          gap: '20px',
        }}>
          <img
            src={galleryImgUrls[3]}
            alt=""
            style={{ width: '50%', height: '360px', marginRight: '20px' }}
          />
          <img
            src={galleryImgUrls[4]}
            alt=""
            style={{ width: '50%', height: '360px' }}
          />
        </div>
      </div>


      {/* show more bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: '#1E1E1E',
          color: '#FFFFFF',
          fontWeight: 'bold',
          width: '100%',
          height: '60.96px',
        }}
        onClick={handleExpansionToggle}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </div>

      {/* display more */}
      {isExpanded &&
        additionalImages.map((url: any, index: any) => (
          <div style={{ marginTop: '24px' }}>
            {/* <img
              key={index}
              src={url}
              alt=""
              style={{
                width: '630px',
                height: '360px',
                marginRight: index % 2 === 0 ? '20px' : '0px',
              }}
            /> */}
          </div>
        ))}
    </div>
  );
};


const FilmCardDetailInRow = ({ posterSrc, title, rating, genre, onClick }: FilmCardInRowProps) => {
  const imageCardRowStyle = {
    // border: '10px solid red',
    backgroundImage: `url(${posterSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
    width: "248px",
    height: "183px",
  
    borderRadius: '16px',   

    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  };  
  
  
  return (
    <div 
      className="FilmCardDeInRow-BG"
      onClick={onClick}
    >
      
       <div className="FilmCardInRow"
        style={{        
        // width: '280px',
        // height: '332.04px',
        // borderRadius: '16px',

        // padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '8px',
        backgroundColor:'#0f0f29', 

        // marginRight: '16px',

      }}>
        
        {/* film card image */}
        <div style={imageCardRowStyle}>
          <p className='text-white '
            style={{
              fontSize: '16px',
              fontWeight: 'medium',
              lineHeight: '24px',

            }}>
              {title}
          </p>   
        </div>
        
      
      </div>
    </div>
  );
};

export const FilmRowDetail = ({ filmRowTitle, filmRow } : sectionFilmRow) => {
  const posterStyle = {
    // border: '1px solid red',
    backgroundImage: `url(${filmRow[0].posterSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: "648px", 
    width: "100%",
  

    padding: '0px',

    borderRadius: '32px',

    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  };  
  return (
    <div>
      <div
        className="w-full h-full flex flex-col justify-between items-center"
        style={{
          // border: '1px solid pink',
          marginTop: '48px',
          overflow: 'hidden',
          padding: '0 4px',
        }}
      >
        {/* FilmRow header title */}
        <div className='w-full flex-start'>
          <h3 className='text-white'
            style={{
              fontWeight: '600',
              fontSize: '30px',
              lineHeight: '36px',
              flex: 'start',
              marginBottom: '28px',
            }}
          >
            {filmRowTitle}
          </h3>
        </div>

        {/* video */}
        <div className='w-full'>
            {/* video img */}
            <div style={posterStyle}>
              <div className='w-full flex-start'
                style={{
                  height:'108px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  padding: '36px',
                }}
              >
                <h3 className='text-white'
                  style={{
                    fontWeight: '600',
                    fontSize: '30px',
                    lineHeight: '36px',
                    flex: 'start',
                    marginBottom: '28px',
                  }}
                >
                  {filmRow[0].title}
                </h3>
              </div>
            </div>
        </div>

        {/* list of film cards */}
        <div className="relative flex flex-row justify-start items-center"
          style={{
            width: '100%',
            gap: '16px',
            border: "1px solid yellow",
            backgroundColor: 'rgb(36,38,49)',
            // overflow: 'hidden',
          }}
          onClick={() => {
            console.log('filmRow.tsx: clicked: ', filmRow);
            console.log('filmtitle  : clicked: ', filmRow);
          }}
        >
          {/* test filmRow */}
          {/* Film Cards */}
          {filmRow.map((film : FilmData, index : number) => (
            <div key={index} onClick={() => {
              console.log(filmRow);
              // setPreviousFilmIndex(index);
              // setSelectedFilm(film);
            }}>
              <FilmCardDetailInRow
                posterSrc={film.posterSrc}
                title={film.title}
                rating={film.rating}
                genre={film.genres[0]}
                // isSelected={previousFilmIndex === index}
                onClick={() => {
                  console.log('filmRow.tsx: clicked');
                  // setPreviousFilmIndex(index);
                  // setSelectedFilm(film);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const homepageDetail = ()=> {
  const filmPosterDetail = {
    posterSrc: '/assets/images/film1.png',
    title: 'Wednesday',
    logoSrc: '/assets/images/Logo-Wednesday.png',
    description: "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
    rating: 8.2,
    duration: 130,
    releaseDate: 'Sep 23 2023',
    genres: ['Drama', 'Adventure'], 
  
    stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
    director: 'Simon McQuoid',

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
     filmRowTitle: 'Similar Movies for you',
     filmRow: [
       {
         posterSrc: '/assets/images/film1.png',
         title: 'Wednesday',
         logoSrc: '/assets/images/Logo-Wednesday.png',
         description: "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
         rating: 8.2,
         duration: 130,
         releaseDate: 'Sep 23 2023',
         genres: ['Drama', 'Adventure'], 
   
         stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
         director: 'Simon McQuoid',
       },
   
       {
         title: 'NGƯỜI VỢ CUỐI CÙNG',
         posterSrc: '/assets/images/film1.png',
         description: "test description",
         rating: 9.0,
         duration: 130,
         releaseDate: 'Sep 23 2023',
         genres: ['Drama','Adventure'],
         
         stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
         director: 'Simon McQuoid',
       },
   
   
       {
         posterSrc: '/assets/images/film1.png',
         title: 'ÂM MƯU GÓT DÀY NHỌN',
         description: "test description",
         rating: 9.0,
         duration: 130,
         releaseDate: 'Sep 23 2023',
         genres: ['Drama', 'Adventure'],
         stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
         director: 'Simon McQuoid',
       },
   
   
       {
         posterSrc: '/assets/images/film1.png',
         title: 'CÔ HẦU GÁI',
         description: "test description",
         rating: 9.0,
         duration: 130,
         releaseDate: 'Sep 23 2023',
         genres: ['Drama', 'Adventure'],
         stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
         director: 'Simon McQuoid',
       },
   
   
       {
         posterSrc: '/assets/images/film1.png',
         title: 'Chị Chị Em Em',
         description: "test description",
         rating: 9.0,
         duration: 130,
         releaseDate: 'Sep 23 2023',
         genres: ['Drama', 'Adventure'],
         stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
         director: 'Simon McQuoid',
       },
   
       {
         posterSrc: '/assets/images/film1.png',
         title: 'Chị Chị Em Em 2',
         description: "test description",
         rating: 9.0,
         duration: 130,
         releaseDate: 'Sep 23 2023',
         genres: ['Drama', 'Adventure'],
         stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
         director: 'Simon McQuoid',
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
      {
        posterSrc: '/assets/images/film1.png',
        title: 'Bring Wednesday back to live',
        logoSrc: '/assets/images/Logo-Wednesday.png',
        description: "Wednesday Addams, a teenager who possesses psychic powers.Wednesday's cold, emotionless personality and her defiant nature make it difficult for her to connect with her schoolmates and cause her to run afoul of the school's principal Larissa Weems. However, she discovers she has inherited her mother's psychic abilities which allow her to solve a local murder mystery.",
        rating: 8.2,
        duration: 130,
        releaseDate: 'Sep 23 2023',
        genres: ['Drama', 'Adventure'], 
  
        stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
        director: 'Simon McQuoid',
      },
  
      {
        title: 'NGƯỜI VỢ CUỐI CÙNG',
        posterSrc: '/assets/images/film1.png',
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: 'Sep 23 2023',
        genres: ['Drama','Adventure'],
        
        stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
        director: 'Simon McQuoid',
      },
  
  
      {
        posterSrc: '/assets/images/film1.png',
        title: 'ÂM MƯU GÓT DÀY NHỌN',
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: 'Sep 23 2023',
        genres: ['Drama', 'Adventure'],
        stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
        director: 'Simon McQuoid',
      },
  
  
      {
        posterSrc: '/assets/images/film1.png',
        title: 'CÔ HẦU GÁI',
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: 'Sep 23 2023',
        genres: ['Drama', 'Adventure'],
        stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
        director: 'Simon McQuoid',
      },
  
  
      {
        posterSrc: '/assets/images/film1.png',
        title: 'Chị Chị Em Em',
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: 'Sep 23 2023',
        genres: ['Drama', 'Adventure'],
        stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
        director: 'Simon McQuoid',
      },
  
      {
        posterSrc: '/assets/images/film1.png',
        title: 'Chị Chị Em Em 2',
        description: "test description",
        rating: 9.0,
        duration: 130,
        releaseDate: 'Sep 23 2023',
        genres: ['Drama', 'Adventure'],
        stars: 'Lewis Tan, Jessica McNamee, Josh Lawson',
        director: 'Simon McQuoid',
      },
      // Add more films here
      // Define the film data
    ]
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
        <FilmPosterDetail
          posterSrc={filmPosterDetail.posterSrc}
          title={filmPosterDetail.title}
          logoSrc={filmPosterDetail.logoSrc}
         
         
          duration={filmPosterDetail.duration} 
          releaseDate={filmPosterDetail.releaseDate}
          genres={filmPosterDetail.genres}
          stars={filmPosterDetail.stars}
          director={filmPosterDetail.director}

          NFTClaimImg={filmPosterDetail.NFTClaimImg}
          NFTEventName={filmPosterDetail.NFTEventName}
          expirationDate={filmPosterDetail.expirationDate}

          trailerVideo={filmPosterDetail.trailerVideo}
          trailerImg={filmPosterDetail.trailerImg}
          eventImg={filmPosterDetail.eventImg}

        />

        {/*  */}

        {/* exclusive photo */}
        {/* fail to close */}
        <ExclusivePhoto
          galleryImgUrls={filmPosterDetailImage.galleryImgUrls}
        />

        {/* token gate benefit */}

        {/* red band trailer */}
        {
          redBandTrailer.map((sectionFilmRow: sectionFilmRow) => (
            <FilmRowDetail
              // key={sectionFilmRow.title}
              filmRowTitle={sectionFilmRow.filmRowTitle}
              filmRow={sectionFilmRow.filmRow}
            />
          ))
        }
        {/* behind the scences */}

        {/* talk to the starts */}
        
        {
          similarFilms.map((sectionFilmRow: sectionFilmRow) => (
            <FilmRow
              // key={sectionFilmRow.title}
              filmRowTitle={sectionFilmRow.filmRowTitle}
              filmRow={sectionFilmRow.filmRow}
            />
          ))
        }


      </div>
    </div>
  );
};

export default homepageDetail;
