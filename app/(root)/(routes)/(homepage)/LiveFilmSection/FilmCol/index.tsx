'use client'
import { useState } from 'react';
import React from 'react';

import './LiveFilmCol.css'
import { FilmCardInColProps, sectionFilmCol, films } from '../../data';
import { FilmData } from '../../FilmDetail';

export const FilmCardInCol = ({ posterSrc, title, rating, duration, releaseDate,isSelected, onClick }: FilmCardInColProps) => {
  const imageCardStyle = {
    // border: '10px solid red',
    backgroundImage: `url(${posterSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
    width: "60px",
    height: "80px",

    borderRadius: '8px',

  };  
  
  
  return (
    <div 
      className={`FilmCardInCol-BG ${isSelected ? 'selectedFilmCardInCol-BG' : ''}`}
      onClick={onClick}
    >
      
       <div className="FilmCardInCol"
        style={{        
        // width: '240px',
        // height: '96px',
      
        // padding: '8px',
        display: 'flex',

        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '16px',

        backgroundColor: isSelected ? '#0f0f29' : '', 
      }}>
        
        {/* film image */}
        <div style={imageCardStyle}>
        </div>
        
        {/* film info */}
        <div style={{
          width: '304px',
          height: '80px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: '12px',
        }}>

          {/* film title, rating and duration */}
          <div className='col '
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '8px',
              width: '70%',
            }}
          
          >
            {/* film title */}
            <h4 className='text-white font-thin text-16'
              style={{
                // // fontSize: '16px',
                // fontWeight: 'bold',
                lineHeight: '24px',

              }}>
            {title}
            </h4>
          
            {/* film rating */}
            <div style={{
            display: 'flex',  
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
            {/* rating */}
            <div style={{
              display: 'flex',
              marginRight: '16px',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '8px',
            }}>
              {/* RatingStars component */}
              {/* <RatingStars rating={rating}/> */}

              {/* star icon */}
              <svg
                  width="20"
                  height="18"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.96470 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.7050 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.8030 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171Z"
                    fill="#f9d03a"
                  ></path>
              </svg>

              <p className='text-white font-thin text-16 opacity-80'>
      
                {rating}
              </p>
            </div>
            
            {/* duration */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
            }}>           

              <p className='text-white font-thin text-16 opacity-80'
                style={{
                  opacity: '0.8',
                }}
              >
                {duration} mins
              </p>
            </div>
            </div>
          </div>

          {/* release date */}
          <div className='col flex'
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="text-white font-bold text-16 opacity-80"
              style={{
                width: 'fit-content', // Sử dụng 'fit-content' thay vì 'Hug (55px)'
                height: 'fit-content', // Sử dụng 'fit-content' thay vì 'Hug (22px)'
                padding: '1px 8px', // Đặt padding là '1px 8px'
                borderRadius: '8px',
                gap: '10px',
                backgroundColor: 'rgba(228, 234, 249, 1)',
                color: 'rgba(30, 30, 30, 1)',
                // fontWeight: 'bold',
          
              }}
            >
              Nov 16
              {/* {releaseDate} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FilmCol = ({filmColTitle, filmCol} : sectionFilmCol) => {
  const [selectedFilm, setSelectedFilm] = useState<FilmData | null>(films[0]);
  const [previousFilmIndex, setPreviousFilmIndex] = useState<number>(0);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center"
      style={{
        // border: '8px solid green',
        // padding: '0 4px',
      }}
    >
      {/* title of live flims */}
      <div className='w-full flex-start '
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="green"></path></svg>
        <h3 className='text-white'
          style={{
            fontWeight: '600',
            fontSize: '30px',
            lineHeight: '36px',
            flex: 'start',
            marginBottom: '8px',
          }}
        >
          {/* Icon live status */}
          {filmColTitle}
        </h3>
      </div>
      
      {/* list of film cards */}
      <div className="relative"
        style={{
          // border: '8px solid black',
          width: 'full', 
          height: '640px',
    
          // border: "1px solid blue",

          // padding: '8px',

          // overflow: 'hidden',

          // overflowY: 'auto',
        }}
      >
        {/* Film Cards Col */}
        {films.map((film : FilmData, index: number) => (
          <div key={index} onClick={() => {
          
          }}>
            <FilmCardInCol 
              posterSrc={film.posterSrc} title={film.title} 
              rating={film.rating} 
              duration={film.duration} 
              releaseDate={film.releaseDate}
              isSelected={previousFilmIndex === index} 
              onClick={() => {
                setPreviousFilmIndex(index);
                
                setSelectedFilm(film);
              }}
            />              
          </div>
        ))}
      </div>

  </div>
  );
};