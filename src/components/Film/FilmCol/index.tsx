'use client'

import React,{ useState } from 'react';

import './LiveFilmCol.css'
import { FilmEntity } from '@/graphql/generated';
import { formatDateToMMMDD } from '@/src/lib';
import { FilmCardInColProps, sectionFilmCol } from '../../../types/types';

export const FilmCardInCol = ({ posterSrc, title, genre, rating, duration,isSelected, onClick, releaseDate }: FilmCardInColProps) => {
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
    <div  className='px-[4px] pt-[4px]'
    style={{
      // border: '1px solid blue',
    }}
    >
      <div 
        className={`FilmCardInCol-BG ${isSelected ? 'selectedFilmCardInCol-BG' : ''}`}
        style={{
          // border: '1px solid red',
        }}
        onClick={onClick}
      >
        
        <div className="FilmCardInCol "
          style={{        

          display: 'flex',

          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '16px',
          padding: '8px',
          backgroundColor: isSelected ? '#0f0f29' : '', 

        }}>
          
          {/* film image */}
          <div style={imageCardStyle} />
          
          {/* film info */}
          <div style={{
            width:  "100%",
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
                  lineHeight: '24px',

                }}>
              {title}
              </h4>
            
            
              <div style={{
                display: 'flex',  
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
      
                <div style={{
                  display: 'flex',
                  marginRight: '16px',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: '8px',
                }}>
                    <p
                      className="text-white font-light text-12"
                      style={{
                          opacity: "0.6",
                      }}
                    >
                        {genre[0] +  " • Movie "}
                      </p>
                </div>
              
                {/* duration */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                }}>           

                  <p className='text-white font-thin text-16'>
                      {"| " + duration + " mins"}
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
                {formatDateToMMMDD(releaseDate)}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export const FilmCol = ({filmColTitle, filmCol} : sectionFilmCol) => {
  const [selectedFilm, setSelectedFilm] = useState<FilmEntity | null>();
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
        <svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="green" /></svg>
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
        {filmCol.map((film : FilmEntity, index: number) => (
          <div key={index} onClick={() => {
          
          }}>
            <FilmCardInCol 
              genre = {film.genres}
              posterSrc={film.background} title={film.name} 
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