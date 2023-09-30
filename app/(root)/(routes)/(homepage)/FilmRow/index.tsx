'use client'
import React from 'react';

import {films,  FilmData, FilmCardInRowProps, sectionFilmRow, listOfSectionFilmRows} from '../../homepage/data';
import './filmRow.css'



const FilmCardInRow = ({ posterSrc, title, rating, genre, onClick }: FilmCardInRowProps) => {
  const imageCardRowStyle = {
    // border: '10px solid red',
    backgroundImage: `url(${posterSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
    width: "248px",
    height: "183px",
  
    borderRadius: '16px',   
  };  
  
  
  return (
    <div 
      className="FilmCardInRow-BG border-gradient mt-4"
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
        gap: '16px',
        backgroundColor:'#0f0f29', 

        // marginRight: '16px',

      }}>
        
        {/* film card image */}
        <div style={imageCardRowStyle}>
        </div>
        
        {/* film card info */}
        <div style={{
          width: '100%',
          height: '80px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          
          {/* film card title */}
          {/* font-inter text-base font-normal leading-6 */}
          <h4 className='text-white font-bold text-16'
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
              marginRight: '8px',
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
            
            {/* duration | Action • Movie*/} 
            <div style={{
              display: 'flex',
              alignItems: 'center',
            }}>           

              <p className='text-white font-light text-12'
                style={{
                  opacity: '0.6',
                }}
              >
                {/* | {duration} mins */}
                 | {genre} • Movie    
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const FilmRow = ({ filmRowTitle, filmRow } : sectionFilmRow) => {
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
              marginBottom: '8px',
            }}
          >
            {filmRowTitle}
          </h3>
        </div>

        {/* list of film cards */}
        <div className="relative flex flex-row justify-start items-center"
          style={{
            width: '100%',
            gap: '16px',
            // border: "1px solid yellow",
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
              <FilmCardInRow
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
  