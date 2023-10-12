'use client'

import React, { useState } from 'react';

import { FilmEntity } from '@/graphql/generated';
import { FilmCardInCol } from '@/src/components/Film/FilmCol';
import { NFTs } from '@/src/types/types';
import { NFTsDisplay } from '../NFTsDisplay';

interface LiveFilmSectionProps  {
  films: FilmEntity[];
}
export const LiveFilmSection = ({ films }: LiveFilmSectionProps) => {
  
    const [selectedFilm, setSelectedFilm] = useState<FilmEntity | null>(films?.[0]);
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
              width: '33%', 
              height: '560px',
        
            
         
  
              overflow: 'hidden',
  
            }}
          >

           
            <div className="w-full h-full flex flex-col items-center"
              style={{
            
              }}
            >
              {/* title of live flims */}
              <div className='w-full flex-start mb-[16px] gap-[16px]'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {/* <svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="green" /></svg> */}
                
                <div className="w-[16px] h-[16px]  rounded-full p-3 bg-[#00C5A3] leading-9">
                </div>
                
                <h3 className='text-white'
                  style={{
                    fontWeight: '600',
                    fontSize: '30px',
                    lineHeight: '36px',
                    flex: 'start',
               
                  }}
                >
                  {/* Icon live status */}
                  Most popular collectibles
                </h3>
              </div>
              
              {/* list of film cards */}
              <div className="relative flex-end w-full h-640 overflow-y-scroll scrollbar-track-gray-300 overflow-x-hidden">
                {/* Film Cards Col */}
                {films?.map((film: FilmEntity, index: number) => (
                  <div key={index} onClick={() => {}}>
                    <FilmCardInCol 
                      genre={film.genres}
                      posterSrc={film.avatar} title={film.name} 
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
              width: '70%',
              backgroundColor: '#131020', 

  
              // border: '8px solid blue',
              borderRadius: '32px',
  
              // border: "1px solid red",
  
              overflow: 'hidden',
              
              boxShadow: '0px 4px 50px 0px rgba(106, 45, 206, 0.65), 0px 4px 30px 0px rgba(243, 200, 121, 1)',
            
              padding: '38px 12px ',  

              marginLeft: '20px',
            }}
          >
            {selectedFilm && (
             
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