'use client'

import { useState } from 'react';
import React from 'react';

import { useGetFilmsQuery, FilmEntity } from '@/graphql/generated';
import { mapFilmsFromGraphQLResponse } from '@/lib';
import { LiveFilms, FilmData, NFTs } from '../data';
import { FilmCardInCol } from './FilmCol';
import { NFTsDisplay } from './NFTsDisplay';

export const LiveFilmSection = () => {
  const {data: film,loading,error} = useGetFilmsQuery({
    variables: {
      
    },
    fetchPolicy: 'network-only', // Force a network request
    onCompleted: (data) => {
      setFilmList(mapFilmsFromGraphQLResponse(data));
    }

  });
  const [filmList,setFilmList] = useState<FilmEntity[]>([]);
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
              width: '33%', 
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
                  Most popular collectibles
                </h3>
              </div>
              
              {/* list of film cards */}
              <div className="relative w-full h-640 overflow-y-scroll scrollbar-track-gray-300 overflow-x-hidden">
                {/* Film Cards Col */}
                {LiveFilms.map((film: FilmData, index: number) => (
                  <div key={index} onClick={() => {}}>
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
              width: '75%',
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