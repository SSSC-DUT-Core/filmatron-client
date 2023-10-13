'use client'

import React, { useState, useEffect } from 'react';

import './filmPosterDetail.css'
import { FilmCompressedNftEntity, useMintCompressedNftMutation } from '@/graphql/generated';
import { Button } from '../../ui/button';

interface CNFT {
    id: string;
    name: string;
    description?: string;
    symbol: string;
}

export type FilmPosterDetailProps = {
    posterSrc: string;
    filmId: string;
    logoSrc?: string;
    title: string;

    duration: number;
    releaseDate: string;
    genres: string[];

    stars: string[];
    director: string[];

    NFTClaimImg?: string;
    NFTEventName?: string;
    expirationDate?: string;

    trailerVideo?: string;
    trailerImg?: string;
    eventImg?: string;

    onClick?: () => void;
    listCnft: FilmCompressedNftEntity[];
};

export const calculateRemainingTime = (expirationTime: number) => {
  const now = new Date().getTime();
  const timeDifference = expirationTime - now;

  if (timeDifference > 0) {
    const totalMilliseconds = timeDifference;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    const formattedHours = hours > 9 ? hours : `0${hours}`;
    const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`;
    const formattedSeconds = seconds > 9 ? seconds : `0${seconds}`;

    return `${formattedHours}H : ${formattedMinutes}M : ${formattedSeconds}S`;
  }

  return 'Expired';
};

export const NFTClaimBarTimeCountDown = ({ expirationDate }: { expirationDate?: string }) => {
    const [remainingTime, setRemainingTime] = useState('?H: ?M: ?S');
    const expirationTime = new Date(String(expirationDate)).getTime();

    useEffect(() => {
  
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


export const displayGenres = (genres: string[]) => {
  return (
    <div className="max-w-450 flex flex-wrap">
      {genres.map((genre, index) => (
        <div
          key={index}
          className="genreTag"
>
          <p className="font-bold text-16">{genre}</p>
        </div>
      ))}
    </div>
  );
};

  

export const FilmPosterDetail = ({ posterSrc, logoSrc, title, duration, releaseDate, genres, stars, director, NFTClaimImg, NFTEventName, expirationDate, trailerImg, listCnft}: FilmPosterDetailProps) => {
    const posterStyle = {
    // border: '1px solid red',
    backgroundImage: `url(${posterSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: "648px", 
    width: "100%",
    padding: "0rem 2rem  2.5rem 2rem",

    borderRadius: '32px',
  };  

  const trailerImgStyle = {
    backgroundImage: `url(${trailerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: "16rem", 
    border: '1px solid #fdd848',

  };
  const [mintCompressedNftMutation, { data, loading }] =
      useMintCompressedNftMutation({
        variables: {
            cNFTId: listCnft?.[0]?.id,
        },
          context: {
              headers: {
                  Authorization: localStorage.getItem("access_token"),
              },
          },
      });

  const onClaim = async () => {
    mintCompressedNftMutation({
        variables: {
            cNFTId: listCnft?.[0]?.id,
        },
        context: {
            headers: {
                Authorization: localStorage.getItem("access_token"),
            },
        },
      
    });
  };
  

  return (
    <div className="relative flex items-end mb-6" style={posterStyle}>
      
      {/* poster logo + info section */}
      <div className=''
        style={{
          // border: '1px solid green',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          // padding: '10px 0 10px 0',
          // top: '6%',
          display: 'flex',
          gap: "16px",
          width: '50%',
        }}
      >

        {/* logo or tile of film */}
        <div className='flex items-center text-center w-1/3'
          style={{
          }}
        >
          {logoSrc ? (
             <img className="" src={logoSrc} alt="" />
             ) : (
              <h1 className="text-white font-bold font-inter text-4xl font-extrabold leading-8 tracking-tight text-center">
              {title}
            </h1>
             )}
        </div>
        
      
        {/* img trailer + poster info wrapper */}
        <div className='flex items-start justify-start flex-row gap-4'>
          {/* img trailer */}
          <div
          className="w-1/3"
            style={trailerImgStyle}
           />
         
          
          <div className='flex items-start justify-start flex-col'>
            {/*  Release date and duration */}
            <div className='flex '
              style={{
                marginBottom: '16px',
              }}
            >
              {/*  Release date: */}
              <div className='flex justify-center item-center gap-4 mr-4'>
                <p className='text-white font-bold text-16'
                  style={{
                    
                    color: '#fdd848',
                  }}
                >
                  Release date: 
                </p>
                <p className='text-white font-normal text-16'
                  style={{
                    
                  }}
                >
                  {releaseDate}
                </p>
              </div>

              {/* duration */}
              <div className='flex'>
                <svg
                style={{
                  marginRight: '8px',
                }}
                width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z" fill="white" fillRule="evenodd" clipRule="evenodd" /></svg>
                <p className='text-white font-normal text-16 '
                  style={{
                    
                  }}
                >
                  {duration} mins
                </p>
              </div>
            </div>

            {/* genre */}
            <div className='flex'
            >
              <p className='text-white font-bold text-16'
                style={{
                  marginRight: '16px',
                  
                  lineHeight: '28px',
                  color: '#fdd848',
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
                color: '#fdd848',
              }}
              > 
                Star: 
              </p>
              <p className='text-white font-normal text-16'
                style={{
                  opacity: '0.9',
                }}
              >
                {stars?.join(", ")}
              </p>
            </div>
          
            {/* director */}
            <div className='flex '
              >
                <p className='font-bold text-16'
                style={{
                  marginRight: '16px',
                  // lineHeight: '28px',
                  color: '#fdd848',
                }}
                > 
                  Director: 
                </p>

                <p className='text-white font-normal text-16'
                  style={{
                    opacity: '0.9',
                  }}
                >
                  {director?.join(", ")}
                </p>
            </div>

                      <div
                          className="flex"
                          style={{
                              gap: "16px",
                              marginTop: "16px",
                          }}
                      >
                          <button className="filmButton watch-button">
                              <div style={{ marginRight: "8px" }}>
                                  <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 15 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <path
                                          d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                                          fill="currentColor"
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                      />
                                  </svg>
                              </div>
                              Watch Trailer
                          </button>
                      </div>
          </div>
          
        </div>
        
      </div>

      {/* NFT claim section */}
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
             
            bottom: '-128px',
            right: '-20px',
          }}>
          {/* NFT image */}
          <div> 
            
            <img 
              className="NFTImage"
              style={{
                width: '12rem',  // 192px converted to rem
                height: '17rem', // 272px converted to rem
                // borderRadius: '16px',
                transform: 'translate(-50%, -50%)',

                // image props to not crash the img
                objectFit: 'cover',
                objectPosition: 'center',

                // boxShadow: '7px -7px 0 -1px #ffffff, 7px -7px #c6a66d, 14px -14px 0 -1px #ffffff, 14px -14px #c6a66d, 21px -21px 0 -1px #ffffff, 21px -21px #c6a66d',

                // border: '1px solid #f0c679'

                
              }}  
              src={NFTClaimImg} 
              alt="" 
            />
           
          

          </div>



          {/* NFT claim bar */}
          <div className='flex row justify-between items-center'
            style={{
              width: '24rem',
              height: '5rem',
              borderRadius: '16px',
              border: '1px solid rgb(255, 255, 255)',
              padding: '16px',
              gap: '4px',
              backgroundColor: 'rgba(30, 30, 30, 0.12)',
              position: 'absolute',
              top: '16%',
              right: '8%',
              backdropFilter: 'blur(30px)',
            }}
          >

            {/* NFT claim bar infor */}
            <div className='flex row justify-between items-center gap-[16px]'
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

                          <div className="flex col justify-center items-center">
                              <NFTClaimBarTimeCountDown
                                  expirationDate={expirationDate}
                              />
                          </div>
                      </div>

                     { listCnft && 
                      <Button className="NFTClaimButton" disabled={loading} onClick={onClaim}>
                          CLAIM
                      </Button>}
                  </div>
              </div>
          </div>
      </div>
  );
};
  