'use client'
import { useState } from 'react';
import React from 'react';

import {FilmCol} from './FilmCol';
import { title } from 'process';
import { LiveFilms, FilmData, NFTs } from '../data';
import { FilmCardInCol } from './FilmCol';
import { NFTsDisplay } from './NFTsDisplay';

export const LiveFilmSection = () => {
    const [selectedFilm, setSelectedFilm] = useState<FilmData | null>(LiveFilms[0]);
    const [previousFilmIndex, setPreviousFilmIndex] = useState<number>(0);
  
  
    return (
      <div className="w-full h-full flex flex-row justify-between items-center"
          style={{
            // border: '8px solid green',
          }}
        >
        {/* list of film cards */}
        <div className="relative"
             style={{
              // border: '8px solid black',
              width: '32%', 
              height: '560px',
        
              // border: "1px solid blue",
  
              // padding: '0 18px',
  
              overflow: 'hidden',

              // marginRight: '20px',
  
              // overflowY: 'auto',
            }}
          >

            {/* <FilmCol
                filmColTitle='Live' 
                filmCol={LiveFilms}
            /> */}
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
                  Live
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
                {LiveFilms.map((film : FilmData, index: number) => (
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


        </div>

        {/* NFT Dissplay section */}
        <div className=""
            style={{
              height: '560px',
              // width: '1010px',
              width: '76%',
              backgroundColor: '#131020', 

  
              // border: '8px solid blue',
              borderRadius: '32px',
  
              // border: "1px solid red",
  
              overflow: 'hidden',
              
              boxShadow: '0px 4px 50px 0px rgba(106, 45, 206, 0.65), 0px 4px 30px 0px rgba(243, 200, 121, 1)',
            
              padding: '38px 16px ',  

              marginLeft: '20px',
            }}
          >
            {selectedFilm && (
              //find NFTs of selected film
             
              <div className='w-full h-full' style={{
                // border: '1px solid green',
              }}>
                 <NFTsDisplay
                  NFTs={NFTs}
                />
              </div>
            )}
          </div>
        
  
        {/* NFT display BG */}
    
  
         
  
      </div>
    );
};