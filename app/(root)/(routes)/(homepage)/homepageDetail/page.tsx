'use client'
import React, { useState, useEffect } from 'react';


import {FilmRow } from '../FilmRow/index';

import { FilmCardInColProps, sectionFilmCol, films, NFT, FilmData, sectionFilmRow, FilmCardInRowProps } from '../data';
import './filmPosterDetail.css'


const calculateRemainingTime = (expirationTime: number) => {
  const now = new Date().getTime();
  const timeDifference = expirationTime - now;

  if (timeDifference > 0) {
    const totalHours = Math.floor(timeDifference / (1000 * 60 * 60));
    // const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${totalHours}H : ${minutes}M : ${seconds}S`;
  }

  return 'Expired';
};

export const NFTClaimBarTimeCountDown = ({ expirationDate }: { expirationDate: string }) => {
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const expirationTime = new Date(expirationDate).getTime();

    const updateRemainingTime = () => {
      setRemainingTime(calculateRemainingTime(expirationTime));
    };

    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, [expirationDate]);

  return (
    <div className='flex col justify-center items-center'>
      <div>
        <p className='font-bold text-16' style={{ color: '#00FFEE', marginBottom: '8px' }}>
          Remaining Time
        </p>
        <p className='font-bold text-16' style={{ width: '142px', color: '#FFFFFF' }}>
          {remainingTime}
        </p>
      </div>
    </div>
  );
};

export type RatingProps = {
  rating: number; // Giá trị rating trong khoảng từ 0 đến 10
};

const RatingStars = ({ rating }: RatingProps) => {
  const totalStars = 5; // Tổng số ngôi sao cố định
  const filledStars = Math.floor(rating/2); // Số ngôi sao se được tô màu
  // const hasHalfStar = (rating/2 - filledStars) >= 0.5; // 

  return (
    <div className="flex items-center"
      style={{
        gap: '4px',
        marginRight: '8px',
      }}
    >
      {Array.from({ length: totalStars }, (_, index) => {
        let starColor = "gray"; // Mặc định màu xám cho ngôi sao
        if (index < filledStars) {
          starColor = "#f9d03a"; // Tô màu vàng cho các ngôi sao đã đánh giá
        } 
        //else if (index === filledStars && hasHalfStar) {
        //   starColor = "#f9d03a"; // Tô màu vàng cho nửa ngôi sao cuối cùng
        // }

        return (
          <svg
            key={index}
            width="20"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.96470 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.7050 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.8030 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171Z"
              fill={'#f9d03a'}
            ></path>
          </svg>
        );
      })}
    </div>
  );
};

export type FilmPosterDetailProps = {
  posterSrc: string;

  logoSrc?: string;
  title: string;

  description: string;
  rating: number;
  duration: number;
  //example: '2023-09-13'
  releaseDate: string;
  genres: string[];
  
  stars: string;
  director: string;

  NFTClaimImg: string;
  NFTEventName: string;
  expirationDate: string;

  trailerVideo?: string;
  trailerImg?: string;
  eventImg?: string;

  onClick?: () => void;
};

const displayGenres = (genres: string[]) => {
  const genreChunks = [];

  // Chia mảng genres thành các phần tử con chứa 5 thể loại mỗi phần
  for (let i = 0; i < genres.length; i += 5) {
    genreChunks.push(genres.slice(i, i + 5));
  }

  return (
    <div>
      {genreChunks.map((chunk, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row'}}>
          {chunk.map((genre, genreIndex) => (
            <div
              key={genreIndex}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(30px)',
                borderRadius: '40px',
                padding: '2px 8px 2px 8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                marginRight: '16px',
                marginBottom: '16px',
              }}
            >
              <p className='font-bold text-16' style={{ color: '#00FFEE' }}>
                {genre}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


const FilmPosterDetail = ({ posterSrc, logoSrc, title, description, rating, duration, releaseDate, genres, stars, director, NFTClaimImg, NFTEventName, expirationDate,  trailerVideo, trailerImg, eventImg, onClick}: FilmPosterDetailProps) => {
  const posterStyle = {
    // border: '1px solid red',
    backgroundImage: `url(${posterSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: "648px", 
    width: "100%",
    padding: "68px 98px",

    borderRadius: '32px',
  };  

  type imageStyleProps = {
    rating: string; 
  };

  const imageStyle = (imageUrl: imageStyleProps) => ({
    width: '144px',
    height: '80px',
    borderRadius: '8px',
    border: '1px solid #000000',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });
  

  return (
    <div className="relative flex" style={posterStyle}>
      
      {/* poster */}
      <div className=''
        style={{
          // border: '1px solid green',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          // padding: '10px 0 10px 0',
          // top: '6%',
          // display: 'block',

          width: '50%',
        }}
      >

        {/* logo tile of film */}
        <div className='flex items-center justify-start mb-[16px]'
          style={{
            // border: '1px solid red',
          }}
        >
          {logoSrc ? (
             <img className="" src={logoSrc} alt="" />
             ) : (
               <h1 className='text-white font-bold'
                style={{
                  fontSize: '32px',
                  lineHeight: '48px',
                }}
               >{title}</h1>
             )}
        </div>
        
        {/* poster description */}
        <div className="">
          <p className="text-white font-thin text-16"
            style={{
              textAlign: "start",
              marginBottom: '32px',
              opacity: '0.8',
            }}
          >
            {description}
          </p>
        </div>

          
        <div className='flex items-start justify-start flex-col'>
          
          {/* rating, duration */}
          <div className='flex justify-center'
            style={{
              marginBottom: '16px',
            }}
          >
            {/* rating */}
            <div className='flex'
              style={{
                marginRight: '16px',
              }}
            >
              <RatingStars rating={rating}/>
              <p className='text-white font-thin text-16 opacity-80'
                style={{
                  opacity: '0.8',
                }}
              >{rating}/10</p>
            </div>  
            
            {/* duration */}
            <div className='flex'>
              <svg
              style={{
                marginRight: '8px',
              }}
               width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z" fill="white" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              <p className='text-white font-thin text-16 '
                style={{
                  opacity: '0.8',
                }}
              >
                {duration} mins
              </p>
            </div>
          </div>

          {/*  Release date: */}
          <div className='flex'
            style={{
              marginBottom: '16px',
            }}
          >
            <p className='text-white font-bold text-16'
              style={{
                marginRight: '16px',
                opacity: '0.8',
                color: '#F3C879',
              }}
            >
              Release date: 
            </p>
            <p className='text-white font-thin text-16'
              style={{
                opacity: '0.8',
              }}
            >
              {releaseDate}
            </p>
          </div>

          {/* genre */}
          <div className='flex'
          >
            <p className='text-white font-bold text-16'
              style={{
                marginRight: '16px',
                opacity: '0.8',
                lineHeight: '28px',
                color: '#F3C879',
              }}
            >
              Genre:
            </p>
            
            <div className='flex '
            >
              {displayGenres(genres)}
            </div>
          </div>

          {/* stars */}
          <div className='flex'
            style={{
              marginBottom: '16px',
            }}  
          >
            <p className='font-bold text-16'
            style={{
              marginRight: '16px',
              // lineHeight: '28px',
              color: '#F3C879',
            }}
            > 
              Star: 
            </p>
            <p className='text-white font-thin text-16'
              style={{
                opacity: '0.9',
              }}
            >
              {stars}
            </p>
          </div>
        
          {/* director */}
          <div className='flex '
            >
              <p className='font-bold text-16'
              style={{
                marginRight: '16px',
                // lineHeight: '28px',
                color: '#F3C879',
              }}
              > 
                Director: 
              </p>

              <p className='text-white font-thin text-16'
                style={{
                  opacity: '0.9',
                }}
              >
                {director}
              </p>
          </div>

          {/* 2 button
            // onClick={handleWatchButton} 
            // onClick={handleMoreInfoButton}  */}
          <div className='flex'
            style={{
                gap: '16px',
                marginTop: '16px',
              }}
          >
          {/* <button
            className='filmButton watch-button'
          >
            <div
              style={{marginRight: '8px'}}
            >
              <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
            Watch Trailer
          </button> */}
          
          {/* Trailer Video */}
          {/* <div className='posterDetailVideoImg' style={imageStyle(trailerImg)}></div>
          <div className='posterDetailVideoImg' style={imageStyle(eventImg)}></div> */}

        
          </div>
          
        </div>
        
      </div>

      {/* NFT claim section*/}
      <div
          style={{
          // border: '1px solid red',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          width: '50%',
      
          position: 'relative',
        }}
      >
        <div style={{
              position: 'absolute',
              top: '52%',
              right: '-20%',
          }}>
          {/* NFT image */}
          <div> 
            
            <img 
              className="NFTImage"
              style={{
                width: '296px',
                height: '371px',
                // borderRadius: '16px',
              
                
                transform: 'translate(-50%, -50%)',

                // image props to not crash the img
                objectFit: 'cover',
                objectPosition: 'center',

                boxShadow: '7px -7px 0 -1px #ffffff, 7px -7px #c6a66d, 14px -14px 0 -1px #ffffff, 14px -14px #c6a66d, 21px -21px 0 -1px #ffffff, 21px -21px #c6a66d',

                border: '1px solid #f0c679'

                
              }}  
              src={NFTClaimImg} 
              alt="" 
            />
           
            {/* <img 
              className="NFTImage"
              style={{
                width: '296px',
                height: '371px',
                // borderRadius: '16px',
              
                
                transform: 'translate(-50%, -50%)',
                // image props to not crash the img
                objectFit: 'cover',
                objectPosition: 'center',
              
                border: '1px solid #f0c679'
                
              }}  
              src={NFTClaimImg} 
              alt="" 
            />   */}

          </div>


          {/* <div className=''
              style={{
                position: 'absolute',
                top: '-34%',
                right: '23%',
              }}  
            >
              <div className='NFTImg-multi-border '>
                <div className='NFTImg-multi-border '>
                  
                </div>
              </div>
            </div> */}

          {/* NFT claim bar */}
          <div className='flex row justify-between items-center'
            style={{
          
              width: '418px',
              height: '84px',
              borderRadius: '16px',

              border: '1px solid #FFFFFF',

              padding: '16px',

              gap: '16px',

              backgroundColor: 'rgba(30, 30, 30, 0.12)',

              position: 'absolute',
              top: '22%',
              right: '40%',

              // blur 30
              backdropFilter: 'blur(30px)',
            }}
          >

            {/* NFT claim bar infor */}
            <div className='flex row justify-between items-center'
              style={{
                // border: '1px solid orange',
                width: '256px',
                height: '54px',
              }}
            >

              {/* NFT event */}
              <div className='flex col'
              >
                <div>
                    <p className='font-bold text-16' style={{ 
                      color: '#00FFEE', 
                      marginBottom: '8px',
                    }}>
                      NFT Event
                    </p>
                    
                    <p className='font-bold text-16' style={{ color: '#FFFFFF' }}>
                      {NFTEventName}
                    </p>
                </div>
              
              </div>

              {/* remaining time */}
              <div className='flex col justify-center items-center'
              >
                  <NFTClaimBarTimeCountDown expirationDate={expirationDate} />
              </div>

            
            </div>

            {/* Claim Button */}
            <button
              className='NFTClaimButton'
            >
              CLAIM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};




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


// const privateResouceSector = (title: any, )=> {
//     <div className='w-full flex-start'>
//     <h3 className='text-white'
//       style={{
//         fontWeight: '600',
//         fontSize: '30px',
//         lineHeight: '36px',
//         flex: 'start',
//         marginBottom: '8px',
//       }}
//     >
//       {title}
//     </h3>
// </div>
// }

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
    trailerImg: './assets/images/film1.png',

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
          description={filmPosterDetail.description}
          rating={filmPosterDetail.rating}
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
